// modules/Repos.js
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import { VictoryChart } from 'victory-chart';
import { VictoryLine } from 'victory-line';
import { VictoryAxis } from 'victory-axis';
import { VictoryBar } from 'victory-bar';
import { getWaterData } from '../actions/get_water_data';

// console.log('Printing the Water Data', waterData);

var plottingData = [
  { x: '1990', y: 0 },
  { x: '1991', y: 0 },
  { x: '1992', y: 0 },
  { x: '1993', y: 0 },
  { x: '1994', y: 0 },
];

class VictoryPlots extends Component {
  constructor(props) {
    super(props);
    getWaterData();
    this.update = this.update.bind(this);
    this.state = {
      processed: plottingData,
      count: 2,
      // waterData: getWaterData(),
    };

  }

  update() {
    console.log("COUNT BEFORE:", this.state.count);
    this.setState({count: this.state.count + 1}, function() {
      console.log("COUNT AFTER:", this.state.count);

    });
    //this.setState({count : this.state.count + 1});
  }

  processingData() {
    var processWaterData = [];

    // console.log("INSIDE PROCESSING: ", this.props.waterData);

    // this.state.waterData.payload.then(function(response) {
    //   console.log(response.data);
    // })

    for (var i = 0; i < this.props.waterData.length; i++) {
      processWaterData.push({x: this.props.waterData[i].year, y: this.props.waterData[i].value });
    }
    this.setState({ processed: processWaterData});
    // console.log("PROCESSED DATA", processed);
    // this.setState({ processed: processed}, function() {
    //   console.log("SET State", this.state.processed);
    // });

  }

  getData() {
  // console.log('Printing the Water Data', waterData);
  return _.map(plottingData, (dataPoint) => {
    return {
      x: dataPoint.x,
      y: dataPoint.y,
    };
  });
}

  // data= { this.state.data } />
  // this.props.getWaterData();
  render() {
    return (
      <div>
      <Link to="/">Main</Link>

      <button onClick = { this.processingData.bind(this) } >
      Plot Graph
      </button>

      <button onClick = { () => { this.props.getWaterData();}}>
      Water Data
      </button>


      <VictoryChart >
        <VictoryBar
          data = { this.state.processed }
          dataAttributes= {[
          {fill: "cornflowerblue"}
          ]}
          />
      </VictoryChart>
      <VictoryLine
        data = { this.state.processed }
        />
    </div>
    );

  }
}; // End of Component

function mapStateToProps({ waterData }) {
  // console.log('WATER STATE:', { waterData });
  return { waterData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWaterData: getWaterData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VictoryPlots);
