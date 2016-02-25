import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearCountry } from '../actions/clear_country';

class ActiveCountry extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  renderScreen() {

    return <div>We dont have anything here</div>;
  }

  changeProps() {
    this.props.clearCountry();
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    if (this.state.visible) {
      if (this.props.activeCountry.countryName) {
        return (
          <div className="countryTitle">
          <h1 onClick= {
            this.changeProps.bind(this),
            this.hide.bind(this)
          }> {this.props.activeCountry.countryName}</h1>
          <li className="country-view">
          { this.renderScreen() }
          </li>
          </div>
        );
      }
    }

    if (!this.state.visible) {
      console.log('DO NOTHING');
      return <div className="countryTitle">
      <h1 onClick={this.show.bind(this)}>{this.props.activeCountry.countryName}</h1>
      </div>;
    }
  }
}

function mapStateToProps({ activeCountry }) {
  return { activeCountry };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ clearCountry }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ActiveCountry);
