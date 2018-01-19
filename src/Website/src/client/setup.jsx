import React, {Component} from 'react';

class Setup extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = this.context.data || window.__INITIAL_STATE__ || {items: []};
  }

  componentDidMount() {
  }

  render() {
    return (
      <div className="setup">
    <h1> blah</h1>
      </div>
    );
  }
}

Setup.contextTypes = {
  data: React.PropTypes.object
};

export default Setup;
