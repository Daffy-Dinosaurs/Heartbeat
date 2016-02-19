import axios from 'axios';

// Send action to server
export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';

export function requestCountries() {
  const url = '//localhost:3001/api/countries';
  const request = axios.get(url);


  return {
    type: REQUEST_COUNTRIES,
    payload: request,
  };
}
