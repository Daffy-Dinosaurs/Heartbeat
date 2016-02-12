import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import TwitterFeed from './twitter_feed';
import Globe from '../containers/globeContainer';
import ActiveCountry from '../containers/country-view';
import Intro from './introduction';

//Globe

export default class App extends Component{
  render() {
    return (
      <div className="main">
        <Intro />
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
