import axios from 'axios';

// Send action to server
export const GET_TWEETS = 'GET_TWEETS';

export function getTweets(country) {
  // console.log('Calling get Tweets Function', country.countryName);
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'water+' + fixedName;
  const request = axios.get(url);
  return {
    type: GET_TWEETS,
    payload: request,
  };
}
