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
      console.log('array size is larger than 1');
      this.props.twitterFeed.shift();
    }

    //The objects are being added to end of the twitterFeed array
    console.log('Inside the beast', this.props.twitterFeed);
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

    this.props.twitterFeed = [];
  }

  render() {
    if (!this.props.twitterFeed[0]) {
      return <div>No Information yet</div>;
    } else {
      return (
        <div>
           { this.renderTweets() }
        </div>
      );
    }

  }
}

function mapStateToProps({ twitterFeed }) {
  console.log('TWEETS STATE:', { twitterFeed });
  return { twitterFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets: getTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);
