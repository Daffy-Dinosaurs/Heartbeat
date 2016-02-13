import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

class NewsOutlet extends Component {
  //TODO: continue to build out this feature with the potential to use this as a model

  render() {
    return <div>News Outlet</div>;
  }

}

function mapStateToProps({ newsFeed }) {
  return { newsFeed };
}

export default connect(mapStateToProps)(NewsOutlet);
