import { REQUEST_COUNTRIES } from '../actions/request_country';

export default function(state = [], action) {
  switch (action.type) {
  case REQUEST_COUNTRIES:
    console.log('payload data:', action.payload.data);
    return [action.payload.data, ...state];
  }
  return state;
};
