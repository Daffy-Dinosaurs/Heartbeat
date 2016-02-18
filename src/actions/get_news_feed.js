import axios from 'axios';

export const GET_NEWS = 'GET_NEWS';

export function getNews(country) {

  let fixedName = country.countryName.replace(' ', '+');

  console.log('this is fixedName', fixedName);

  const url = 'http://content.guardianapis.com/search?section=environment&q=' + fixedName + '&api-key=01d2edf7-9a63-4f68-a144-d1ed24b476cb';
  console.log('this is url', url);
  const request = axios.get(url);

  return {
    type: GET_NEWS,
    payload: request,
  };
}
