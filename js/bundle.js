!function(e){var t={};function n(o){if(t[o])return t[o].exports;var s=t[o]={i:o,l:!1,exports:{}};return e[o].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)n.d(o,s,function(t){return e[t]}.bind(null,s));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);new Swiper(".swiper",{Loop:!0,pagination:{el:".swiper-pagination",type:"bullets",clickable:!0},slidesPerView:"auto",slidesOffsetBefore:5,spaceBetween:16}),window.matchMedia("(max-width: 767px)");var o=document.querySelector(".btn__more"),s=document.querySelectorAll(".brand__button").length;o.addEventListener("click",(function(){"Скрыть"!=o.textContent?(o.textContent="Скрыть",Array.from(document.querySelector(".brand__Navigation").children).slice(0,s).forEach((function(e){return e.classList.add("is-visible")}))):(o.textContent="Показать еще",Array.from(document.querySelector(".brand__Navigation").children).slice(0,s).forEach((function(e){return e.classList.remove("is-visible")})))}));var d=document.querySelector(".serviceBtn__more"),i=document.querySelectorAll(".service__button").length;d.addEventListener("click",(function(){"Скрыть"!=d.textContent?(d.textContent="Скрыть",Array.from(document.querySelector(".service__Navigation").children).slice(0,i).forEach((function(e){return e.classList.add("is-visible")}))):(d.textContent="Показать еще",Array.from(document.querySelector(".service__Navigation").children).slice(0,i).forEach((function(e){return e.classList.remove("is-visible")})))})),document.getElementById("intro_btn").onclick=function(){document.getElementById("main").classList.add("open__Side","open__Side1"),document.getElementById("mask").classList.add("mask__Side"),document.getElementById("closeSide").classList.add("Close__main")},document.getElementById("close").onclick=function(){document.getElementById("main").classList.remove("open__Side","open__Side1"),document.getElementById("mask").classList.remove("mask__Side"),document.getElementById("closeSide").classList.remove("Close__main")},document.getElementById("mask").onclick=function(){document.getElementById("main").classList.remove("open__Side","open__Side1"),document.getElementById("mask").classList.remove("mask__Side"),document.getElementById("closeSide").classList.remove("Close__main")},document.getElementById("chat").onclick=function(){document.getElementById("mainRever").classList.add("open__Rever","open__Rever1"),document.getElementById("maskRever").classList.add("mask__Side"),document.getElementById("main").classList.remove("open__Side","open__Side1"),document.getElementById("mask").classList.remove("mask__Side"),document.getElementById("closeSide").classList.add("Close__main")},document.getElementById("closeRever").onclick=function(){document.getElementById("mainRever").classList.remove("open__Rever","open__Rever1"),document.getElementById("maskRever").classList.remove("mask__Side"),document.getElementById("main").classList.add("open__Side","open__Side1"),document.getElementById("mask").classList.add("mask__Side")},document.getElementById("maskRever").onclick=function(){document.getElementById("mainRever").classList.remove("open__Rever","open__Rever1"),document.getElementById("maskRever").classList.remove("mask__Side"),document.getElementById("main").classList.add("open__Side","open__Side1"),document.getElementById("mask").classList.add("mask__Side")},document.getElementById("call").onclick=function(){document.getElementById("mainCall").classList.add("open__Call","open__Call1"),document.getElementById("maskCall").classList.add("mask__Side"),document.getElementById("main").classList.remove("open__Side","open__Side1"),document.getElementById("mask").classList.remove("mask__Side"),document.getElementById("closeSide").classList.add("Close__main")},document.getElementById("closeCall").onclick=function(){document.getElementById("mainCall").classList.remove("open__Call","open__Call1"),document.getElementById("maskCall").classList.remove("mask__Side"),document.getElementById("main").classList.add("open__Side","open__Side1"),document.getElementById("mask").classList.add("mask__Side")},document.getElementById("maskCall").onclick=function(){document.getElementById("mainCall").classList.remove("open__Call","open__Call1"),document.getElementById("maskCall").classList.remove("mask__Side"),document.getElementById("main").classList.add("open__Side","open__Side1"),document.getElementById("mask").classList.add("mask__Side")};n(1);console.log("Works!")}]);
//# sourceMappingURL=bundle.js.map