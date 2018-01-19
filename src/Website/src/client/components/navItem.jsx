import React, {Component} from 'react';
import {Link} from 'react-router';

class NavItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const className = this.props.active === this.props.linkTo ? 'active' : '';
    
    return (
        <li className={className}>
          <Link to={this.props.linkTo}>
            {this.props.children}
          </Link>
        </li>
    );
  }
}

export default NavItem;
