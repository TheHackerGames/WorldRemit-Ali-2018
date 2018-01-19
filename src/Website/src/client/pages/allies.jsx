import 'es6-promise/auto';
import 'isomorphic-fetch';

import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from '../components/nav';
import ListItem from '../components/listItem';

const api = 'https://hackthonapi-webapp-wr.azurewebsites.net';

class Allies extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fetching: true,
      allies: []
    };
  }

  componentDidMount() {
    fetch(
      `${api}/heroes/1/contacts`, {
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
        allies: json
      });
    })
    .catch((error) => {
        console.error('Error making API call: ' + error.message);
    });
  }

  render() {
    var tipStyle = {
      textAlign: 'left',
      padding: '0 1.5rem'
    }

    const content = () => {
      if (this.state.fetching) {
        return (
          <div className="graphic">
            <div className="loader">Loading...</div>
          </div>
        );
      } else {
        return (
          <div>
            {
              this.state.allies.map((ally, index) => {
                const meta = {
                  leftPart: `${ally.address} · `,
                  rightPart: 'Online now',
                  emphasised: true
                };

                return <ListItem
                  key={index}
                  image={ally.profilePicture}
                  days={ally.date}
                  title={ally.name}
                  meta={meta}
                />
              })
            }
          </div>
        );
      }
    };

    return (
      <div className="setup">
        <div className="copy">
          <h1>Your Allies</h1>
          <br/>
          {content()} 
        </div>
        <div className="setupFooter">
          <Nav activeItem="allies"/>
        </div>
      </div>
    );
  }
}

export default Allies;
