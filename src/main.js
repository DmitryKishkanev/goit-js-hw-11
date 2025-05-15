import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import fetchData from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formEl = document.querySelector('.form');

// Вешаем на форму слушатель события submit
formEl.addEventListener('submit', onFormSubmit);

// Функция - обработчик слушателя события формы
function onFormSubmit(evt) {
  evt.preventDefault();

  // Очищаем галерею
  clearGallery();

  // Показываем Loader
  showLoader();

  // Сохраняем в переменную данные из инпута
  const searchInput = evt.target.elements.namedItem('search-text').value.trim();

  // Обрабатываем промис функции запроса на бэкенд
  fetchData(searchInput)
    .then(response => {
      if (response.hits.length === 0) {
        // Вызов нотификации
        iziToastOptions(
          'Sorry, there are no images matching your search query. Please try again!',
          'pink'
        );
      }
      // Создаём галерю с данными из бэкенда
      createGallery(response.hits);
      // Очищаем инпут
      formEl.reset();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // Скрываем Loader
      hideLoader();
    });
}

// Опции подключенного через библиотеку alert
function iziToastOptions(message, backgroundColor) {
  return iziToast.show({
    message,
    messageColor: '#ff0000',
    backgroundColor,
    icon: '	fa fa-ban',
    iconColor: '#8b0000',
    position: 'topRight',
  });
}
