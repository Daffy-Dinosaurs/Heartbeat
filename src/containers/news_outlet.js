import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../actions/get_news_feed';
import { clearNews } from '../actions/clear_news_feed';

class NewsOutlet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  showStory() {
    return this.props.newsFeed.response.results.map((article) => {
      console.log(article);
      return (
        <div className='newsfeed'>
          <li key={article.webUrl} className='newsfeed-item'>
            <h5>{ article.webTitle }</h5>
            <a href={article.webUrl}>Read More...</a>
          </li>
        </div>
      );
    });
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  clearFeed() {
    this.props.clearNews();
  }

  render() {
    if (this.state.visible) {
      if (this.props.newsFeed.response) {
        return (
          <div className="newsfeed-feed-visible">
            <h3 onClick= {
              this.clearFeed.bind(this),
              this.hide.bind(this)
            }>Local News</h3>
          { this.showStory() }
          </div>
        );
      }
    }

    if (!this.state.visible || (Object.keys(this.props.newsFeed).length === 0)) {

      return (
        <div className="newsfeed-feed">
          <h1 onClick={this.show.bind(this)}>
            <img src="/src/images/news.png" alt="news" />
          </h1>
        </div>
      );
    }
  }
}

function mapStateToProps({ newsFeed }) {
  return { newsFeed };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getNews, clearNews }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsOutlet);
