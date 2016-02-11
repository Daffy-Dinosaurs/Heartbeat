import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../actions/request_country';
import { bindActionCreators } from 'redux';
import { selectCountry } from '../actions/country_select';


class CountryList extends Component {

  constructor(props) {
    super(props);

    this.state = { term: this.props.requestCountries() };
    this.state.term;
  }

  renderList() {
    // console.log('PROPS:', this.props.countryList);

    return this.props.countryList.map((country) => {
      return (
          <li
            key={country.countryName}
            onClick={() => this.props.selectCountry(country)}>
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
      <div className="countryList">
          <ul> { this.renderList() } </ul>
      </div>
    );
  }
}

function mapStateToProps({ countryList }) {
  // console.log('App state:', state);
  return { countryList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCountries, selectCountry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
