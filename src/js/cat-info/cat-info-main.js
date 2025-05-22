import { fetchBreeds, fetchCatByBreed } from './cat-api';
import '../../css/styles.css';

const breedSelect = document.querySelector('.breed-select');
const infoContainer = document.querySelector('.cat-info');
breedSelect.addEventListener('change', onbreedSelect);

fetchBreeds()
  .then(response => {
    createSelect(response);
  })
  .catch(error => {
    console.log(error);
  });

function createSelect(breeds) {
  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function onbreedSelect() {
  const selectedCatId = breedSelect.value;
  fetchCatByBreed(selectedCatId).then(response => {
    console.log(response);
    createInfo(response.data);
  });
}

function createInfo(card) {
  const cardMarkup = `
  <img src="${card.url}" alt="" class="cat-img" />
`;

  infoContainer.insertAdjacentHTML('beforeend', cardMarkup);
}
