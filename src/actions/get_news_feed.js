import axios from 'axios';
import API from './../api';

export const GET_NEWS = 'GET_NEWS';

export function getNews(country) {
  let fixedName = country.countryName.replace(' ', '+');
  const url = 'https://content.guardianapis.com/search?section=environment&q=' + fixedName + '&api-key=' + API.guardian.API_KEY;
  const request = axios.get(url);

  return {
    type: GET_NEWS,
    payload: request,
  };
}
