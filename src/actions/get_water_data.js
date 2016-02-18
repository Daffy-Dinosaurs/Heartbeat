import axios from 'axios';

// Send action to server
export const GET_WATER_DATA = 'GET_WATER_DATA';

export function getWaterData() {
  console.log('Calling Water Data Function');

  const url = '//localhost:3001/api/statistics/188';
  console.log(url);
  const request = axios.get(url);

  console.log('PROMISE:', request.data);

  return {
    type: GET_WATER_DATA,
    payload: request,
  };
}
