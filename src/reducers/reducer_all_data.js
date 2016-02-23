import { COUNTRY_DATA } from '../actions/get_all_data';

const intialState = {};

export default function(state = intialState, action) {

  // console.log("INSIDE REDUCER:", action);
  if (action.type === 'COUNTRY_DATA') {
    // console.log('payload data:', action.payload.data);
    return action.payload.data;
  }

  return state;
};
