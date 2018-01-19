import React, {Component} from 'react';
import {Link} from 'react-router';

class SetupAlexa extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="setup">
        <div className="copy">
          <h1>Setup your Alexa</h1>
          <p>Follow the instructions that come with your alexa. Make sure you place the Alexa device close to where it can hear you at night time.</p>
        </div>
        <div className="graphic">
          <img src="/images/echo.svg" alt="Alexa" />
        </div>
        <div className="setupFooter">
          <div className="tip"><strong>Tap ‘NEXT’ when Alexa tells you to</strong></div>
          <Link to="setup2"><div className="button">Next</div></Link>
        </div>
      </div>
    );
  }
}

export default SetupAlexa;
