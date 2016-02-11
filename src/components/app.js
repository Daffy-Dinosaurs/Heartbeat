import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import Globe from '../containers/globeContainer';
import ActiveCountry from '../containers/country-view';

//Globe

export default class App extends Component{
  render() {
    return (
      <div className="main">
          <CountryList />
          <div className="col-md-8 globe">
          <Globe />
          </div>

          <ActiveCountry />
      </div>
    );
  }
}
