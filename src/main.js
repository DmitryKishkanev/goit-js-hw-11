import fetchData from './js/pixabay-api';
// import moduleName from './js/render-functions';

// const formEl = document.querySelector('.form');

// formEl.addEventListener;

fetchData()
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });
