import axios from 'axios';

// Send action to server
export const GET_TWEETS = 'GET_TWEETS';

export function getTweets(country) {
<<<<<<< HEAD
//  console.log('Calling get Tweets Function', country.countryName);

=======
  // console.log('Calling get Tweets Function', country.countryName);
>>>>>>> 76bcc7ad04a3c4c573fdbc46f4e3b303abb5e6cf
  let fixedName = country.countryName.replace(' ', '+');
  const url = '//localhost:3001/tweets/' + 'water+' + fixedName;
<<<<<<< HEAD
  //console.log(url);
  const request = axios.get(url);

//  console.log('PROMISE:', request);

=======
  const request = axios.get(url);
>>>>>>> 76bcc7ad04a3c4c573fdbc46f4e3b303abb5e6cf
  return {
    type: GET_TWEETS,
    payload: request,
  };
}
