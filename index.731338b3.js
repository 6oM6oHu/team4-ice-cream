!function(){var e,s,n,o,t,c,i;e=document.querySelector(".js-menu-container"),s=document.querySelector(".js-menu-button"),n=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),t=document.querySelector(".js-scroll"),c=document.querySelector(".header__mob-menu"),i=function(){e.classList.toggle("is-open"),s.classList.toggle("is-open"),t.classList.toggle("no-scroll")},n.addEventListener("click",i),o.addEventListener("click",i),c.addEventListener("click",(function(){e.classList.remove("is-open"),s.classList.remove("is-open"),t.classList.remove("no-scroll")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(function(n){n.matches&&(e.classList.remove("is-open"),s.classList.remove("is-open"),t.classList.remove("is-open"))}))}();
//# sourceMappingURL=index.731338b3.js.map
