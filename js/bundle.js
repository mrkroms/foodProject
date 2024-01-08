(()=>{"use strict";const t=function(t){const e=document.querySelector(t);e.classList.add("show"),e.classList.remove("hide"),document.body.style.overflow="hidden"},e=function(t){const e=document.querySelector(t);e.classList.add("hide"),e.classList.remove("show"),document.body.style.overflow=""};window.addEventListener("DOMContentLoaded",(()=>{(function(){const t=document.querySelectorAll(".tabheader__item"),e=document.querySelector(".tabheader__items"),n=document.querySelectorAll(".tabcontent");function o(){n.forEach((t=>{t.classList.add("hide"),t.classList.remove("show","fade")})),t.forEach((t=>t.classList.remove("tabheader__item_active")))}function s(e=0){n[e].classList.add("show","fade"),n[e].classList.remove("hide"),t[e].classList.add("tabheader__item_active")}o(),s(),e.addEventListener("click",(e=>{const n=e.target;n&&n.classList.contains("tabheader__item")&&t.forEach(((t,e)=>{n==t&&(o(),s(e))}))}))})(),function(){const t=document.querySelector(".calculating__result span");let e,n,o,s,a;function c(t,e){document.querySelectorAll(t).forEach((t=>{t.classList.remove(e),t.getAttribute("id")===localStorage.getItem("sex")&&t.classList.add(e),t.getAttribute("data-ratio")===localStorage.getItem("ratio")&&t.classList.add(e)}))}function i(){t.textContent=e&&n&&o&&s&&a?"female"===e?Math.round((447.6+9.2*o+3.1*n-4.3*s)*a):Math.round((88.36+13.4*o+4.8*n-5.7*s)*a):"____"}function r(t,n){const o=document.querySelectorAll(t);o.forEach((t=>t.addEventListener("click",(t=>{t.target.getAttribute("data-ratio")?(a=+t.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+t.target.getAttribute("data-ratio"))):(e=t.target.getAttribute("id"),localStorage.setItem("sex",t.target.getAttribute("id"))),console.log(a,e),o.forEach((t=>t.classList.remove(n))),t.target.classList.add(n),i()}))))}function l(t){const e=document.querySelector(t);e.addEventListener("input",(t=>{switch(e.value.match(/\D/g)?e.style.border="1px solid red":e.style.border="none",e.getAttribute("id")){case"height":n=+e.value;break;case"weight":o=+e.value;break;case"age":s=+e.value}i()}))}localStorage.getItem("sex")?e=localStorage.getItem("sex"):(e="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),i(),r("#gender div","calculating__choose-item_active"),r(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}(),function(){class t{constructor(t,e,n,o,s,a,...c){this.src=t,this.title=e,this.altimg=n,this.descr=o,this.price=s,this.classes=c,this.parent=document.querySelector(a),this.transfer=90,this.changeToRUB()}changeToRUB(){this.price=this.price*this.transfer}render(){const t=document.createElement("div");0===this.classes.length?(this.element="menu__item",t.classList.add(this.element)):this.classes.forEach((e=>t.classList.add(e))),t.innerHTML=`\n            <img src=${this.src} alt=${this.altimg} />\n            <h3 class="menu__item-subtitle">${this.title}</h3>\n            <div class="menu__item-descr">\n               ${this.title} - ${this.descr}\n            </div>\n            <div class="menu__item-divider"></div>\n            <div class="menu__item-price">\n              <div class="menu__item-cost">Цена:</div>\n              <div class="menu__item-total"><span>${this.price}</span> руб/день</div>\n            </div>\n    `,this.parent.append(t)}}(async t=>{const e=await fetch(t);if(!e.ok)throw new Error(`could not fetch ${t}, ststus: ${e.ststus}`);return await e.json()})("http://localhost:3000/menu").then((e=>{e.forEach((({img:e,title:n,altimg:o,descr:s,price:a})=>{new t(e,n,o,s,a,".menu .container").render()}))}))}(),function(n,o){const s=document.querySelector(n);document.querySelectorAll(o).forEach((e=>e.addEventListener("click",(()=>t(n))))),s.addEventListener("click",(t=>{t.target!==s&&""!=t.target.getAttribute("data-close")||e(n)})),document.addEventListener("keydown",(function(t){"Escape"===t.key&&s.classList.contains("show")&&e(n)})),window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight-1&&(t(n),window.removeEventListener("scroll",e))}))}(".modal","[data-modal]"),function(){const t=document.querySelectorAll(".offer__slide"),e=document.querySelector(".offer__slider-prev"),n=document.querySelector(".offer__slider-next");let o=1;const s=document.querySelector("#total"),a=document.querySelector("#current"),c=document.querySelector(".offer__slider-wrapper"),i=document.querySelector(".offer__slider-inner"),r=window.getComputedStyle(c).width;let l=0;const d=document.querySelector(".offer__slider"),u=[];t.length<10?(s.textContent=`0${t.length}`,a.textContent=`0${o}`):(s.textContent=t.length,a.textContent=o),i.style.width=100*t.length+"%",i.style.display="flex",i.style.transition="0.5s all",c.style.overflow="hidden",t.forEach((t=>{t.style.width=r})),d.style.position="relative";const m=document.createElement("ol");m.classList.add("carousel-indicators"),m.style.cssText="\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 15;\n    display: flex;\n    justify-content: center;\n    margin-right: 15%;\n    margin-left: 15%;\n    list-style: none;\n  ",d.append(m);for(let e=0;e<t.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n      box-sizing: content-box;\n      flex: 0 1 auto;\n      border-radius: 100%;\n      width: 10px;\n      height: 10px;\n      margin-right: 3px;\n      margin-left: 3px;\n      cursor: pointer;\n      background-color: #fff;\n      background-clip: padding-box;\n      border-top: 10px solid transparent;\n      border-bottom: 10px solid transparent;\n      opacity: .5;\n      transition: opacity .6s ease;\n    ",0==e&&(t.style.opacity=1),m.append(t),u.push(t)}function h(t){return+t.replace(/\D/g,"")}n.addEventListener("click",(()=>{l==h(r)*(t.length-1)?l=0:l+=h(r),i.style.transform=`translateX(-${l}px)`,o==t.length?o=1:o++,t.length<10?a.textContent=`0${o}`:a.textContent=o,u.forEach((t=>t.style.opacity=".5")),u[o-1].style.opacity=1})),e.addEventListener("click",(()=>{0==l?l=h(r)*(t.length-1):l-=h(r),i.style.transform=`translateX(-${l}px)`,1==o?o=t.length:o--,t.length<10?a.textContent=`0${o}`:a.textContent=o,u.forEach((t=>t.style.opacity=".5")),u[o-1].style.opacity=1})),u.forEach((e=>{e.addEventListener("click",(e=>{const n=e.target.getAttribute("data-slide-to");o=n,l=h(r)*(n-1),i.style.transform=`translateX(-${l}px)`,t.length<10?a.textContent=`0${o}`:a.textContent=o,u.forEach((t=>t.style.opacity=".5")),u[o-1].style.opacity=1}))}))}(),function(){function t(t){return t>=0&&t<10?`0${t}`:t}!function(e,n){document.querySelector(".timer");const o=document.querySelector("#days"),s=document.querySelector("#hours"),a=document.querySelector("#minutes"),c=document.querySelector("#seconds"),i=setInterval(r,1e3);function r(){const e=function(t){let e,n,o,s;const a=Date.parse(t)-Date.parse(new Date);return a<=0?(e=0,n=0,o=0,s=0):(e=Math.floor(a/864e5),n=Math.floor(a/36e5%24),o=Math.floor(a/1e3/60%60),s=Math.floor(a/1e3%60)),{total:a,days:e,hours:n,minutes:o,second:s}}("2024-03-16");o.textContent=t(e.days),s.textContent=t(e.hours),a.textContent=t(e.minutes),c.textContent=t(e.second),e.total<=0&&clearInterval(i)}r()}()}(),function(){document.querySelectorAll("form").forEach((t=>{var e;(e=t).addEventListener("submit",(t=>{t.preventDefault();const s=document.createElement("img");s.src=n.loading,s.style.cssText="\n      display: block;\n      margin: 0 auto;\n      ",e.insertAdjacentElement("afterend",s);const a=new FormData(e);(async(t,e)=>{const n=await fetch("http://localhost:3000/requests",{method:"POST",headers:{"Content-type":"application/json"},body:e});return await n.json()})(0,JSON.stringify(Object.fromEntries(a.entries()))).then((t=>{console.log(t),o(n.success),s.remove()})).catch((()=>o(n.fail))).finally((()=>{e.reset()}))}))}));const n={loading:"icons/spinner.svg",success:"Спасибо! Скоро мы с вами свяжемся",fail:"Что-то пошло не так..."};function o(n){const o=document.querySelector(".modal__dialog");o.classList.add("hide"),t(".modal");const s=document.createElement("div");s.classList.add("modal__dialog"),s.innerHTML=`\n    <div class = "modal__content">\n    <div class = "modal__close" data-close>&times;</div>\n    <div class = "modal__title">${n}</div>\n    </div>\n    `,document.querySelector(".modal").append(s),setTimeout((()=>{s.remove(),o.classList.add("show"),o.classList.remove("hide"),e(".modal")}),4e3)}}()}))})();
//# sourceMappingURL=bundle.js.map