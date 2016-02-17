import React, { Component } from 'react';
import { Link } from 'react-router';

import CountryList from '../containers/countryList';
import TwitterFeed from './twitter_feed';
import Globe from '../containers/globeContainer';
import ActiveCountry from '../containers/country-view';
import { requestCountries } from './actions/request_country'

//use componentDidMount to make the request for countryList
//call getInitialState to initialize data for app

//bring in all data once

class App extends Component{
  //getInitialState
  constructor(props) {
    requestCountries();
    // this.countries
    //note: never call a function to populate the props
  }

  render() {
    console.log('Rendering the Main Page');
    return (
      <div className="main">
        <Link to="/d3Graphs">Graphs</Link>
        <Link to="/sandbox/jon">Jon Sandbox</Link>
        <CountryList />
        <div className="col-md-8 globe">
          <Globe />
        </div>
        <ActiveCountry />
        <TwitterFeed />

      </div>
    );
  }
}

export default App
