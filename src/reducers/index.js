import { combineReducers } from 'redux';
import ActiveCountry from './reducer_active_country';
import { COUNTRY_SELECTED } from '../actions/country_select';
import { REQUEST_COUNTRIES } from '../actions/request_country';
import CountryList from './reducer_countryList';
import TwitterFeed from './reducer_twitter_feed';
import GlobeAction from './reducer_globe_action';
import { GLOBE_ACTION_SELECTED } from '../actions/globe_action';
import WaterData from './reducer_d3Chart_data';
import { CLEAR_COUNTRY } from '../actions/clear_country';
import { CLEAR_TWEETS } from '../actions/clear_tweets';
import { GET_NEWS } from '../actions/get_news_feed';
import  NewsFeed from './reducer_news_outlet';
import { CLEAR_NEWS } from '../actions/clear_news_feed';
import { COUNTRY_DATA } from '../actions/get_all_data';
import AllData from './reducer_all_data';

const rootReducer = combineReducers({
  globeCountry: GlobeAction,
  activeCountry: ActiveCountry,
  countryList: CountryList,
  twitterFeed: TwitterFeed,
  waterData: WaterData,
  clearCountry: ActiveCountry,
  clearTweets: TwitterFeed,
  newsFeed: NewsFeed,
  clearNews: NewsFeed,
  allData: AllData,
});

export default rootReducer;
