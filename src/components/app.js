import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import Globe from './globe';
import TwitterFeed from './twitter_feed';
import ActiveCountry from '../containers/country-view';

//Globe

export default class App extends Component{
  render() {
          <Globe />
    return (
      <div className="container">
          <CountryList />
          <TwitterFeed />
          <ActiveCountry />

      </div>
    );
  }
}
