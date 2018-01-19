import 'es6-promise/auto';
import 'isomorphic-fetch';

import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from './nav';
import ListItem from './listItem';
import moment from 'moment';

const api = 'https://hackthonapi-webapp-wr.azurewebsites.net';

class Journal extends Component {
  constructor(props, context) {
    super(props, context);

    this.pollTimer = {};

    this.state = {
      fetching: true,
      entries: []
    };
  }

  componentDidMount() {
    this.pollTimer = setInterval(() => {
      fetch(
        `${api}/journal?heroId=1`, {
        mode: 'cors',
        headers: {
          Accept: 'application/json',
        }
      })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok');
      })
      .then((json) => {
        this.setState({
          fetching: false,
          entries: json
        });
      })
      .catch((error) => {
          console.error('Error making API call: ' + error.message);
      });
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.pollTimer);
  }

  render() {
    const content = () => {
      if (this.state.fetching) {
        return (
          <div className="graphic">
            <div className="loader">Loading...</div>
          </div>
        );
      } else {
        if (this.state.entries.length > 0) {
          return (
            <div>
              {
                this.state.entries.map((entry, index) => {
                  const date = moment(entry.dateTime);
                  const meta = {
                    leftPart: date.format('H:m A')
                  };

                  return <ListItem key={index}
                    image={`/images/icon-${entry.entryType}.svg`}
                    title={entry.title} 
                    days="Today"
                    meta={meta}
                    description={entry.description}
                  />
                })
              }
            </div>
          );
        } else {
          return <div>
              <p>Hi Josh, this is where all your journal logs will appear.</p>
            </div>
        }
      }
    };

    return (
      <div className="setup">
        <div className="copy">
          <h1>Journal</h1>
          <br />
          {content()} 
        </div>
        <div className="setupFooter">
          <Nav activeItem="journal"/>
        </div>
      </div>
    );
  }
}

export default Journal;
