import { GET_NEWS } from '../actions/get_news_feed';

const intialState = {};

export default function(state = intialState, action) {

  if (action.type === 'GET_NEWS') {
    // console.log('this is the news feed', action.payload.data);
    return action.payload.data;
  } else {

    return intialState;

  }

}
