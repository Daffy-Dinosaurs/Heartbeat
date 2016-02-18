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

let processWaterData;

class VictoryPlots extends Component {
  constructor(props) {
    super(props);
    getWaterData();
    this.update = this.update.bind(this);
    this.state = {
      processed: plottingData,
      count: 2,
      countryId: 1,
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
    processWaterData = [];

    console.log("CALLING WATER PROPS BEFORE:", this.props.waterData);

    // console.log("INSIDE PROCESSING: ", this.props.waterData);

    // this.state.waterData.payload.then(function(response) {
    //   console.log(response.data);
    // })
    console.log("WITHOUT SETTING STATE: ", this.state.processed);
    // this.setState({ processed: processWaterData}, function() {
    //   console.log("processed info before: ", this.state.processed);
    //   return processWaterData;
    // });

    console.log("PROCESSED DATA BEFORE:", processWaterData);

    for (var i = 0; i < this.props.waterData.length; i++) {
      processWaterData.push({x: this.props.waterData[i].year, y: this.props.waterData[i].value });
    }

    this.setState({ processed: processWaterData}, function() {
      console.log("processed info after: ", this.state.processed);
    });


    console.log("PROCESSED DATA AFTER", processWaterData);
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

  onInputChange(pCountry) {
    this.setState({ processed: plottingData });
    this.setState({countryId: pCountry}, function() {
      console.log("countryID: ", this.state.countryId);
    });

  }

  render() {
    return (
      <div>

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


      <VictoryChart >
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
