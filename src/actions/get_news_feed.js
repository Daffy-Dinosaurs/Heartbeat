import axios from 'axios';

export const GET_NEWS = 'GET_NEWS';

export function getNews(country) {
  console.log('Inside of getNews function');

  const url = '';

  const request = axios.get(url);

  return {
    type: GET_NEWS,
    payload: request,
  };
}
