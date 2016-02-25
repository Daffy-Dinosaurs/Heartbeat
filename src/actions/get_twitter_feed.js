import axios from 'axios';

export const GET_TWEETS = 'GET_TWEETS';

export function getTweets(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'water+' + fixedName;
  const request = axios.get(url);

  return {
    type: GET_TWEETS,
    payload: request,
  };
}
