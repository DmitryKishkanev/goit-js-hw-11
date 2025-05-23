import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import {
  createSelect,
  createInfo,
  showLoader,
  hideLoader,
} from './render-functions';
import '../../css/styles.css';

const breedSelect = document.querySelector('.breed-select');
const infoContainer = document.querySelector('.cat-info');

breedSelect.addEventListener('change', onbreedSelect);

breedSelect.classList.add('is-hidden');
showLoader();

fetchBreeds()
  .then(response => {
    createSelect(response, breedSelect);
  })
  .catch(error => {
    iziToastOptions(error);
    breedSelect.classList.add('is-hidden');
  })
  .finally(() => {
    // Скрываем Loader
    hideLoader();
  });

function onbreedSelect() {
  infoContainer.classList.add('is-hidden');

  showLoader();

  const selectedCatId = breedSelect.value;

  fetchCatByBreed(selectedCatId)
    .then(response => {
      createInfo(response, breedSelect, infoContainer, iziToastOptions);
    })
    .catch(error => {
      iziToastOptions(error);
      // console.log(error);
    })
    .finally(() => {
      // Скрываем Loader
      hideLoader();
    });
}

// Опции подключенного через библиотеку alert
function iziToastOptions() {
  return iziToast.show({
    message: 'Oops! Something went wrong! Try reloading the page!',
    messageColor: 'white',
    backgroundColor: 'red',
    icon: '	fa fa-ban',
    iconColor: '#8b0000',
    position: 'topRight',
  });
}
