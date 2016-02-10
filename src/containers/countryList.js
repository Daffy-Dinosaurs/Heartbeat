import React, {Component} from 'react';
import { connect } from 'react-redux'
import { requestCountries } from '../redux/actions'
import { bindActionCreators } from 'redux'

class CountryList extends Component {
  renderList (){
    // console.log('PROPS:', this.props.country[0])
    return this.props.country[0].map((country) => {
      return (
          <li> { country } </li>
      );
    });
  }

  render(){
    return (
      <div>
      <button className="btn btn-primary" onClick={ ()=>this.props.requestCountries() }>Fetch country list!</button>
        <ul> { this.renderList() } </ul>
      </div>
    )
  }

}

function mapStateToProps(state){
  console.log('App state:', state)
  return {
    country: state.countryList
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ requestCountries: requestCountries }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
