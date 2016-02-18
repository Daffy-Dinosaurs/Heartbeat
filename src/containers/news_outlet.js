import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../actions/get_news_feed';

class NewsOutlet extends Component {

  constructor(props) {
    super(props);

    this.state = { feed: '' };
    this.state.feed;

    // console.log('inside the constructor', this.props);
  }

  showStory() {
    // console.log('inside of the newOutlet', this.props.newsFeed);
    // console.log(Math.random());
    return this.props.newsFeed.response.results.map((article) => {
      return (
        <div className='newsfeed'>
          <li key={article.webUrl} className='newsfeed-item'>
          { article.webTitle }: <a href={article.webUrl}>{ article.webUrl }</a>
          </li></div>
      );
    });

    // this.props.newsFeed = [];
  }

  render() {
    if (this.props.newsFeed.response) {
      // console.log('passing conditional in news Outlet');
      return (
        <div className="col-md-2 newsfeed-feed">
        <h1>News Feed</h1>
        { this.showStory() }
        </div>
      );
    } else {
      return <div></div>;
    }
  }

}

function mapStateToProps({ newsFeed }) {
  return { newsFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsOutlet);
