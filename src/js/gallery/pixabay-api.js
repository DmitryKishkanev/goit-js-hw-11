import axios from 'axios';

// Функция запроса на бэкенд
export default function fetchData(query) {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '50268892-929648ae4af930c873d247de9',
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
