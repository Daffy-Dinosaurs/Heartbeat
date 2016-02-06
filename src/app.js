// import {d3Globe} from './components/d3.js';
import React from 'react';
import d3 from 'd3';
import approach1 from './components/approach1.js';
import approach2 from './components/approach2.js';

// document.write("Hello, DOM");

// var Globe = React.createClass({
//   // componentDidMount: function () {
//   //   React.getDOMNode(this).appendChild();
//   // },
//   render: function() {
//     return <h1>"React is rendering!"</h1>;
//   }
// })

var Canvas = React.createClass({
  componentDidMount: function() {
    approach1.graph();
  },
  render: function () {
    return (
      <div className="approach1">
      </div>
    );
  }
});

var Canvas2 = React.createClass({
  componentDidMount: function() {
    approach2.setup();
  },
  render: function () {
    return (
      <div className="approach2">
      </div>
    );
  }
});

// React.render(<Canvas />, document.body);
React.render(<Canvas2 />, document.body);