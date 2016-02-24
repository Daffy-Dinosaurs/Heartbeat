import React, { Component } from 'react';
import { Link } from 'react-router';
import ActiveCountry from '../containers/country-view';
import CountryList from '../containers/countryList';
import TwitterFeed from '../containers/twitter_feed';
import Globe from '../containers/globeContainer';

import Bar from '../containers/bar';

import VictoryPlots from '../containers/d3Graphs';
import Intro from './introduction';
import Menu from './menu';
import MenuItem from './menu_items';
import NewsOutlet from '../containers/news_outlet';

// import Land from '../components/world_view.js';


//Globe

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {};

    this.showLeft = this.showLeft.bind(this);
    this.showRight = this.showRight.bind(this);
  }

  showLeft() {
    this.refs.left.show();
  }

  showRight() {
    this.refs.right.show();
  }

  render() {
    // <Intro />

    return (
      <div className="main">
        <CountryList />
        <div className="globe">
          <Globe />
        </div>
        <Bar />
        <div className="countryData">
          <VictoryPlots />
          <ActiveCountry />
          <NewsOutlet />
          <TwitterFeed />
        </div>
      </div>
    );
  }
}
