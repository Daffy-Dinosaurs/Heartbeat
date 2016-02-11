import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../actions/request_country';
import { bindActionCreators } from 'redux';


class CountryList extends Component {
  constructor(props) {
    super(props);

    this.state = { term: this.props.requestCountries() };
    this.state.term;
  }

  renderList() {
    return this.props.countryList.map((country) => {
      return (
          <li><a href='#'>{ country.countryName }</a></li>
      );
    });
  }

  render() {
    // if (!this.props.country) {
    //   return <div>Select Country</div>;
    // } else {
    return (
  //     <button class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
  //   Dropdown
  //   <span class="caret"></span>
  // </button>
      <div className="dropdown countryList">
          <ul> { this.renderList() } </ul>
      </div>
    );
  }
}

function mapStateToProps({ countryList }) {
  return { countryList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCountries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
