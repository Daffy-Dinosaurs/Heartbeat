import React, { Component } from 'react';
import { Link } from 'react-router';
import ActiveCountry from '../containers/country-view';
import CountryList from '../containers/countryList';
import TwitterFeed from '../containers/twitter_feed';
import Globe from '../containers/globeContainer';
import Bar from '../containers/bar';
import VictoryPlots from '../containers/d3Graphs';
import Intro from './introduction';
import NewsOutlet from '../containers/news_outlet';
import UserTour from './tourTips';


export default class App extends Component{

  render() {
    // <Intro />

    return (
      <div className="main">
        <CountryList />
        <div className="globe">
          <Globe />
        </div>
        <Bar />
        <ActiveCountry />
        <NewsOutlet />
        <TwitterFeed />
        <VictoryPlots />
        <UserTour />
      </div>
    );
  }
}
