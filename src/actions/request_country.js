import axios from 'axios';

// Send action to server
export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';

export function requestCountries() {
  // console.log('REQUEST COUNTRIES HAS BEEN CALLED');
  const url = '//localhost:3001/api/countries';
  const request = axios.get(url);

<<<<<<< HEAD

  // console.log('PROMISE:', request);
=======
>>>>>>> 76bcc7ad04a3c4c573fdbc46f4e3b303abb5e6cf

  return {
    type: REQUEST_COUNTRIES,
    payload: request,
  };
}
