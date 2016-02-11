import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import Globe from './globe';
import ActiveCountry from '../containers/country-view';

//Globe

export default class App extends Component{
  render() {
    return (
      <div className="container">
          <CountryList />

          <Globe />

          <ActiveCountry />
      </div>
    );
  }
}
