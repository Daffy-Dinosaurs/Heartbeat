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
import CountryList from '../containers/countryList';

// console.log('Printing the Water Data', waterData);

var plottingData = [
  { x: '1990', y: 0 },
  { x: '1992', y: 0 },
  { x: '1994', y: 0 },
  { x: '1996', y: 0 },
  { x: '1998', y: 0 },
];

class VictoryPlots extends Component {
  constructor(props) {
    super(props);
    this.state = {
      processed: plottingData,

    };

    this.processingData = this.processingData.bind(this);

    // console.log('this is testing props', this.props.waterData);

  }

  processingData() {
    var processWaterData = [];

    // console.log('this is the length of waterData', this.props.waterData.length);
    // console.log('this is the content of waterData', this.props.waterData[1].category, this.props.waterData[51]);
    // console.log('this is the content of processWaterData', processWaterData);

    for (var i = 0; i < this.props.waterData.length; i++) {
      if (this.props.waterData[i].category === 'Water Pollution') {
        processWaterData.push({ x: this.props.waterData[i].year, y: this.props.waterData[i].value });
      }
    }

    // console.log('new length of processWaterData', processWaterData);
    this.setState({ processed: processWaterData }, function () {
      // console.log("processed info after: ", this.props.waterData);
      if (this.props.waterData.length > 1) {
        // console.log("Length of the waterData:", this.props.waterData.length);
        this.props.waterData.splice(0, this.props.waterData.length);
      }
    });
  }



  // <h4 onClick = { this.onInputChange(this.props.waterData.localeId)}>some</h4>
  render() {
    console.log('this is  the result of array is array', Array.isArray(this.props.waterData));
    if (Array.isArray(this.props.waterData)) {
      return (
        <div className="col-md-2">

        <div>
        <h3 onClick= {this.processingData.bind(this)}>Process</h3>
        </div>

        <VictoryChart>
        <VictoryBar

        data = { this.state.processed }
        dataAttributes= {[
          { fill: 'cornflowerblue' },
        ]}
        />
        </VictoryChart>
        </div>
      );

    } else {
      return <div></div>;
    }

  }
}; // End of Component

// <button onClick = { this.processingData.bind(this) } >
// Plot Graph
// </button>
function mapStateToProps({ waterData }) {
  return { waterData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWaterData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VictoryPlots);
