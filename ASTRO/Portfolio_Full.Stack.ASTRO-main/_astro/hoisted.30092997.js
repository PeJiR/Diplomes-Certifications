import{s as l}from"./hoisted.aa22eaf1.js";import"./lite-yt-embed.905b7b75.js";import"./index.12019092.js";function i(){const e=document.querySelectorAll(".series-card");let t="down",r=window.scrollY;window.onscroll=function(){t=r<window.scrollY?"down":"up",r=window.scrollY};const o=new IntersectionObserver((r=>{r.forEach((r=>{const o=Array.from(e).indexOf(r.target);r.isIntersecting?(e[o].classList.add("is-current-card"),"down"===t?e[o].classList.add("is-current-card-while-scrolling-down"):e[o].classList.add("is-current-card-while-scrolling-up")):(e[o].classList.remove("is-current-card"),e[o].classList.remove("is-current-card-while-scrolling-down"),e[o].classList.remove("is-current-card-while-scrolling-up"))}))}),{root:null,threshold:0,rootMargin:"-50% 0% -50% 0%"});e.forEach((e=>{o.observe(e)}))}function s(){const e=document.querySelector("[data-back-to-blog]"),t=localStorage.getItem("cameFromFeed");localStorage.removeItem("cameFromFeed"),e?.addEventListener("click",(e=>{t&&history.length>1&&(e.preventDefault(),history.back())}))}function a(){document.querySelector("[data-page-link]")?.addEventListener("click",(async e=>{try{e.preventDefault(),await navigator.clipboard.writeText(window.location.href)}catch(e){console.error("Failed to copy text: ",e)}}))}i(),document.addEventListener("astro:page-load",i),l?document.addEventListener("astro:page-load",s):s(),l?document.addEventListener("astro:page-load",a):a();