import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getTweets } from '../actions/get_twitter_feed';

class TwitterFeed extends Component {
  
  constructor(props) {
    super(props);

    this.state = { feed: '' };
    // TODO: setState using setState()
    this.state.feed;
  }

  render() {
    console.log("TWEETS PROPS", this.props);
      // <button onClick = {() => this.props.selectBook(book)}
    return (
      <div>
        <button 
        onClick = { () => this.props.getTweets() }>
        Pull Tweets
        </button>
      </div>
    );
  }

}

function mapStateToProps(state) {
  return {
    tweets: state.tweets
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets: getTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);
