import{a as i}from"./assets/vendor-a2e8d7fa.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const l=i.create({baseURL:"https://dummyjson.com"}),a=async()=>(await l.get("/products")).data,u=r=>r.map(({title:o,price:s,images:n,description:e})=>`<li>
        <h2>${o}</h2>
        <p>${s}</p>
        <img src="${n[0]}" alt="${e}">
      </li>`).join(),d=async()=>{const r=document.getElementById("allProducts"),o=await a();console.log(o),r.insertAdjacentHTML("beforeend",u(o.products))};d();
//# sourceMappingURL=commonHelpers.js.map
