import"./assets/styles-Bx2iRc3n.js";import{a as o}from"./assets/vendor-DAobNtaX.js";function r(t,e){return o.get("http://api.weatherapi.com/v1/forecast.json",{params:{key:"b33a3ee3df124911b63162045252805",q:t,days:e}}).then(a=>a)}r("Paris",5).then(t=>console.log(t)).catch(window.alert("statusText"));
//# sourceMappingURL=3-weather.js.map
