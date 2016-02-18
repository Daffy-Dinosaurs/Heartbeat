import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getNews } from '../actions/get_news_feed';

class NewsOutlet extends Component {
  //TODO: continue to build out this feature with the potential to use this as a model
  constructor(props) {
    super(props);

    // console.log('inside the constructor', this.props);
  }

  showStory() {
    // console.log('inside of the newOutlet', this.props.newsFeed);

    return this.props.newsFeed.response.results.map((article) => {
      return (
        <div className='newsfeed'>
          <li key={article.webTitle} className='newsfeed-item'>
          { article.webTitle }: <a href={article.webUrl}>{ article.webUrl }</a>
          </li>                                                                                                                                                                                                                                          </div>
      );
    });

    this.props.newsFeed = [];
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
  return bindActionCreators({ getNews });
}

export default connect(mapStateToProps)(NewsOutlet);
