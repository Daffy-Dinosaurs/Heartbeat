import React, { Component } from 'react';

export default class Intro extends Component {
  showIntro() {
    console.log('intro has been clicked');
    return (
      <div>
        <p>Let me tell you just how awesome it really is</p>;
      </div>
    );

  }

 render() {
   return (
     <div>
      <h1 onClick = { this.showIntro.bind(this) }>Intro</h1>

     </div>
   );
 }
}
