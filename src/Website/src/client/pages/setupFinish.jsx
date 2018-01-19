import React, {Component} from 'react';
import {Link} from 'react-router';

class SetupFinish extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    var tipStyle = {
      textAlign: 'left',
      padding: '0 1.5rem'
    }

    return (
      <div className="setup">
        <div className="copy">
          <h1>Almost there...</h1>
          <p>Lastly we need you to do a couple of things for us, please say to your Alexa: <span className="highlight">‘Alexa, let’s finish setting up’</span></p>
          <br />
          <br />
          <div className="list-item delay10">
            <h3>Place a picture or object on your bedside</h3>
            <div>It can be anything meaningful that reminds you of the present</div>
          </div>
          <div className="list-item delay20">
            <h3>Choose sounds that you find calming</h3>
            <div>This could be helpful later</div>
          </div>
          <div className="list-item delay30">
            <h3>Try asking Alexa to get help from Ali</h3>
            <div>Practice using Ali through Alexa and learn how Ali can assist</div>
          </div>
        </div>
        <div className="setupFooter">
          <Link to="volunteers"><div className="button button-inverted">Skip for now</div></Link>
        </div>
      </div>
    );
  }
}

export default SetupFinish;
