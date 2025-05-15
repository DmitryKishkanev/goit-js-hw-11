import{a as d,S as m,i as h}from"./assets/vendor-Do1ajUWv.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();function y(o){return d.get("https://pixabay.com/api/",{params:{key:"50268892-929648ae4af930c873d247de9",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(r=>r.data)}const s=document.querySelector(".gallery"),l=document.querySelector(".loader"),g=new m(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});function p(o){const r=o.map(({webformatURL:a,largeImageURL:n,tags:e,likes:t,views:i,comments:u,downloads:f})=>`
<li class="gallery-item">
  <a class="gallery-link" href="${n}">
    <img class="gallery-image" src="${a}" alt="${e}" />
    <ul class="gallery-analytics">
      <li class="gallery-counters">
        <h1>Likes</h1>
        ${t}
      </li>
      <li class="gallery-counters">
        <h1>Views</h1>
        ${i}
      </li>
      <li class="gallery-counters">
        <h1>Comments</h1>
        ${u}
      </li>
      <li class="gallery-counters">
        <h1>Downloads</h1>
        ${f}
      </li>
    </ul>
  </a>
</li>

  `).join("");s.insertAdjacentHTML("beforeend",r),g.refresh()}function L(){s.innerHTML=""}function b(){l.classList.add("active")}function S(){l.classList.remove("active")}const c=document.querySelector(".form");c.addEventListener("submit",v);function v(o){o.preventDefault(),L(),b();const r=o.target.elements.namedItem("search-text").value.trim();y(r).then(a=>{a.hits.length===0&&O("Sorry, there are no images matching your search query. Please try again!","pink"),p(a.hits),c.reset()}).catch(a=>{console.log(a)}).finally(()=>{S()})}function O(o,r){return h.show({message:o,messageColor:"#ff0000",backgroundColor:r,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=index.js.map
