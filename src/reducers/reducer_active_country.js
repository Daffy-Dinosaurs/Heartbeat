const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'COUNTRY_SELECTED') {
    return action.payload;
  }

  if (action.type === 'CLEAR_COUNTRY') {
    return intialState;
  }

  return state;
}
