import { COUNTRY_DATA } from '../actions/get_all_data';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'COUNTRY_DATA') {
    return action.payload.data;
  }

  return state;
};
