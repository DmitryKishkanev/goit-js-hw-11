import"./assets/styles-Bx2iRc3n.js";import{a as m,S as y,i as g}from"./assets/vendor-Do1ajUWv.js";const f="50268892-929648ae4af930c873d247de9";function p(e){return m.get("https://pixabay.com/api/",{params:{key:f,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(a=>a.data)}const l=document.querySelector(".gallery"),o=document.querySelector(".loader"),d=new y(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function b(e){const a=e.map(({webformatURL:t,largeImageURL:i,tags:n,likes:s,views:c,comments:u,downloads:h})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${i}">
    <img class="gallery-image" src="${t}" alt="${n}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${s}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${c}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${u}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${h}
      </li>
    </ul>
  </a>
</li>

  `).join("");l.insertAdjacentHTML("beforeend",a),d.refresh()}function L(){l.innerHTML=""}function S(){o.classList.add("active")}function $(){o.classList.remove("active")}const r=document.querySelector(".form");r.addEventListener("submit",k);function k(e){e.preventDefault(),L(),S();const a=e.currentTarget.elements["search-text"].value.trim();p(a).then(t=>{t.hits.length===0&&q("Sorry, there are no images matching your search query. Please try again!","pink"),b(t.hits),r.reset()}).catch(t=>{console.log(t)}).finally(()=>{$()})}function q(e,a){return g.show({message:e,messageColor:"#ff0000",backgroundColor:a,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=1-gallery.js.map
