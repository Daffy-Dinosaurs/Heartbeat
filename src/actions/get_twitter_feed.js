import axios from 'axios';

// Send action to server
export const GET_TWEETS = 'GET_TWEETS';

export function getTweets() {
  console.log("Calling get Tweets Function");
  // const url = 'https://api.github.com/users/ksiddana';
  const url = '//localhost:3001/tweets/' + 'water+uganda';
  console.log(url);
  const request = axios.get(url);

  console.log("PROMISE:", request);

  return {
    type: GET_TWEETS,
    payload: request
  };
}