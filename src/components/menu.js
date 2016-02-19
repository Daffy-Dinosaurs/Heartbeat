import React, { Component } from 'react';
import { connect } from 'react-redux';

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  render() {
    return (
      <div className='menu'>
        <div className={(this.state.visible ? 'visible' : '') + this.props.alignment }>
        {this.props.children}
        </div>
      </div>
    );
  }

  show() {
    this.setState({ visible: true });
    document.addEventListener('click', this.hide.bind(this));
  }

  hide() {
    document.removeEventListener('click', this.hide.bind(this));
    this.setState({ visible: false });
  }

}

export default Menu;
