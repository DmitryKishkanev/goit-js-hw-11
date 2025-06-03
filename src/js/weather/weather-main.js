import { fetchWeather } from './weather-api';
import '../../css/styles.css';

const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');

search.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();

  const { query, days } = evt.currentTarget.elements;
  fetchWeather(query.value, days.value)
    .then(data => (list.innerHTML = createMarkup(data.forecast.forecastday)))
    .catch(err => console.log(err));
}

// fetchWeather('Paris', 5)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `<li>
        <img src="${icon}" alt="${text}" />
        <p>${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c}</h3>
      </li>`
    )
    .join('');
}
