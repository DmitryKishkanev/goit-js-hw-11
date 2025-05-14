import{a as u}from"./assets/vendor-B2YOV0tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(l){return u.get("https://pixabay.com/api/",{params:{key:"50268892-929648ae4af930c873d247de9",q:l,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}function d(l){const r=l.map(({webformatURL:a,largeImageUR:e,tags:t,likes:s,views:n,comments:i,downloads:c})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${e}">
    <img class="gallery-image" src="${a}" alt="${t}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${s}
      </li>
      <li class="gallery-counters">
        <h1>Viev</h1>
        ${n}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${i}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${c}
      </li>
    </ul>
  </a>
</li>

  `).join("");document.querySelector(".gallery").insertAdjacentHTML("beforeend",r)}const m=document.querySelector(".form");m.addEventListener("submit",y);function y(l){l.preventDefault();const r=l.target.elements.namedItem("search-text").value;f(r).then(o=>{d(o.hits)}).catch(o=>{console.log(o)})}
//# sourceMappingURL=index.js.map
