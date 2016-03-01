import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';;
import { clearTweets } from '../actions/clear_tweets';
import { getTweets } from '../actions/get_twitter_feed';

class TwitterFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  renderTweets() {
    if (this.props.twitterFeed.length > 1) {
      this.props.twitterFeed.shift();
    }

    var cleanTweets = this.props.twitterFeed.statuses;
    var cleanTweetsObject = {};
    var tweetsArray = [];
    var regex = new RegExp(/htt\w+:\/\/\S+/);

    for (var i = 0; i < cleanTweets.length; i++) {
      var object = {};
      object.id = cleanTweets[i].id;

      if (cleanTweets[i].text.match(/htt\w+:\/\/\S+/)) {
        object.url = cleanTweets[i].text.match(/htt\w+:\/\/\S+/)[0];
      } else {
        object.url = '';
      }

      object.text = cleanTweets[i].text.replace(/htt\w+:\/\/\S+/g, ''),

      tweetsArray.push(object);
    }

    return _.map(tweetsArray, function (tweet) {
      return (
        <div className="tweets">
            <li key={ tweet.id } className="tweet-item"> { tweet.text }
            <a href={tweet.url} target="_blank">{tweet.url}</a>
            </li>
        </div>
      );
    });

    this.props.twitterFeed = [];
  }

  clearTweet() {
    this.props.clearTweets();
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    if (this.state.visible) {
      if (this.props.twitterFeed.statuses) {
        return (
          <div className="tweet-feed-visible">
          <h1 onClick= {
            this.clearTweet.bind(this),
            this.hide.bind(this)
          }><img src="/src/images/twitter.png" alt="twitter" /></h1>
          { this.renderTweets() }
          </div>
        );
      }

    }

    if (!this.state.visible || (Object.keys(this.props.twitterFeed).length === 0)) {
      return (
        <div className="tweet-feed">
          <h1 onClick={this.show.bind(this)}><img src="/src/images/twitter.png" alt="twitter" /></h1>
        </div>
      );
    }
  }
}

function mapStateToProps({ twitterFeed }) {
  return { twitterFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getTweets, clearTweets }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitterFeed);
