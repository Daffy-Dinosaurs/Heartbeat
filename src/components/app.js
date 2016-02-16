import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import TwitterFeed from './twitter_feed';
import Globe from '../containers/globeContainer';
import ActiveCountry from '../containers/country-view';
import Intro from './introduction';
import Menu from './menu';
import MenuItem from './menu_items';

//Globe

export default class App extends Component{
  showLeft() {
    this.refs.left.show();
  }

  showRight() {
    this.refs.right.show();
  }

  render() {
    return (
      <div className="main">
        <button onClick= {this.showleft}>Show Left Menu</button>
        <button onClick= {this.showRight}>Show Right Menu </button>

        <Menu ref='left' alignment='left'>
          <MenuItem hash='first-Page'>First Page</MenuItem>
          <MenuItem hash='second-page'>Second Page</MenuItem>
          <MenuItem hash='third-page'>Third Page</MenuItem>
        </Menu>

        <Menu ref='right' alignment='right'>
          <MenuItem hash='first-Page'>Firt Page</MenuItem>
          <MenuItem hash='second-page'>Second Page</MenuItem>
          <MenuItem hash='third-page'>Third Page</MenuItem>
        </Menu>


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
