# in-built
import logging
import json
import datetime
import requests
import time

# 3rd party
from flask import Flask, render_template
from flask_ask import (
    Ask,
    statement,
    question,
    session, context)


app = Flask(__name__)
ask = Ask(app, "/")
logging.getLogger("flask_ask").setLevel(logging.DEBUG)
journal_endpoint = "https://hackthonapi-webapp-wr.azurewebsites.net/journal"
user_details_endpoint = "https://hackthonapi-webapp-wr.azurewebsites.net/heroes?alexaHeroId={alexa_user_id}"


@ask.intent("AMAZON.CancelIntent")
def cancel_wr_users():
    session.attributes["recentRequest"] = "CancelIntent"
    return statement(render_template('cancel'))


@ask.intent("AMAZON.StopIntent")
def stop_request():
    session.attributes["recentRequest"] = "StopIntent"
    return statement(render_template('cancel'))


@ask.intent("AMAZON.YesIntent")
def respond_for_yes():
    if "recentRequest" in session.attributes:
        if session.attributes["recentRequest"] == "identifyProblem":
            headers = {'content-type': 'application/json'}
            api_data = {
                "alexaHeroId": context.System.user.userId,
                "type": "HB",
                "title": "Heart rate normal",
                "dateTime": datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
                "description": "Health assistance notification",
                "duration": "now"
            }
            requests.post(url=journal_endpoint, data=json.dumps(api_data), headers=headers)
            currentTime = datetime.datetime.now()
            greeting = "day"

            if currentTime.hour < 12:
                greeting = "morning"

            elif 12 <= currentTime.hour < 18:
                greeting = "afternoon"

            else:
                greeting = "evening"
            answer = render_template('issue_sorted').format(greeting=greeting, user_name=session.attributes["user_name"]
                                                            )
            return statement(answer)

        else:
            return question(render_template('un_indentified'))

    else:
        return statement(render_template('un_indentified'))


@ask.intent("AMAZON.NoIntent")
def respond_for_no():
    if "recentRequest" in session.attributes:
        if session.attributes["recentRequest"] == "identifyProblem":
            headers = {'content-type': 'application/json'}

            api_data = {
                "alexaHeroId": context.System.user.userId,
                "type": "PH",
                "title": "Call with Dan",
                "dateTime": datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
                "description": "Volunteer Assistance via Alexa app",
                "duration": "< 1 minute"
            }

            requests.post(url=journal_endpoint, data=json.dumps(api_data), headers=headers)
            time.sleep(2)

            api_data = {
                "alexaHeroId": context.System.user.userId,
                "type": "HB",
                "title": "Heart rate normal",
                "dateTime": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
                "description": "Health assistance notification",
                "duration": "now"
            }
            requests.post(url=journal_endpoint, data=json.dumps(api_data), headers=headers)

            return statement(render_template("initiate_call"))

        else:
            return statement(render_template("cancel"))


@ask.intent("AMAZON.HelpIntent")
@ask.intent("identifyProblem", convert={'ally_problem_user': str})
def identify_issue(ally_problem_user):
    session.attributes["recentRequest"] = "identifyProblem"
    headers = {'content-type': 'application/json'}

    api_data = {
        "alexaHeroId": context.System.user.userId,
        "type": "HR",
        "title":  "Increased Heart rate found",
        "dateTime": datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M:%S"),
        "description": "Health check notification",
        "duration": "> 1 minute"
    }
    requests.post(url=journal_endpoint, data=json.dumps(api_data), headers=headers)
    time.sleep(1)
    user_endpoint = user_details_endpoint.format(alexa_user_id=context.System.user.userId)
    resp = requests.get(user_endpoint)
    user_response = resp.json()
    session.attributes["user_name"] = user_response["name"]
    session.attributes["user_network_id"] = user_response["id"]
    session.attributes["user_described_word"] = ally_problem_user

    api_data = {
        "alexaHeroId": context.System.user.userId,
        "type": "EP",
        "title":  "Alexa assistance",
        "dateTime": datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        "description": "Volunteer Assistance via Alexa app",
        "duration": "< 1 minute"
    }
    requests.post(url=journal_endpoint, data=json.dumps(api_data), headers=headers)

    return question(render_template('assist_hero').format(user_name=user_response["name"]))


@ask.session_ended
def session_ended():
    return statement("")


@ask.launch
def start():
    session.attributes["recentRequest"] = "launch"
    user_endpoint = user_details_endpoint.format(alexa_user_id=context.System.user.userId)
    user_response = requests.get(user_endpoint)
    session.attributes["user_name"] = user_response["name"]
    session.attributes["user_network_id"] = user_response["id"]
    welcome_msg = render_template('welcome').format(user_name=user_response["name"])
    return question(welcome_msg).reprompt(render_template('re_prompt'))


@app.route('/health')
def health():
    return json.dumps({"status": "Alive"}, indent=6), 200
