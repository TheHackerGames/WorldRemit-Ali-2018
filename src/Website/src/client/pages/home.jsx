import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Link to="/setup1">
        <div className="splash">
          <h1 className="headline">Al&middot;i</h1>
          <div className="splashIcon"></div>
        </div>
      </Link>
    );
  }
}

export default Home;
