import { GET_TWEETS } from '../actions/get_twitter_feed';

export default function(state = [], action) {
  
  switch (action.type) {
  
  case GET_TWEETS:
    console.log('payload data:', action.payload.data);
    return state.concat(action.payload.data);
  }
  return state;
};
