// modules/Repos.js
import React, { Component } from 'react';
import { Link } from 'react-router';
import { VictoryChart } from 'victory-chart';
import { VictoryLine } from 'victory-line';
import { VictoryAxis } from 'victory-axis';

export default class VictoryPlots extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
      <Link to="/">Main</Link>
      <VictoryChart scale={{ x: 'time' }}>
      <VictoryLine
        data = {[
        { x: new Date(1990, 1, 1), y: 91.3 },
        { x: new Date(1992, 1, 1), y: 82 },
        { x: new Date(1994, 1, 1), y: 65 },
        { x: new Date(1996, 1, 1), y: 70 },
        { x: new Date(1998, 1, 1), y: 72 },
        { x: new Date(2000, 1, 1), y: 75 },
        { x: new Date(2002, 1, 1), y: 80 },
        { x: new Date(2004, 1, 1), y: 85.6 },
        ]}/>
      </VictoryChart>                                                                                                                                                                                     </div>
    );
  }
};
