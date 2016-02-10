import React from 'react';
import { connect } from 'react-redux';

class CountryView extends Component {
  render() {

    return (
      <div className="country-view">
        <div>this.props.country</div>
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
