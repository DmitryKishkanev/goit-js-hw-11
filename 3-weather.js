import"./assets/styles-Bx2iRc3n.js";function o(e,r){return fetch(`http://api.weatherapi.com/v1/forecast.json?key=b33a3ee3df124911b63162045252805&q=${e}&days=${r}`).then(n=>{if(!n.ok)throw new Error(n.statusText);return n.json()})}const a=document.querySelector(".js-search"),s=document.querySelector(".js-list");a.addEventListener("submit",i);function i(e){e.preventDefault();const{query:r,days:c}=e.currentTarget.elements;o(r.value,c.value).then(t=>s.innerHTML=u(t.forecast.forecastday)).catch(t=>console.log(t))}function u(e){return e.map(({date:r,day:{avgtemp_c:c,condition:{icon:t,text:n}}})=>`<li>
        <img src="${t}" alt="${n}" />
        <p>${n}</p>
        <h2>${r}</h2>
        <h3>${c}</h3>
      </li>`).join("")}
//# sourceMappingURL=3-weather.js.map
