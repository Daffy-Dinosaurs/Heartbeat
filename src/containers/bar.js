import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestCountries } from '../actions/request_country';

//import BarListItem from '../components/bar_list_item';

export default class Bar extends Component {
    constructor(props) {
      super(props);
      this.state = { year: 2002};
    }
    render() {
	return (
	        <div>
		<span>{this.state.year}</span>
		<input type="range" min="1990" max="2015" step="1" id="fader" onChange={ event => this.setState({ year: event.target.value })  } >
                <datalist id="steplist">
                <output id="volume">2002</output>
                </datalist>
		</input>
		</div>
        );
    }
  }
