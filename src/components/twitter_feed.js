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
    if (this.props.twitterFeed.length > 1) {
      this.props.twitterFeed.shift();
    }

    //The objects are being added to end of the twitterFeed array
    return this.props.twitterFeed.map((tweetList) => {
      return tweetList.statuses.map((tweet) => {
        return (
          <div className="tweets">
            <li className="tweet-date"> { tweet.created_at } </li>
            <li className="tweet-item"> { tweet.text } </li>
          </div>
        );
      });
    });

    this.props.twitterFeed = [];
  }

  render() {
    if (!this.props.twitterFeed[0]) {
      return <div>No Information yet</div>;
    } else {
      return (
        <div className="col-md-2 tweet-feed">
           { this.renderTweets() }
        </div>
      );
    }

  }
}

function mapStateToProps({ twitterFeed }) {
  return { twitterFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets: getTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);
