import { fetchBreedInfo } from './cat-api';

const loaderEl = document.querySelector('.loader');

function createSelect(breeds, breedSelect) {
  breedSelect.classList.remove('is-hidden');

  breeds.forEach(breed => {
    const option = document.createElement('option');
    option.value = breed.id;
    option.textContent = breed.name;
    breedSelect.appendChild(option);
  });
}

function createInfo(card, breedSelect, infoContainer, iziToastOptions) {
  const cat = card.data[0];

  fetchBreedInfo(breedSelect.value)
    .then(breed => {
      if (!breed) {
        infoContainer.innerHTML = `<p>Информация о породе недоступна.</p>`;
        return;
      }

      const cardMarkup = `
<div class="cat-card">
  <img src="${cat.url}" alt="${breed.name}" class="cat-img" />
  <div class="cat-description">
    <h2>${breed.name}</h2>
    <p><strong>Temperament:</strong> ${breed.temperament}</p>
    <p><strong>Description:</strong> ${breed.description}</p>
  </div>
</div>
    `;
      infoContainer.classList.remove('is-hidden');
      infoContainer.innerHTML = cardMarkup;
    })
    .catch(error => {
      iziToastOptions(error);
    });
}

// Функция отображения Loader
function showLoader() {
  loaderEl.classList.add('active');
}

// Функция скрывания Loader
function hideLoader() {
  loaderEl.classList.remove('active');
}

export { createSelect, createInfo, showLoader, hideLoader };
