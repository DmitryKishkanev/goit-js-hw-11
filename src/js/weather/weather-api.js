import axios from 'axios';

// http://api.weatherapi.com/v1/forecast.json?key=b33a3ee3df124911b63162045252805&q=Paris&days=5

export function fetchWeather(city, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = 'b33a3ee3df124911b63162045252805';

  return axios
    .get(`${BASE_URL}/forecast.json`, {
      params: {
        key: API_KEY,
        q: city,
        days: days,
      },
    })
    .then(response => {
      return response;
    });

  //   fetch(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`).then(
  //     resp => console.log(resp)
  //   );
}
