import React, {Component} from 'react';
import {connect} from 'react-redux';

class ActiveCountry extends Component {
  render() {
    // console.log('inside country-view');
    if (!this.props) {
      return <div>Select a country</div>;
    }

    return (
      <div className="country-view">
        <li>this.props.countryName</li>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    country: state.activeCountry,
  };
}

export default connect(mapStateToProps)(ActiveCountry);
