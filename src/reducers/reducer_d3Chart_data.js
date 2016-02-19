import { GET_WATER_DATA } from '../actions/get_water_data';

export default function(state = [], action) {

  // console.log("INSIDE REDUCER:", action);
  switch (action.type) {

  case GET_WATER_DATA:
    // console.log('payload data:', action.payload.data);
    return state.concat(action.payload.data);
  }
  return state;
};
