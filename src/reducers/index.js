import { combineReducers } from 'redux';
import ActiveCountry from './reducer_active_country';
import { COUNTRY_SELECTED } from '../actions/country_select';
import { REQUEST_COUNTRIES } from '../actions/request_country';
import CountryList from './reducer_countryList';
import TwitterFeed from './reducer_twitter_feed';
import GlobeAction from './reducer_globe_action';
import { GLOBE_ACTION_SELECTED } from '../actions/globe_action';
import { CLEAR_COUNTRY } from '../actions/clear_country';
import { CLEAR_TWEETS } from '../actions/clear_tweets';
import { GET_NEWS } from '../actions/get_news_feed';
import  NewsFeed from './reducer_news_outlet';

// import ClearCountry from './reducer_clear_country';

const rootReducer = combineReducers({
  globeCountry: GlobeAction,
  activeCountry: ActiveCountry,
  countryList: CountryList,
  twitterFeed: TwitterFeed,
  clearCountry: ActiveCountry,
  clearTweets: TwitterFeed,
  newsFeed: NewsFeed,
});

export default rootReducer;
