import fetchData from './js/pixabay-api';
import createGallery from './js/render-functions';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(evt) {
  evt.preventDefault();

  const searchInput = evt.target.elements.namedItem('search-text').value;

  fetchData(searchInput)
    .then(response => {
      createGallery(response.hits);
    })
    .catch(error => {
      console.log(error);
    });
}
