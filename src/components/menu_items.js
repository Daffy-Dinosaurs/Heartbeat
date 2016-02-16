import React, { Component } from 'react';

export default class MenuItem extends Component {

  navigate(hash) {
    window.location.hash = hash;
  }

  render() {
    return <div className='menu-item' onClick={this.navigate.bind(this, this.props.hash)}>{this.props.children}</div>;
  }
}
