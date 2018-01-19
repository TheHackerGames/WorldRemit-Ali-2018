import React, {Component} from 'react';
import {Link} from 'react-router';

import NavItem from './navItem';

class Nav extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const activeItem = this.props.activeItem;

    return (
      <div className="nav">
        <ul>
          <NavItem active={activeItem} linkTo="allies">Allies</NavItem>
          <NavItem active={activeItem} linkTo="journal">Journal</NavItem>
          <NavItem active={activeItem}>Settings</NavItem>
        </ul>
      </div>
    );
  }
}

export default Nav;
