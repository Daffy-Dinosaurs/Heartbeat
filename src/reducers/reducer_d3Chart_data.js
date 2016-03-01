import { GET_WATER_DATA } from '../actions/get_water_data';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'GET_WATER_DATA') {
    return action.payload.data;
  }

  if (action.type === 'COUNTRY_SELECTED') {
    return action.payload;
  }

  return state;
};
