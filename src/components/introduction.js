import React, { Component } from 'react';

class Intro extends Component {
  //create a variable that will toogle between true or false based on user click
  //Since this is strickly a component I should be able to manipulate teh state to do this
  //I need to create a constructor function that sets the state
  //once state is set I can toogle the on click

  constructor(props) {
    super(props);

    this.state = {
      visible: false,
    };

    // console.log(this.state.visible);
    this.showIntro = this.showIntro.bind(this);
    this.hideIntro = this.hideIntro.bind(this);
  }

  showIntro() {
    this.setState({ visible: true });

  }

  hideIntro() {
    this.setState({ visible: false });
  }

  render() {

    if (this.state.visible) {
      return (
        <div>
          <h1 onClick = { this.hideIntro.bind(this) }>Intro</h1>
        <p>Its working</p>
        </div>
      );
    }

    if (!this.state.visible) {
      return (
        <div>
        <h1 onClick = { this.showIntro.bind(this) }>Intro</h1>
        </div>
      );
    }

  }

 }
export default Intro;
