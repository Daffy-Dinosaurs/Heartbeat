import React, { Component } from 'react';

export default class MenuItem extends Component {

  saySome() {
    console.log('I want my page to render');
  }

  render() {
    return <div className='menu-item' onClick={this.saySome}>{this.props.children}</div>;
  }
}
