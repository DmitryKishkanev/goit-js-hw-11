import"./assets/styles-aT9tsAiQ.js";import{a as c,i as u}from"./assets/vendor-Do1ajUWv.js";const f="live_ gCrMzxVedQewgspyzOBQIG2uzIc7uX ZZLlOa2KWOyd9IsmmF2onJcOmaXJlO sQfP";c.defaults.headers.common["x-api-key"]=f;function g(){return c.get("https://api.thecatapi.com/v1/breeds").then(e=>e.data)}function v(e){return c.get(`https://api.thecatapi.com/v1/breeds/${e}`).then(t=>t.data)}function L(e){return c.get(`https://api.thecatapi.com/v1/images/search?breed_ids=${e}`).then(t=>t)}const d=document.querySelector(".loader");function y(e,t){t.classList.remove("is-hidden"),e.forEach(a=>{const s=document.createElement("option");s.value=a.id,s.textContent=a.name,t.appendChild(s)})}function C(e,t,a,s){const p=e.data[0];v(t.value).then(n=>{if(!n){a.innerHTML="<p>Информация о породе недоступна.</p>";return}const m=`
<div class="cat-card">
  <img src="${p.url}" alt="${n.name}" class="cat-img" />
  <div class="cat-description">
    <h2>${n.name}</h2>
    <p><strong>Temperament:</strong> ${n.temperament}</p>
    <p><strong>Description:</strong> ${n.description}</p>
  </div>
</div>
    `;a.classList.remove("is-hidden"),a.innerHTML=m}).catch(n=>{s(n)})}function l(){d.classList.add("active")}function h(){d.classList.remove("active")}const o=document.querySelector(".breed-select"),r=document.querySelector(".cat-info");o.addEventListener("change",O);o.classList.add("is-hidden");l();g().then(e=>{y(e,o)}).catch(e=>{i(),o.classList.add("is-hidden")}).finally(()=>{h()});function O(){r.classList.add("is-hidden"),l();const e=o.value;L(e).then(t=>{C(t,o,r,i)}).catch(t=>{i()}).finally(()=>{h()})}function i(){return u.show({message:"Oops! Something went wrong! Try reloading the page!",messageColor:"white",backgroundColor:"red",icon:"	fa fa-ban",iconColor:"#8b0000",position:"topRight"})}
//# sourceMappingURL=2-cat-info.js.map
