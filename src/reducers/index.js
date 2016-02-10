import { combineReducers } from 'redux';
import CountryReducer from './reducer_countries';
import ActiveCountry from './reducer_active_book';

const rootReducer = combineReducers({
  countries: CountryReducer,
  activeCountry: ActiveCountry,
});

export default rootReducer
