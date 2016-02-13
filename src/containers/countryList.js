import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../actions/request_country';
import { bindActionCreators } from 'redux';
import { selectCountry } from '../actions/country_select';
import { globeAction } from '../actions/globe_action';
import { getTweets } from '../actions/get_twitter_feed';

class CountryList extends Component {


  renderList() {
    // console.log('PROPS:', this.props.countryList);

    return this.props.countryList.map((country) => {
      return (
          <li className="list-country-item"
            key={country.countryName}
            onClick={() => {
              this.props.selectCountry(country);
              this.props.globeAction(country);
              this.props.getTweets(country);
            }}>
            <a href='#'>{ country.countryName }</a>
          </li>
      );
    });
  }

  render() {

    // if (!this.props.country) {
    //   return <div>Select Country</div>;
    // } else {
    // <button className="btn btn-primary" onClick={ ()=>this.props.requestCountries() }>Fetch country list!</button>
    return (
      <div className="col-md-2">
        <div className="countryList">
          <ul className="list" > { this.renderList() } </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ countryList }) {
  return { countryList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCountries, selectCountry, globeAction, getTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
