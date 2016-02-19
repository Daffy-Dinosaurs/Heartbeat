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

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  clearFeed() {
    console.log('clear feed is being called');
    this.props.clearNews();
  }

  render() {
    if (this.state.visible) {
      console.log()
      if (this.props.newsFeed.response) {
        // console.log('passing conditional in news Outlet');
        return (
          <div className="col-md-2 newsfeed-feed">
          <h1 onClick= {this.clearFeed.bind(this)}>News Feed</h1>
          { this.showStory() }
          </div>
        );

      }

    }

    if (!this.state.visible) {
      return <div></div>;

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
