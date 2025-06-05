import"./assets/styles-ZTTaWih3.js";import{i as s}from"./assets/vendor-Do1ajUWv.js";function u(e,t){return fetch(`http://api.weatherapi.com/v1/forecast.json?key=b33a3ee3df124911b63162045252805&q=${e}&days=${t}&lang=ru`).then(r=>{if(!r.ok)throw l("Sorry, there is no information matching your search query. Try again!","pink"),new Error(r.statusText);return r.json()})}function l(e,t){return s.show({message:e,messageColor:"#ff0000",backgroundColor:t,icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}function h(e){return e.map(({date:t,day:{avgtemp_c:n,condition:{icon:o,text:r}}})=>`<li class="weather-item">
          <img src="${o}" alt="${r}" class="weather-img">
          <p>${r}</p>
          <h2>${t}</h2>
          <h3>${n} &deg;С</h3>
        </li>`).join("")}const a=document.querySelector(".js-search"),i=document.querySelector(".js-list"),c=document.querySelector(".loader");a.addEventListener("submit",f);function f(e){e.preventDefault(),d(),m();const{query:t,days:n}=e.currentTarget.elements;u(t.value.trim(),n.value).then(o=>{i.innerHTML=h(o.forecast.forecastday),a.reset()}).catch(o=>{console.log(o)}).finally(()=>{y()})}function d(){i.innerHTML=""}function m(){c.classList.add("active")}function y(){c.classList.remove("active")}
//# sourceMappingURL=3-weather.js.map
