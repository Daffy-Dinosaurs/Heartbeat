import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestCountries } from '../actions/request_country';
import { getAllData } from '../actions/get_all_data';
import worldGlobe from '../components/world_view.js';

//import BarListItem from '../components/bar_list_item';

class Bar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        year: 2002,
      };
      this.props.getAllData();
      this.getAnnualData = this.getAnnualData.bind(this);
      this.extraFunction = this.extraFunction.bind(this);
      this.povertyButton = this.povertyButton.bind(this);
      this.waterPollutionButton = this.waterPollutionButton.bind(this);
      this.foodScarcityButton = this.foodScarcityButton.bind(this);
    }

    // componentWillRecieveProps() {
    //
    // }

    extraFunction(event) {
      console.log('this is the new state', this.state.year);
      this.setState({ year: event.target.value }, this.getAnnualData.bind(this));

    }

    getAnnualData() {
      let storage = [];

      // console.log('get Annual called', this.props.allData[0]);
      for (var i = 0; i < this.props.allData.length; i++) {
        if (this.props.allData[i].year == this.state.year) {
          // console.log('inside the second for loop');
          // console.log(this.props.allData[i].year);

          storage.push(this.props.allData[i]);


          // console.log('this is storage', storage);
        }
      }
      worldGlobe.renderGlobeStats(storage);
    }

    povertyButton() {
      let stats = [];
      console.log('inside poverty function');
      for (var i = 0; i < this.props.allData.length; i++) {

        if (this.props.allData[i].year == this.state.year) {
          if (this.props.allData[i].category === 'Poverty') {
            // console.log('in poverty', this.props.allData[i]);

            stats.push(this.props.allData[i]);
          }
        }
      }

      console.log('stats for', this.state.year, stats);

    }

    foodScarcityButton() {
      let stats = [];

      for (var i = 0; i < this.props.allData.length; i++) {
        if (this.props.allData[i].year == this.state.year) {
          if (this.props.allData[i].category === 'Food Scarcity') {
            stats.push(this.props.allData[i]);
          }
        }
      }

      console.log('food scarcity', stats);

    }

    waterPollutionButton() {
      let stats = [];

      for (var i = 0; i < this.props.allData.length; i++) {
        if (this.props.allData[i].year == this.state.year) {
          if (this.props.allData[i].category === 'Water Pollution') {
            stats.push(this.props.allData[i]);
          }
        }
      }

      console.log('pollution stats', stats);

    }

    // { this.getAnnualData.bind(this) }
    render() {
      return (
        <div>
          <div className="barSlider">
            <input type="range" min="1990"
              max="2015"
              step="1"
              id="fader"

              //  onChange={ event => this.setState({ year: event.target.value }) }
              onChange={
                 this.extraFunction
              }
              >

              <datalist id="steplist">
              <output id="volume">2002</output>
              </datalist>
            </input>
            <span>{this.state.year}</span>
          </div>
          <div className="issues">
            <ul>
              <li className='category' onClick={this.povertyButton}>Poverty</li>
              <li className='category' onClick={this.waterPollutionButton}>Water Pollution</li>
              <li className='category' onClick={this.foodScarcityButton}>Food Scarcity</li>
            </ul>
          </div>
        </div>
      );
    }
  }

function mapStateToProps({ allData }) {
    return { allData };
  }

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getAllData }, dispatch);
  }

export default connect(mapStateToProps, mapDispatchToProps)(Bar);
