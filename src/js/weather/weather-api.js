export function fetchWeather(city, days) {
  const BASE_URL = 'http://api.weatherapi.com/v1';
  const API_KEY = 'b33a3ee3df124911b63162045252805';

  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return response.json();
  });
}
