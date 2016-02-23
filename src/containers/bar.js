import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestCountries } from '../actions/request_country';
import { getAllData } from '../actions/get_all_data';

//import BarListItem from '../components/bar_list_item';

class Bar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        year: 2002
      };
      this.props.getAllData();
      this.getAnnualData = this.getAnnualData.bind(this);
      this.extraFunction = this.extraFunction.bind(this);
    }

    extraFunction(event){
      this.setState({ year: event.target.value }, this.getAnnualData);
    }

    getAnnualData(){
      console.log('INSIDE GET ANNUAL DATA');
      var storage = [];
      for (var i = 0; i < this.props.allData.length; i++){
        //console.log(this.state.year, this.props.allData[i].year);
        if (this.props.allData[i].year == this.state.year){
          //console.log(this.props.allData[i].year);
          storage.push(this.props.allData[i]);
        }
      }
      console.log(storage);
    }


    render() {
    	return (
    	        <div>
    		        <span>{this.state.year}</span>
                { this.getAnnualData.bind(this) }
    		        <input type="range" min="1990"
                   max="2015"
                   step="1"
                   id="fader"
                  //  onChange={ event => this.setState({ year: event.target.value }) }
                   onChange={ this.extraFunction }
                >

                <datalist id="steplist">
                <output id="volume">2002</output>
                </datalist>
    		        </input>
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
