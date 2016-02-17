import axios from 'axios';

export const GET_NEWS = 'GET_NEWS';

export function getNews(country) {

  const url = 'http://content.guardianapis.com/search?section=environment&q=argentina&api-key=01d2edf7-9a63-4f68-a144-d1ed24b476cb';

  const request = axios.get(url);

  return {
    type: GET_NEWS,
    payload: request,
  };
}
