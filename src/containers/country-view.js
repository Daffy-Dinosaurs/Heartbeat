import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearCountry } from '../actions/clear_country';

class ActiveCountry extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.activeCountry;

    // console.log('this is state inside of constructor', this.state);
  }

  renderScreen() {
    // console.log('these are the props: ', this.props.activeCountry, this.props.activeCountry.localeId);
    // console.log('STATE: ', this.props);
    return <div>We dont have anything here</div>;
  }

  changeProps() {

    this.props.clearCountry();

  }

  render() {
    // console.log('inside country-view');
    if (!this.props.activeCountry.countryName) {
      console.log('DO NOTHING');
      return <div></div>;
    } else {
      // console.log('this is the failed test result');
      return (
        <div className="col-md-2">
        <h1 onClick= {this.changeProps.bind(this)}>{ this.props.activeCountry.countryName }</h1>
        <li className="country-view">
        { this.renderScreen() }
        </li>

        </div>
      );

    }

  }
}

function mapStateToProps({ activeCountry }) {
  return { activeCountry };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearCountry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCountry);
