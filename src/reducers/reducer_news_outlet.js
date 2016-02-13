import { GET_NEWS } from '../actions/get_news_feed';

export default function(state = [], action) {

  switch (action.type) {

  case 'GET_NEWS':
    console.log('this is the news feed');
    return state.concat(action.payload.data);
  }

  return state;
}
