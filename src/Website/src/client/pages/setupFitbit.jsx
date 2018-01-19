import React, {Component} from 'react';
import {Link} from 'react-router';

class SetupFitbit extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="setup">
        <div className="copy">
          <h1>Setup your fitbit</h1>
          <p>We need to pair your phone with your supplied fitbit. <span className="highlight">You can do this in your bluetooth settings</span></p>
        </div>
        <div className="graphic">
          <img src="/images/fitbit.svg" alt="Alexa" />
        </div>
        <div className="setupFooter">
          <div className="tip"><strong>Tap ‘NEXT’ when you’re done</strong></div>
          <Link to="setup3"><div className="button">Next</div></Link>
        </div>
      </div>
    );
  }
}

export default SetupFitbit;
