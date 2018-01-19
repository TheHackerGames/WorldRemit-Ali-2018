import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.context.data || window.__INITIAL_STATE__ || {items: []};
  }

  componentDidMount() {
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
