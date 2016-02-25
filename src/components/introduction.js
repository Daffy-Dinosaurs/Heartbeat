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
        <div className=".overlay">
          <h1 onClick = { this.hideIntro.bind(this) }>Intro</h1>

          <h2>Welcome</h2>
          <p>We are please to share with you HeartBeat.</p>
          <p>An application that aims to bring awareness to the awareness of important issues of our day. In this application we have highlighted three core issues that we focus our tool on.</p>
          <p>These issues are <strong>Poverty, Water Pollution, and Food Scarcity</strong>. </p>
          <p>We hope that by showing you the interelationship of these issues that you might find that in reality they are not isolated topics</p>
        </div>
      );
    }

    if (!this.state.visible) {
      return (
        <div className=".overlay">
        <h1 onClick = { this.showIntro.bind(this) }>Intro</h1>
        </div>
      );
    }
  }
 }
export default Intro;
