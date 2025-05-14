export default function createGallery(images) {
  const galleryMarkup = images
    .map(
      ({
        webformatURL,
        largeImageUR,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `
<li class="gallery-item">
  <a class="gallery-link" href="${largeImageUR}">
    <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${likes}
      </li>
      <li class="gallery-counters">
        <h1>Viev</h1>
        ${views}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${comments}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${downloads}
      </li>
    </ul>
  </a>
</li>

  `;
      }
    )
    .join('');

  const galleryContainer = document.querySelector('.gallery');
  galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
}
