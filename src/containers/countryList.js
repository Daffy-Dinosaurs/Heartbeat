import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../actions/request_country';
import { bindActionCreators } from 'redux';
import { selectCountry } from '../actions/country_select';
import { globeAction } from '../actions/globe_action';
import { getTweets } from '../actions/get_twitter_feed';
import { getNews } from '../actions/get_news_feed';
import { getWaterData } from '../actions/get_water_data';

class CountryList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: this.props.requestCountries(),
    };
    this.state.term;
  }


  renderList() {

    return this.props.countryList.map((country) => {
      return (
          <li className="list-country-item" id={'c' + country.localeId}
            key={country.countryName}
            onClick={(event) => {
              event.preventDefault();
              this.props.selectCountry(country);
              this.props.globeAction(country);
              this.props.getTweets(country);
              this.props.getNews(country);
              this.props.getWaterData(country.id);
            }}>
            <a href='#'>{ country.countryName }</a>
          </li>
      );
    });
  }

  render() {
    return (
      <div className="side-view-left">
        <h2><img src="/src/images/Globe.png" alt="Globe" /></h2>
          <ul className="list" > { this.renderList() } </ul>
      </div>
    );
  }
}

function mapStateToProps({ countryList }) {
  return { countryList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCountries,
    selectCountry,
    globeAction,
    getTweets,
    getNews,
    getWaterData,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
