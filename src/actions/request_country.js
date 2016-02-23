import axios from 'axios';

// Send action to server
export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';

export function requestCountries() {
  // console.log('REQUEST COUNTRIES HAS BEEN CALLED');
  const url = '/api/countries';
  const request = axios.get(url);

  return {
    type: REQUEST_COUNTRIES,
    payload: request,
  };
}
