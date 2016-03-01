import axios from 'axios';

export const COUNTRY_DATA = 'COUNTRY_DATA';

export function getAllData() {
  const url = '/api/statistics';
  const request = axios.get(url);

  return {
    type: COUNTRY_DATA,
    payload: request,
  };
}
