import axios from 'axios';

const myApiKey = '50268892-929648ae4af930c873d247de9';

// Функция запроса на бэкенд
export function fetchData(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: myApiKey,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => {
      return response.data;
    });
}
