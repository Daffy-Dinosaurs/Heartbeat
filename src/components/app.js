import React, { Component } from 'react';

import CountryList from '../containers/countryList';
import Globe from './globe';

//Globe

export default class App extends Component{
  render() {
    return (
      <div>
          <CountryList />
          <Globe />
      </div>
    );
  }
}
