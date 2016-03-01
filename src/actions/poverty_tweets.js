import axios from 'axios';

export const POVERTY_TWEETS = 'POVERTY_TWEETS';

export function povertyTweets(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'poverty+' + fixedName;
  const request = axios.get(url);

  return {
    type: POVERTY_TWEETS,
    payload: request,
  };
}
