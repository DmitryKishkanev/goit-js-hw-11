import axios from 'axios';

const myApiKey =
  'live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP';

axios.defaults.headers.common['x-api-key'] = myApiKey;

export function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
    return response.data;
    // console.log(response.data);
  });
}
