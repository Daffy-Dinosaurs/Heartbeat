import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import Globe from './globe';
import TwitterFeed from './twitter_feed';
//Globe

export default class App extends Component{
  render(){
    return (
      <div>
          <CountryList />
          <TwitterFeed />
      </div>
    )
  }
}
