import axios from 'axios';
import API from './../api';

export const GET_NEWS = 'GET_NEWS';

export function getNews(country) {

  let fixedName = country.countryName.replace(' ', '+');

  const url = 'https://content.guardianapis.com/search?section=environment&q=' + fixedName + '&api-key=' + API.guardian.API_KEY;

  // console.log('this is url', url);
  const request = axios.get(url);

  return {
    type: GET_NEWS,
    payload: request,
  };
}
