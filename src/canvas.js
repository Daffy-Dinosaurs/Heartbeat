import React from 'react';
import d3 from 'd3';
import Globe from './components/d3.js';
import ReactFauxDOM from 'react-faux-dom';

const Canvas = props => {
  const element = ReactFauxDOM.createElement('div');

  Globe.create({
    ...props,
  });

  return element.toReact();
};

export default Canvas;

//
// export default React.createClass({
//   render: function () {
//     var element = ReactFauxDOM.createElement('body')
//     console.log("inside of canvas",this.props);
//     Globe.create(element, {
//       world: this.props.world,
//       country: this.props.country,
//       height: this.props.height,
//       width: this.props.width
//     })
//     console.log(element)
//     return element.toReact();
//   }
// })
