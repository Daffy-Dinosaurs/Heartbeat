import React from 'react';
import d3 from 'd3';
import Globe from './components/d3.js'

export default React.createClass({

  componentDidMount: function() {
    // var canvas = this.getDOMNode()
    Globe.create({
      width: 960,
      height: 960
    })
  },
  //
  // getGlobeState: function () {
  //   return {
  //
  //   }
  // },
  //
  // componentDidUpdate: function () {
  //   // var context = this.getDOMNode().getContext("2d");
  //   // this.paint(context);
  // },

  render: function () {
    return(
      <div className='Globe'></div>
    )
  }
})
