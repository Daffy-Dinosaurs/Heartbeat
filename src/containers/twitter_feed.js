import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

    return this.props.twitterFeed.statuses.map((tweet) => {
      return (
        <div className="tweets">
            <li key={ tweet.id } className="tweet-item"> { tweet.text } </li>
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
      // console.log('visiblity set to true');
      if (this.props.twitterFeed.statuses) {
        return (
          <div className="col-md-2 tweet-feed">
          <h1 onClick= {
            this.clearTweet.bind(this),
            this.hide.bind(this)
          }>Tweets</h1>
          { this.renderTweets() }
          </div>
        );
      }

    }

    if (!this.state.visible || (Object.keys(this.props.twitterFeed).length === 0)) {
      // console.log('visiblity set to false');
      return (
        <div>
          <h1 onClick={this.show.bind(this)}>Tweets</h1>
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
