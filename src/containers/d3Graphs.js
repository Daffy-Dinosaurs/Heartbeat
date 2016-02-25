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
      waterProcessed: plottingData,
      povertyProcessed: plottingData,
      foodProcessed: plottingData,
      visible: false,

    };

    this.processingData = this.processingData.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  processingData() {
    var processWaterData = [];
    var processPovertyData = [];
    var processFoodData = [];

    for (var i = 0; i < this.props.waterData.length; i++) {
      if (this.props.waterData[i].category === 'Water Pollution') {
        processWaterData.push({
          x: this.props.waterData[i].year,
          y: this.props.waterData[i].value,
        });
      }
    }

    for (var i = 0; i < this.props.waterData.length; i++) {
      if (this.props.waterData[i].category === 'Poverty') {
        processPovertyData.push({
          x: this.props.waterData[i].year,
          y: this.props.waterData[i].value,
        });
      }
    }

    for (var i = 0; i < this.props.waterData.length; i++) {
      if (this.props.waterData[i].category === 'Food Scarcity') {
        processFoodData.push({
          x: this.props.waterData[i].year,
          y: this.props.waterData[i].value,
        });
      }
    }

    this.setState({ waterProcessed: processWaterData });
    this.setState({ povertyProcessed: processPovertyData });
    this.setState({ foodProcessed: processFoodData });

  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    if (this.state.visible) {
      if (Array.isArray(this.props.waterData)) {
        return (
          <div className="graphs-visible">
          <div>
          <h1 onClick= {
            this.processingData.bind(this)
          }><img src="/src/images/chart.png" alt="chart" /></h1>
          </div>
          <h5 onClick={this.hide.bind(this)}>close</h5>
          <h6>Water Pollution</h6>
          <VictoryChart>
            <VictoryBar
            data = { this.state.waterProcessed }
            dataAttributes= {[
              { fill: 'green' },
            ]} />
          </VictoryChart>
          <h6>Poverty</h6>
          <VictoryChart>
          <VictoryBar
          data = { this.state.povertyProcessed }
          dataAttributes= {[
            { fill: 'orange' },
          ]}
          />
          </VictoryChart>
          <h6>Food Scarcity</h6>
          <VictoryChart>
          <VictoryBar
          data = { this.state.foodProcessed }
          dataAttributes= {[
            { fill: 'red' },
          ]}
          />
          </VictoryChart>
          </div>
        );
      }
    }

    if (!this.state.visible || (!this.state.waterData)) {
      return <div className="graphs">
      <h1 onClick={this.show.bind(this)}><img src="/src/images/chart.png" alt="chart" /></h1>
      </div>;
    }
  }
}; // End of Component

function mapStateToProps({ waterData }) {
  return { waterData };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getWaterData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VictoryPlots);
