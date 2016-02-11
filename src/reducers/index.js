import { combineReducers } from 'redux';
import ActiveCountry from './reducer_active_country';
import { REQUEST_COUNTRIES } from '../actions/request_country';
import CountryList from './reducer_countryList';
import TwitterFeed from './reducer_twitter_feed';

const rootReducer = combineReducers({
  activeCountry: ActiveCountry,
  countryList: CountryList,
  twitterFeed: TwitterFeed,
});

export default rootReducer;
