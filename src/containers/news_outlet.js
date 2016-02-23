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
      return (
        <div className='newsfeed'>
          <li key={article.webUrl} className='newsfeed-item'>
          { article.webTitle }: <a href={article.webUrl}>{ article.webUrl }</a>
          </li></div>
      );
    });

    // this.props.newsFeed = [];
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
          <div className="col-md-2 newsfeed-feed">
          <h1 onClick= {
            this.clearFeed.bind(this),
            this.hide.bind(this)
          }>News Feed</h1>
          { this.showStory() }
          </div>
        );

      }

    }

    if (!this.state.visible || (Object.keys(this.props.newsFeed).length === 0 ) ) {
      // console.log('visiblity set to false');
      return (
        <div>
          <h1 onClick={this.show.bind(this)}>News Feed</h1>
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
