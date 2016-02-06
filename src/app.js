// import {d3Globe} from './components/d3.js';
import React from 'react';
import Graphic from './canvas.js'

// document.write("Hello, DOM");

var Globe = React.createClass({
  // getInitialState: function (){
  //   return;
  // },

  render: function() {
    return (
      <div>
        <Graphic />
      </div>
    )
  }
})

React.render(<Globe />, document.body);
