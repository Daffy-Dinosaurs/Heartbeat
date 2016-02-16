// modules/Repos.js
import React, { Component } from 'react';
import { Link } from 'react-router';
import { VictoryChart } from 'victory-chart';
import { VictoryLine } from 'victory-line';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';

var plottingData = [
  { x: '1990', y: 92 },
  { x: '1991', y: 80 },
  { x: '1992', y: 85 },
  { x: '1993', y: 91 },
  { x: '1994', y: 75 },
];

export default class VictoryPlots extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: this.getData(),
    };
  }

  getData() {
    return _.map(plottingData, (dataPoint) => {
      return {
        x: dataPoint.x,
        y: dataPoint.y,
      };
    });
  }

  render() {
    return (
      <div>
      <Link to="/">Main</Link>
      <VictoryChart scale={{ x: 'time' }}>
        <VictoryLine
          data = { this.state.data } />
        <VictoryBar
          data= { this.state.data } />
      </VictoryChart>                                                                                                                                                                                     </div>
    );
  }
};
