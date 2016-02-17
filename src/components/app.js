import React, { Component } from 'react';
import { Link } from 'react-router';

import CountryList from '../containers/countryList';
import TwitterFeed from '../containers/twitter_feed';
import Globe from '../containers/globeContainer';
import ActiveCountry from '../containers/country-view';
import Intro from './introduction';
import Menu from './menu';
import MenuItem from './menu_items';
import NewsOutlet from '../containers/news_outlet';

//Globe

export default class App extends Component{

  constructor(props) {
    super(props);

    this.state = {};

    // console.log('this is state inside of the conratuctor', state);

    this.showLeft = this.showLeft.bind(this);
    this.showRight = this.showRight.bind(this);
  }

  showLeft() {
    // console.log(this.refs.left);
    this.refs.left.show();
  }

  showRight() {
    this.refs.right.show();
  }

  render() {
    // console.log('Rendering the Main Page');
    return (
      <div className="main">
        <Link to="/d3Graphs">Graphs</Link>
        <Link to="/sandbox/jon">Jon Sandbox</Link>
        <CountryList />
        <Intro />
        <div className="col-md-8 globe">
          <Globe />
        </div>
        <NewsOutlet />
        <ActiveCountry />
        <TwitterFeed />

      </div>
    );
  }
}

// <button onClick= {this.showLeft}>Show Left Menu</button>
// <button onClick= {this.showRight}>Show Right Menu </button>
//
// <Menu ref='left' alignment='left'>
//   <MenuItem>Introduction</MenuItem>
//   <MenuItem hash='second-page'>Second Page</MenuItem>
//   <MenuItem hash='third-page'>Third Page</MenuItem>
// </Menu>
//
// <Menu ref='right' alignment='right'>
//   <MenuItem hash='first-Page'>First Page</MenuItem>
//   <MenuItem hash='second-page'>Second Page</MenuItem>
//   <MenuItem hash='third-page'>Third Page</MenuItem>
// </Menu>
