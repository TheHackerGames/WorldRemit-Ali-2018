import 'es6-promise/auto';
import 'isomorphic-fetch';

import React, {Component} from 'react';
import {Link} from 'react-router';
import Nav from './nav';
import ListItem from './listItem';

const api = 'https://hackthonapi-webapp-wr.azurewebsites.net';

class Volunteers extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      fetching: true,
      volunteers: []
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch(
        `${api}/volunteers`, {
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
          volunteers: json
        });
      })
      .catch((error) => {
          console.error('Error making API call: ' + error.message);
      });
    }, 1000);
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
        if (this.state.volunteers.length > 0) {
          return (
          <div>
            {
              this.state.volunteers.map((volunteer, index) => {
                const meta = {
                  leftPart: `${volunteer.address} · `,
                  rightPart: volunteer.rating,
                  emphasised: volunteer.rating === 'Highly recommended'
                };


                return (
                  <Link key={index} to="allies">
                    <ListItem
                      image={volunteer.profilePicture}
                      days={volunteer.date}
                      title={volunteer.name}
                      meta={meta}
                      description={volunteer.description}
                    />
                  </Link>
                );
              })
            }
          </div>
        );
        } else {
          return <div>
              <p>No entries</p>
            </div>
        }
      }
    };

    return (
      <div className="setup">
        <div className="copy">
          <h1>Build your network</h1>
          <p>We’re looking for volunteers who are experienced talking about issues you’re facing and are happy to talk whenever you are</p>
          <br />
          {content()}
        </div>
      </div>
    );
  }
}

export default Volunteers;
