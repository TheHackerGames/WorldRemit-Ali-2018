import React, {Component} from 'react';
import {Link} from 'react-router';
import {CSSTransitionGroup} from 'react-transition-group'

class AppRoot extends Component {
  render() {
    return (
      <div id="wrapper">
        <main className="mdl-layout__content">
          <CSSTransitionGroup
            transitionName="fade"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}>
            <div>{this.props.children}</div>
          </CSSTransitionGroup>
        </main>
      </div>
    );
  }
}

export default AppRoot;
