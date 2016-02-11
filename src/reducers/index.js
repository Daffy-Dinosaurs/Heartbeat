import { combineReducers } from 'redux';
import ActiveCountry from './reducer_active_country';
import { COUNTRY_SELECTED} from '../actions/country_select';
import { REQUEST_COUNTRIES } from '../actions/request_country';
import CountryList from './reducer_countryList';

const rootReducer = combineReducers({
  activeCountry: ActiveCountry,
  countryList: CountryList,
});

export default rootReducer;
