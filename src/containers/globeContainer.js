import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import d3 from 'd3';
import d3Globe from '../components/d3';

class Globe extends Component {
  componentDidMount() {
    d3Globe.go();

    // PASS THIS TO D3 GLOBE
    // this.props.activeCountry.localeId

  }

  renderGlobe() {
    // console.log('Globe Props: ', this.props.globeCountry);
    d3Globe.go(this.props.globeCountry.localeId);
  }

  render() {
    if (!this.props.globeCountry) {
      return <div> Country not selected. </div>;
    } else {
      return (
        <h1 className="globeTitle" > { this.renderGlobe() } </h1>
      );
    }
  }
}

function mapStateToProps({ globeCountry }) {
  return { globeCountry };
}

export default connect(mapStateToProps)(Globe);
