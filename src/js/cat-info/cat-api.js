import axios from 'axios';

const myApiKey =
  'live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP';

axios.defaults.headers.common['x-api-key'] = myApiKey;

function fetchBreeds() {
  return axios.get('https://api.thecatapi.com/v1/breeds').then(response => {
    return response.data;
  });
}

function fetchBreedInfo(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/breeds/${breedId}`)
    .then(response => {
      return response.data;
    });
}

function fetchCatByBreed(breedId) {
  return axios
    .get(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => {
      return response;
    });
}

export { fetchBreeds, fetchBreedInfo, fetchCatByBreed };
