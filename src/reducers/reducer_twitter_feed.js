import { GET_TWEETS } from '../actions/get_twitter_feed';

const initialState = {};

export default function(state = initialState, action) {

  if (action.type === 'GET_TWEETS') {
    return action.payload.data;
  }

  if (action.type === 'CLEAR_TWEETS') {
    return initialState;

  }

  return state;

};
