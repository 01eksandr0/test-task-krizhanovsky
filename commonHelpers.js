(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const n={menu:document.querySelector(".menu"),btn:document.querySelector(".menu-btn"),bntClose:document.querySelector(".menu-btn-close"),openMenu:()=>n.menu.classList.toggle("is-open"),closeMenu:()=>{n.menu.classList.toggle("is-open")}};n.btn.addEventListener("click",n.openMenu);n.bntClose.addEventListener("click",n.closeMenu);document.querySelector(".btn-cont").textContent="<";
//# sourceMappingURL=commonHelpers.js.map