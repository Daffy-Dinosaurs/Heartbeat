const intialState = {};

export default function(state = intialState, action) {
  // console.log('this is the action', action);

  if (action.type === 'COUNTRY_SELECTED') {
    return action.payload;
  }

  if (action.type === 'CLEAR_COUNTRY') {
    return intialState;
  }

  return state;
}
