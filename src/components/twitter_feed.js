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

  renderTweets() {
    if (this.props.twitterFeed.length <= 0) {
      return
    } else {
        // console.log(tweet.text);
      console.log("INSIDE renderTWeets", this.props.twitterFeed);
    return this.props.twitterFeed.map((tweetList) => {
      return tweetList.statuses.map((tweet) => {
        return (
          <div>
          <li> { tweet.created_at } </li>
          <li> { tweet.text } </li>
          </div>
        );
      });
    });
      
    }
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
        <div>
          <ul> { this.renderTweets() } </ul>
        </div>
      </div>
    );
  }

}

function mapStateToProps({ twitterFeed }) {
  console.log("TWEETS STATE:", { twitterFeed });
  return { twitterFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets: getTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);
