import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import ListGroup from 'react-bootstrap';
import ListGroupItem from 'react-bootstrap';

class ActiveCountry extends Component {

  renderScreen() {
    console.log('these are the props: ', this.props.activeCountry, this.props.activeCountry.localeId);
    return (

        <li>{ this.props.activeCountry.countryName }</li>

    );
  }

  //TODO:
  //The counrty list can not populate due to an errorin the above code
  //since activeCountry is not selected upon intialization, th computer hits and error and does not run
  //The below conditional allows for the list to show but does not update once the contry is selected

  render() {
    // console.log('inside country-view');
    if (!this.props.activeCountry) {
      return <div>Select a country</div>;
    } else {
      return (
        <ul className="country-view">
        {this.renderScreen()}
        </ul>
      );

    }

  }
}

function mapStateToProps({ activeCountry }) {
  return { activeCountry };
}

export default connect(mapStateToProps)(ActiveCountry);
