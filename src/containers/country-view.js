import React from 'react';
import { connect } from 'react-redux';

class CountryView extends Component {
  render() {

    if (!this.props.country) {
      return <div>Select a country</div>;
    }

    return (
      <div className="country-view">
        <div>this.props.country.countryName</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    country: state.activeCountry,
  };
}

export default connect(mapStateToProps)(CountryView);
