import { REQUEST_COUNTRIES } from '../actions/request_country';

export default function(state = [], action) {
  switch (action.type) {
  case REQUEST_COUNTRIES:
    return state.concat(action.payload.data);
  }
  return state;
};
