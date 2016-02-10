import axios from 'axios';

// Send action to server
export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';

export function requestCountries() {
  console.log('REQUEST COUNTRIES HAS BEEN CALLED');
  const url = '//localhost:3001/api/countries';
  const request = axios.get(url);

  console.log('PROMISE:', request);

  return {
    type: REQUEST_COUNTRIES,
    payload: request,
  };
}
