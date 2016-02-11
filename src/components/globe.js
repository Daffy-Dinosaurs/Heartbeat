import React, { Component } from 'react';
import d3Globe from './d3';
import d3 from 'd3';

export default class Globe extends Component {
  componentDidMount () {
    d3Globe.go();
  }
  render(){
    return (<div>
            <h1 className="globeTitle" ></h1>
            </div>
           )
  }
}
