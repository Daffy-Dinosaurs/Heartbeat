// import {d3Globe} from './components/d3.js';
import React from 'react';

// document.write("Hello, DOM");

var Globe = React.createClass({
  // componentDidMount: function () {
  //   React.getDOMNode(this).appendChild();
  // },
  render: function() {
    return <h1>"React is rendering!"</h1>;
  }
})

React.render(<Globe />, document.body);

