import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearCountry } from '../actions/clear_country'

class ActiveCountry extends Component {

  constructor(props) {
    super(props);
    this.state = this.props.activeCountry;

    console.log('this is state inside of constructor', this.state);
  }

  renderScreen() {
    // console.log('these are the props: ', this.props.activeCountry, this.props.activeCountry.localeId);
    console.log('STATE: ', this.props);
    return this.props.activeCountry.countryName;
  }

  changeProps() {
    // this.setState({ activeCountry: undefined });
    this.props.clearCountry();
    console.log('POST setState()', this.props.activeCountry);

    // console.log('calling close function', this.props.activeCountry);
    return this.props.activeCountry;

  }

  render() {
    // console.log('inside country-view');
    if (!this.props.activeCountry) {
      return <div>Select a country</div>;
    } else {
      return (
        <div className="col-md-2">
        <h1 className="country-view">
        { this.renderScreen() }
        </h1>
        <p onClick= {this.changeProps.bind(this)}>close</p>

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
