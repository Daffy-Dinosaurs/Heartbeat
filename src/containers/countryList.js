import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../actions/request_country';
import { bindActionCreators } from 'redux';

class CountryList extends Component {
  renderList() {
    console.log('PROPS:', this.props.countryList);
    return this.props.countryList.map((country) => {
      return (
          <li> { country } </li>

          // onClick={ ()=>this.props.requestCountries() }
      );
    });
  }

  render() {
    // if (!this.props.country) {
    //   return <div>Select Country</div>;
    // } else {
    return (
      <div>
        //<button className="btn btn-primary" >Fetch country list!</button>
          <ul> { this.renderList() } </ul>
      </div>
    );

    // }
  }
}

function mapStateToProps(state) {
  console.log('App state:', state);
  return {
    countryList: state.countryList,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCountries: requestCountries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
