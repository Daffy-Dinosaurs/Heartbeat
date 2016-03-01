import axios from 'axios';

export const GET_WATER_DATA = 'GET_WATER_DATA';

export function getWaterData(pCountryId) {

  const url = '/api/statistics/' + pCountryId;
  const request = axios.get(url);

  return {
    type: GET_WATER_DATA,
    payload: request,
  };
}
