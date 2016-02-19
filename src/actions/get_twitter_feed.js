import axios from 'axios';

// Send action to server
export const GET_TWEETS = 'GET_TWEETS';

export function getTweets(country) {

  let fixedName = country.countryName.replace(' ', '+');

  // const url = 'https://api.github.com/users/ksiddana';
  const url = '//localhost:3001/tweets/' + 'water+' + fixedName;
  const request = axios.get(url);


  return {
    type: GET_TWEETS,
    payload: request,
  };
}
