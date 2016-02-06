// import {d3Globe} from './components/d3.js';
import React from 'react';
import d3 from 'd3';
import approach1 from './components/approach1.js';

// document.write("Hello, DOM");

// var Globe = React.createClass({
//   // componentDidMount: function () {
//   //   React.getDOMNode(this).appendChild();
//   // },
//   render: function() {
//     return <h1>"React is rendering!"</h1>;
//   }
// })

// React.render(<Globe />, document.body);

// var Globe = React.createClass({
//   render: function () {
//     return (
//       <div className="Globe">
//       </div>
//     );
//   }
// });
// React.render(<Globe />, document.body);

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
React.render(<Canvas />, document.body);