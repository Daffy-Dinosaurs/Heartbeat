import React, {Component} from 'react';
import CountryList from '../containers/countryList';
import ActiveCountry from '../containers/country-view';

export default class App extends Componenet {
  render() {
    return (
      <div>
        <CountryList />
      </div>
      <div>
        <ActiveCountry />
      </div>
    );
  }
}
