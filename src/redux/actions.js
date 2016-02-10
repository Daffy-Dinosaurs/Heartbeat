import axios from 'axios';
/*
 * action types
 */

// export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * action creators
 */

// Send action to server
export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';;
export const requestCountries = () => {
  console.log('REQUEST COUNTRIES HAS BEEN CALLED');
  const url = '//localhost:3001/api/countries';
  const request = axios.get(url);

  console.log('PROMISE:', request);

  return {
    type: REQUEST_COUNTRIES,
    payload: request,
  };
};;
