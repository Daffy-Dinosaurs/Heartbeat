import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearTweets } from '../actions/clear_tweets';
import { getTweets } from '../actions/get_twitter_feed';

class TwitterFeed extends Component {

  constructor(props) {
    super(props);

    this.state = { feed: '' };
    this.state.feed;
  }

  renderTweets() {
    if (this.props.twitterFeed.length > 1) {
      // console.log('array size is larger than 1');
      this.props.twitterFeed.shift();
    }

    //The objects are being added to end of the twitterFeed array
    // console.log('Inside the beast', this.props.twitterFeed);

    return this.props.twitterFeed.statuses.map((tweet) => {
      return (
        <div className="tweets">
            <li key={ tweet.id } className="tweet-item"> { tweet.text } </li>
        </div>
      );
    });

    this.props.twitterFeed = [];
  }

  // <li className="tweet-date"> { tweet.created_at } </li>

  clearTweet() {
    this.props.clearTweets();
  }

  render() {

    if (this.props.twitterFeed.statuses) {
      // console.log('passes second conditional', this.props.twitterFeed.statuses);
      return (
        <div className="col-md-2 tweet-feed">
        <h1 onClick= {this.clearTweet.bind(this)}>Tweets</h1>
           { this.renderTweets() }
        </div>
      );
    } else {
      return <div></div>;
    }

  }
}

function mapStateToProps({ twitterFeed }) {
  // console.log('TWEETS STATE:', { twitterFeed });
  return { twitterFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets, clearTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);
