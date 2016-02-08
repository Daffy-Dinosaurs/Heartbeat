import React from 'react'
import ReactDOM from 'react-dom'
import World from './components/world-110m.json'
import Canvas from './canvas.js'
import Country from 'raw!./components/world-country-names.tsv'

console.log("the world", World)
console.log("the country", Country)

const Globe = props => (
  <div>
    <Canvas {...props} />
  </div>
);

ReactDOM.render( <Globe world={World} countries={Country} height="960" width="960"/>, document.body);


// var Globe = React.createClass({
//   displayName: "Globe",
//
//   render: function() {
//     return (
//       <div>
//         <Canvas world={this.props.world} country={this.props.country} width={this.props.width} height={this.props.height} />
//       </div>
//     )
//   }
// })
//
// React.render(<Globe world={World} country={Country} width="960" height="960" />, document.body);
