import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import Globe from './globe';
<<<<<<< HEAD
import TwitterFeed from './twitter_feed';
=======
import ActiveCountry from '../containers/country-view';

>>>>>>> 5df97d6d4d69fd1cc2c960daadf6e893d2417795
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
