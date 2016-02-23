import axios from 'axios';

// Send action to server
export const POVERTY_TWEETS = 'POVERTY_TWEETS';

export function povertyTweets(country) {
  // console.log('Calling get Tweets Function', country.countryName);

  let fixedName = country.countryName.replace(' ', '+');
  const url = '/tweets/' + 'poverty+' + fixedName;
  const request = axios.get(url);
  return {
    type: POVERTY_TWEETS,
    payload: request,
  };
}
