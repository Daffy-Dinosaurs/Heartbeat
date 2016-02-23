import axios from 'axios';

// Send action to server
export const COUNTRY_DATA = 'COUNTRY_DATA';

export function getAllData() {
  // console.log('REQUEST COUNTRIES HAS BEEN CALLED');
  const url = '/api/statistics';
  const request = axios.get(url);

  return {
    type: COUNTRY_DATA,
    payload: request,
  };
}
