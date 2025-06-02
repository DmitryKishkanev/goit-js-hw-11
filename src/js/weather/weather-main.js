import { fetchWeather } from './weather-api';
import '../../css/styles.css';

fetchWeather('Paris', 5)
  .then(data => console.log(data))
  .catch(window.alert('statusText'));
