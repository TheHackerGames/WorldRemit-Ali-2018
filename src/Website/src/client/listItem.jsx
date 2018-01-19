import React, {Component} from 'react';
import {Link} from 'react-router';

class ListItem extends Component {
  constructor(props, context) {
    super(props, context);
  }

  metaContent(meta) {
    let metaContent = meta.leftPart;

    if (meta.emphasised) {
      return (
        <div className="meta">
          {metaContent}<em>{meta.rightPart}</em>
        </div>
      );
    } else {
      return (
        <div className="meta">
          {metaContent}<span>{meta.rightPart}</span>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="list-profile">
        <div className="avatar"><img src={this.props.image} /></div>
        <div className="list-details">
          <span className="daysago">{this.props.days}</span>
          <h3>{this.props.title}</h3>
          {this.metaContent(this.props.meta)}
          {
            this.props.description &&
            <div className="description">{this.props.description}</div>
          }
        </div>
      </div>
    );
  }
}

export default ListItem;
