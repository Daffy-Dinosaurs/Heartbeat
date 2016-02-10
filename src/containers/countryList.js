import React, {Component} from 'react';
import { connect } from 'react-redux';
import { requestCountries } from '../actions/request_country';
import { bindActionCreators } from 'redux';

class CountryList extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { term: this.props.requestCountries() };
  //   this.state.term;
  // }

  renderList() {
    console.log('PROPS:', this.props.countryList);

    // this.props.requestCountries();

    return this.props.countryList.map((country) => {
      return (
          <li><a href='#'>{ country.countryName }</a></li>

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
        <button className="btn btn-primary" onClick={ ()=>this.props.requestCountries() }>Fetch country list!</button>
          <ul> { this.renderList() } </ul>
      </div>
    );

    // }
  }
}

function mapStateToProps({ countryList }) {
  // console.log('App state:', state);
  return { countryList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCountries }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
