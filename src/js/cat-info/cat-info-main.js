import { fetchBreeds } from './cat-api';
import '../../css/styles.css';

const breedSelect = document.querySelector('.breed-select');

fetchBreeds().then(response => {
  createSelect(response);
});

function createSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}
