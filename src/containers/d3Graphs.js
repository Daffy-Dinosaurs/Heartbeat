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
      count: 2,
      countryId: 1,
      style: this.getStyles(),
      // waterData: getWaterData(),
    };

  }

  processingData() {
    var processWaterData = []

    // // this.state.waterData.payload.then(function(response) {
    // //   console.log(response.data);
    // // })

    for (var i = 0; i < this.props.waterData.length; i++) {
      processWaterData.push({x: this.props.waterData[i].year, y: this.props.waterData[i].value });
    }

    this.setState({ processed: processWaterData}, function() {
      // console.log("processed info after: ", this.props.waterData);
      if (this.props.waterData.length > 1) {
        // console.log("Length of the waterData:", this.props.waterData.length);
        this.props.waterData.splice(0, this.props.waterData.length);
      }
    });
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

  onInputChange(pCountry) {
    this.setState({countryId: pCountry}, function() {
      // console.log("countryID: ", this.state.countryId);
    });

  }

  getStyles() {
    const colors = [
      "red", "orange", "magenta",
      "gold", "blue", "purple"
    ];
    return {
      stroke: colors[_.random(0, 5)],
      strokeWidth: _.random(1, 5)
    };
  }


  render() {
    return (
      <div className="col-md-2">

        <div>
          <input value = { this.state.countryId }
          onChange = { event => this.onInputChange(event.target.value)} />
        </div>

      <Link to="/">Main</Link>

      <button onClick = { this.processingData.bind(this) } >
      Plot Graph
      </button>

      <button onClick = { () => { this.props.getWaterData(this.state.countryId);}}>
      Water Data
      </button>

      <VictoryChart>
        <VictoryBar
          data = { this.state.processed }
          dataAttributes= {[
            {fill: "cornflowerblue"}
          ]}
        />
      </VictoryChart>
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
