import axios from 'axios';

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';

export function requestCountries() {
  const url = '/api/countries';
  const request = axios.get(url);

  return {
    type: REQUEST_COUNTRIES,
    payload: request,
  };
}
