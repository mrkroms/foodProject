/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/calc.js":
/*!****************************!*\
  !*** ./js/modules/calc.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function calc() {
  //calc kcal

  const result = document.querySelector(".calculating__result span");

  let sex, height, weight, age, ratio;

  if (localStorage.getItem("sex")) {
    sex = localStorage.getItem("sex");
  } else {
    sex = "female";
    localStorage.setItem("sex", "female");
  }

  if (localStorage.getItem("ratio")) {
    ratio = localStorage.getItem("ratio");
  } else {
    ratio = 1.375;
    localStorage.setItem("ratio", 1.375);
  }

  function initLocalSettings(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      elem.classList.remove(activeClass);
      if (elem.getAttribute("id") === localStorage.getItem("sex")) {
        elem.classList.add(activeClass);
      }
      if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
        elem.classList.add(activeClass);
      }
    });
  }

  initLocalSettings("#gender div", "calculating__choose-item_active");
  initLocalSettings(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function calcTotal() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = "____";
      return;
    }

    if (sex === "female") {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }
  calcTotal();

  function getStaticInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) =>
      elem.addEventListener("click", (e) => {
        if (e.target.getAttribute("data-ratio")) {
          ratio = +e.target.getAttribute("data-ratio");
          localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
        } else {
          sex = e.target.getAttribute("id");
          localStorage.setItem("sex", e.target.getAttribute("id"));
        }
        console.log(ratio, sex);

        elements.forEach((elem) => elem.classList.remove(activeClass));
        e.target.classList.add(activeClass);
        calcTotal();
      })
    );
  }

  getStaticInformation("#gender div", "calculating__choose-item_active");
  getStaticInformation(
    ".calculating__choose_big div",
    "calculating__choose-item_active"
  );

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener("input", (e) => {
      if (input.value.match(/\D/g)) {
        input.style.border = "1px solid red";
      } else {
        input.style.border = "none";
      }

      switch (input.getAttribute("id")) {
        case "height":
          height = +input.value;
          break;
        case "weight":
          weight = +input.value;
          break;
        case "age":
          age = +input.value;
          break;
      }
      calcTotal();
    });
  }
  getDynamicInformation("#height");
  getDynamicInformation("#weight");
  getDynamicInformation("#age");
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calc);


/***/ }),

/***/ "./js/modules/cards.js":
/*!*****************************!*\
  !*** ./js/modules/cards.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function cards() {
  // menu with class es6

  class MenuCard {
    constructor(src, title, altimg, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.title = title;
      this.altimg = altimg;
      this.descr = descr;
      this.price = price;
      this.classes = classes;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 90;
      this.changeToRUB();
    }
    changeToRUB() {
      this.price = this.price * this.transfer;
    }
    render() {
      const element = document.createElement("div");
      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      element.innerHTML = `
            <img src=${this.src} alt=${this.altimg} />
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
               ${this.title} - ${this.descr}
            </div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
              <div class="menu__item-cost">Цена:</div>
              <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
            </div>
    `;
      this.parent.append(element);
    }
  }

  // const getResource = async (url) => {
  //   const res = await fetch(url);

  //   if (!res.ok) {
  //     throw new Error(`could not fetch ${url}, ststus: ${res.ststus}`);
  //   }

  //   return await res.json();
  // };

  (0,_services_services__WEBPACK_IMPORTED_MODULE_0__.getResource)("http://localhost:3000/menu").then((data) => {
    data.forEach(({ img, title, altimg, descr, price }) => {
      new MenuCard(
        img,
        title,
        altimg,
        descr,
        price,
        ".menu .container"
      ).render();
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cards);


/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeModalWindow: () => (/* binding */ closeModalWindow),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   openModalWindow: () => (/* binding */ openModalWindow)
/* harmony export */ });
const openModalWindow = function (modalWindowSelector) {
  const modalWindow = document.querySelector(modalWindowSelector);
  modalWindow.classList.add("show");
  modalWindow.classList.remove("hide");
  document.body.style.overflow = "hidden";
  //   clearInterval(modalTimer);
};

const closeModalWindow = function (modalWindowSelector) {
  const modalWindow = document.querySelector(modalWindowSelector);
  modalWindow.classList.add("hide");
  modalWindow.classList.remove("show");
  document.body.style.overflow = "";
};

function modal(modalWindowSelector, btnOpenModalWindowSelector) {
  // modal window v1.0
  const modalWindow = document.querySelector(modalWindowSelector);
  // const btnCloseModalWindow = document.querySelector(".modal__close");
  const btnOpenModalWindow = document.querySelectorAll(
    btnOpenModalWindowSelector
  );

  //   const openModalWindow = function () {
  //     modalWindow.classList.add("show");
  //     modalWindow.classList.remove("hide");
  //     document.body.style.overflow = "hidden";
  //     //   clearInterval(modalTimer);
  //   };

  //   const closeModalWindow = function () {
  //     modalWindow.classList.add("hide");
  //     modalWindow.classList.remove("show");
  //     document.body.style.overflow = "";
  //   };

  btnOpenModalWindow.forEach((button) =>
    button.addEventListener("click", () => openModalWindow(modalWindowSelector))
  );

  // btnCloseModalWindow.addEventListener("click", closeModalWindow);
  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow || e.target.getAttribute("data-close") == "") {
      closeModalWindow(modalWindowSelector);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalWindow.classList.contains("show")) {
      closeModalWindow(modalWindowSelector);
    }
  });

  //show modalwindow after 3sec
  // const modalTimer = setTimeout(openModalWindow, 3000);

  //show modal window and page

  function showModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight - 1
    ) {
      openModalWindow(modalWindowSelector);
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);



/***/ }),

/***/ "./js/modules/moduleForms.js":
/*!***********************************!*\
  !*** ./js/modules/moduleForms.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");



function moduleForms() {
  // POST request XMLHttpRequest

  const forms = document.querySelectorAll("form");

  forms.forEach((item) => {
    bindPostData(item);
  });

  const message = {
    loading: "icons/spinner.svg",
    success: "Спасибо! Скоро мы с вами свяжемся",
    fail: "Что-то пошло не так...",
  };

  // const postData = async (url, data) => {
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: data,
  //   });
  //   return await res.json();
  // };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const statusMessage = document.createElement("img");
      statusMessage.src = message.loading;
      statusMessage.style.cssText = `
      display: block;
      margin: 0 auto;
      `;
      // form.append(statusMessage);
      form.insertAdjacentElement("afterend", statusMessage);

      // const request = new XMLHttpRequest();
      // request.open("POST", "server.php");

      // request.setRequestHeader(
      //   "content-type",
      //   "application/json",
      //   "charset=utf-8"
      // );

      // //formDate format to json
      const formsData = new FormData(form);

      // const object = {};
      // formsData.forEach((value, key) => {
      //   object[key] = value;
      // });

      const json = JSON.stringify(Object.fromEntries(formsData.entries()));

      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.postData)("http://localhost:3000/requests", json)
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessage.remove();
        })
        .catch(() => showThanksModal(message.fail))
        .finally(() => {
          form.reset();
        });

      // request.addEventListener("load", () => {
      //   if (request.status === 200) {
      //     console.log(request.response);
      //     showThanksModal(message.success);
      //     form.reset();

      //     statusMessage.remove();
      //   } else {
      //     showThanksModal(message.fail);
      //   }
      // });
    });
  }
  function showThanksModal(message) {
    const prevModalDialog = document.querySelector(".modal__dialog");
    prevModalDialog.classList.add("hide");
    (0,_modal__WEBPACK_IMPORTED_MODULE_0__.openModalWindow)(".modal");

    const thanksModal = document.createElement("div");
    thanksModal.classList.add("modal__dialog");
    thanksModal.innerHTML = `
    <div class = "modal__content">
    <div class = "modal__close" data-close>&times;</div>
    <div class = "modal__title">${message}</div>
    </div>
    `;
    document.querySelector(".modal").append(thanksModal);
    setTimeout(() => {
      thanksModal.remove();
      prevModalDialog.classList.add("show");
      prevModalDialog.classList.remove("hide");
      (0,_modal__WEBPACK_IMPORTED_MODULE_0__.closeModalWindow)(".modal");
    }, 4000);
  }
  // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // // POST запрос
  // fetch("https://jsonplaceholder.typicode.com/posts", {
  //   method: "POST",
  //   body: JSON.stringify({ name: "Ivan", age: 19 }),
  //   headers: {
  //     "Content-type": "application/json",
  //   },
  // })
  //   .then((response) => response.json())
  //   .then((json) => console.log(json));

  // fetch("http://localhost:3000/menu")
  //   .then((data) => data.json())
  //   .then((res) => console.log(res));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (moduleForms);


/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slider() {
  // slider
  const slides = document.querySelectorAll(".offer__slide");
  const prev = document.querySelector(".offer__slider-prev");
  const next = document.querySelector(".offer__slider-next");
  let slideIndex = 1;

  const total = document.querySelector("#total");
  const current = document.querySelector("#current");

  // showSlide(slideIndex);

  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  // } else {
  //   total.textContent = slides.length;
  // }

  // function showSlide(n) {
  //   if (n > slides.length) {
  //     slideIndex = 1;
  //   }
  //   if (n < 1) {
  //     slideIndex = slides.length;
  //   }
  //   slides.forEach((item) => (item.style.display = "none"));
  //   slides[slideIndex - 1].style.display = "block";

  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  // }

  // function plusSlides(n) {
  //   showSlide((slideIndex += n));
  // }

  // prev.addEventListener("click", () => {
  //   plusSlides(-1);
  // });

  // next.addEventListener("click", () => {
  //   plusSlides(1);
  // });

  // slider carousel

  const slidesWrapper = document.querySelector(".offer__slider-wrapper");
  const slidesField = document.querySelector(".offer__slider-inner");
  const width = window.getComputedStyle(slidesWrapper).width;
  let offset = 0;
  // dot
  const slider = document.querySelector(".offer__slider");
  const dots = [];

  if (slides.length < 10) {
    total.textContent = `0${slides.length}`;
    current.textContent = `0${slideIndex}`;
  } else {
    total.textContent = slides.length;
    current.textContent = slideIndex;
  }

  slidesField.style.width = 100 * slides.length + "%";
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.5s all";

  slidesWrapper.style.overflow = "hidden";

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  // creat dot element
  const indicators = document.createElement("ol");
  indicators.classList.add("carousel-indicators");
  indicators.style.cssText = `
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 15;
    display: flex;
    justify-content: center;
    margin-right: 15%;
    margin-left: 15%;
    list-style: none;
  `;
  slider.append(indicators);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      border-radius: 100%;
      width: 10px;
      height: 10px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
    `;

    if (i == 0) {
      dot.style.opacity = 1;
    }

    indicators.append(dot);
    dots.push(dot);
  }

  function deleteNotDigits(str) {
    return +str.replace(/\D/g, "");
  }

  next.addEventListener("click", () => {
    if (offset == deleteNotDigits(width) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == slides.length) {
      slideIndex = 1;
    } else {
      slideIndex++;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  prev.addEventListener("click", () => {
    if (offset == 0) {
      offset = deleteNotDigits(width) * (slides.length - 1);
    } else {
      offset -= deleteNotDigits(width);
    }

    slidesField.style.transform = `translateX(-${offset}px)`;

    if (slideIndex == 1) {
      slideIndex = slides.length;
    } else {
      slideIndex--;
    }

    if (slides.length < 10) {
      current.textContent = `0${slideIndex}`;
    } else {
      current.textContent = slideIndex;
    }

    dots.forEach((dot) => (dot.style.opacity = ".5"));
    dots[slideIndex - 1].style.opacity = 1;
  });

  dots.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      const slideTo = e.target.getAttribute("data-slide-to");

      slideIndex = slideTo;

      offset = deleteNotDigits(width) * (slideTo - 1);

      slidesField.style.transform = `translateX(-${offset}px)`;

      if (slides.length < 10) {
        current.textContent = `0${slideIndex}`;
      } else {
        current.textContent = slideIndex;
      }

      dots.forEach((dot) => (dot.style.opacity = ".5"));
      dots[slideIndex - 1].style.opacity = 1;
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);


/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
  // add tabs js
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsParent = document.querySelector(".tabheader__items");
  const tabContents = document.querySelectorAll(".tabcontent");

  //inline style
  //   function hideTabContent() {
  //     tabContents.forEach((item) => (item.style.display = "none"));
  //     tabs.forEach((tab) => tab.classList.remove("tabheader__item_active"));
  //   }

  //with css class

  function hideTabContent() {
    tabContents.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((tab) => tab.classList.remove("tabheader__item_active"));
  }

  //inline style
  //   function showTabContent(i = 0) {
  //     tabContents[i].style.display = "block";
  //     tabs[i].classList.add("tabheader__item_active");
  //   }

  // with css class

  function showTabContent(i = 0) {
    tabContents[i].classList.add("show", "fade");
    tabContents[i].classList.remove("hide");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabsParent.addEventListener("click", (e) => {
    const target = e.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
  // timer js

  const deadline = "2024-03-16";

  //function betwen deadline and time now

  function getTimeRemaining(endtime) {
    let days, hours, minutes, second;
    const t = Date.parse(endtime) - Date.parse(new Date());
    if (t <= 0) {
      (days = 0), (hours = 0), (minutes = 0), (second = 0);
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / 1000 / 60) % 60);
      second = Math.floor((t / 1000) % 60);
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      second: second,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setLock(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = document.querySelector("#days");
    const hours = document.querySelector("#hours");
    const minutes = document.querySelector("#minutes");
    const seconds = document.querySelector("#seconds");

    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock() {
      const t = getTimeRemaining(endtime);
      days.textContent = getZero(t.days);
      hours.textContent = getZero(t.hours);
      minutes.textContent = getZero(t.minutes);
      seconds.textContent = getZero(t.second);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }
  setLock(".timer", deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);


/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getResource: () => (/* binding */ getResource),
/* harmony export */   postData: () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: data,
  });
  return await res.json();
};

const getResource = async (url) => {
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`could not fetch ${url}, ststus: ${res.ststus}`);
  }

  return await res.json();
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_calc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/calc */ "./js/modules/calc.js");
/* harmony import */ var _modules_cards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/cards */ "./js/modules/cards.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_moduleForms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/moduleForms */ "./js/modules/moduleForms.js");










window.addEventListener("DOMContentLoaded", () => {
  //module

  (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
  (0,_modules_calc__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_modules_cards__WEBPACK_IMPORTED_MODULE_2__["default"])();
  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__["default"])(".modal", "[data-modal]");
  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_4__["default"])();
  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_5__["default"])();
  (0,_modules_moduleForms__WEBPACK_IMPORTED_MODULE_6__["default"])();

  // // add tabs js
  // const tabs = document.querySelectorAll(".tabheader__item");
  // const tabsParent = document.querySelector(".tabheader__items");
  // const tabContents = document.querySelectorAll(".tabcontent");
  // //inline style
  // //   function hideTabContent() {
  // //     tabContents.forEach((item) => (item.style.display = "none"));
  // //     tabs.forEach((tab) => tab.classList.remove("tabheader__item_active"));
  // //   }
  // //with css class
  // function hideTabContent() {
  //   tabContents.forEach((item) => {
  //     item.classList.add("hide");
  //     item.classList.remove("show", "fade");
  //   });
  //   tabs.forEach((tab) => tab.classList.remove("tabheader__item_active"));
  // }
  // //inline style
  // //   function showTabContent(i = 0) {
  // //     tabContents[i].style.display = "block";
  // //     tabs[i].classList.add("tabheader__item_active");
  // //   }
  // // with css class
  // function showTabContent(i = 0) {
  //   tabContents[i].classList.add("show", "fade");
  //   tabContents[i].classList.remove("hide");
  //   tabs[i].classList.add("tabheader__item_active");
  // }
  // hideTabContent();
  // showTabContent();
  // tabsParent.addEventListener("click", (e) => {
  //   const target = e.target;
  //   if (target && target.classList.contains("tabheader__item")) {
  //     tabs.forEach((item, i) => {
  //       if (target == item) {
  //         hideTabContent();
  //         showTabContent(i);
  //       }
  //     });
  //   }
  // });
  // // timer js
  // const deadline = "2023-12-16";
  // //function betwen deadline and time now
  // function getTimeRemaining(endtime) {
  //   let days, hours, minutes, second;
  //   const t = Date.parse(endtime) - Date.parse(new Date());
  //   if (t <= 0) {
  //     (days = 0), (hours = 0), (minutes = 0), (second = 0);
  //   } else {
  //     days = Math.floor(t / (1000 * 60 * 60 * 24));
  //     hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  //     minutes = Math.floor((t / 1000 / 60) % 60);
  //     second = Math.floor((t / 1000) % 60);
  //   }
  //   return {
  //     total: t,
  //     days: days,
  //     hours: hours,
  //     minutes: minutes,
  //     second: second,
  //   };
  // }
  // function getZero(num) {
  //   if (num >= 0 && num < 10) {
  //     return `0${num}`;
  //   } else {
  //     return num;
  //   }
  // }
  // function setLock(selector, endtime) {
  //   const timer = document.querySelector(selector);
  //   const days = document.querySelector("#days");
  //   const hours = document.querySelector("#hours");
  //   const minutes = document.querySelector("#minutes");
  //   const seconds = document.querySelector("#seconds");
  //   const timeInterval = setInterval(updateClock, 1000);
  //   updateClock();
  //   function updateClock() {
  //     const t = getTimeRemaining(endtime);
  //     days.textContent = getZero(t.days);
  //     hours.textContent = getZero(t.hours);
  //     minutes.textContent = getZero(t.minutes);
  //     seconds.textContent = getZero(t.second);
  //     if (t.total <= 0) {
  //       clearInterval(timeInterval);
  //     }
  //   }
  // }
  // setLock(".timer", deadline);
  // // modal window v1.0
  // const modalWindow = document.querySelector(".modal");
  // // const btnCloseModalWindow = document.querySelector(".modal__close");
  // const btnOpenModalWindow = document.querySelectorAll("[data-modal]");
  // const openModalWindow = function () {
  //   modalWindow.classList.add("show");
  //   modalWindow.classList.remove("hide");
  //   document.body.style.overflow = "hidden";
  //   //   clearInterval(modalTimer);
  // };
  // const closeModalWindow = function () {
  //   modalWindow.classList.add("hide");
  //   modalWindow.classList.remove("show");
  //   document.body.style.overflow = "";
  // };
  // btnOpenModalWindow.forEach((button) =>
  //   button.addEventListener("click", openModalWindow)
  // );
  // // btnCloseModalWindow.addEventListener("click", closeModalWindow);
  // modalWindow.addEventListener("click", (e) => {
  //   if (e.target === modalWindow || e.target.getAttribute("data-close") == "") {
  //     closeModalWindow();
  //   }
  // });
  // document.addEventListener("keydown", function (e) {
  //   if (e.key === "Escape" && modalWindow.classList.contains("show")) {
  //     closeModalWindow();
  //   }
  // });
  // //show modalwindow after 3sec
  // // const modalTimer = setTimeout(openModalWindow, 3000);
  // //show modal window and page
  // function showModalByScroll() {
  //   if (
  //     window.pageYOffset + document.documentElement.clientHeight >=
  //     document.documentElement.scrollHeight - 1
  //   ) {
  //     openModalWindow();
  //     window.removeEventListener("scroll", showModalByScroll);
  //   }
  // }
  // window.addEventListener("scroll", showModalByScroll);
  // // menu with class es6
  // class MenuCard {
  //   constructor(src, title, altimg, descr, price, parentSelector, ...classes) {
  //     this.src = src;
  //     this.title = title;
  //     this.altimg = altimg;
  //     this.descr = descr;
  //     this.price = price;
  //     this.classes = classes;
  //     this.parent = document.querySelector(parentSelector);
  //     this.transfer = 90;
  //     this.changeToRUB();
  //   }
  //   changeToRUB() {
  //     this.price = this.price * this.transfer;
  //   }
  //   render() {
  //     const element = document.createElement("div");
  //     if (this.classes.length === 0) {
  //       this.element = "menu__item";
  //       element.classList.add(this.element);
  //     } else {
  //       this.classes.forEach((className) => element.classList.add(className));
  //     }
  //     element.innerHTML = `
  //           <img src=${this.src} alt=${this.altimg} />
  //           <h3 class="menu__item-subtitle">${this.title}</h3>
  //           <div class="menu__item-descr">
  //              ${this.title} - ${this.descr}
  //           </div>
  //           <div class="menu__item-divider"></div>
  //           <div class="menu__item-price">
  //             <div class="menu__item-cost">Цена:</div>
  //             <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
  //           </div>
  //   `;
  //     this.parent.append(element);
  //   }
  // }
  // const getResource = async (url) => {
  //   const res = await fetch(url);
  //   if (!res.ok) {
  //     throw new Error(`could not fetch ${url}, ststus: ${res.ststus}`);
  //   }
  //   return await res.json();
  // };
  // getResource("http://localhost:3000/menu").then((data) => {
  //   data.forEach(({ img, title, altimg, descr, price }) => {
  //     new MenuCard(
  //       img,
  //       title,
  //       altimg,
  //       descr,
  //       price,
  //       ".menu .container"
  //     ).render();
  //   });
  // });
  //creat card without constructor
  // getResource("http://localhost:3000/menu").then((data) => {
  //   createCard(data);
  // });
  // function createCard(data) {
  //   data.forEach(({ img, title, altimg, descr, price }) => {
  //     const element = document.createElement("div");
  //     element.classList.add("menu__item");
  //     element.innerHTML = `
  //           <img src=${img} alt=${altimg} />
  //           <h3 class="menu__item-subtitle">${title}</h3>
  //           <div class="menu__item-descr">
  //              ${title} - ${descr}
  //           </div>
  //           <div class="menu__item-divider"></div>
  //           <div class="menu__item-price">
  //             <div class="menu__item-cost">Цена:</div>
  //             <div class="menu__item-total"><span>${price}</span> руб/день</div>
  //           </div>
  //   `;
  //     document.querySelector(".menu .container").append(element);
  //   });
  // }
  // new MenuCard(
  //   "img/tabs/vegy.jpg",
  //   'Меню "Фитнес"',
  //   "vegy",
  //   "это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Этоабсолютно новый продукт с оптимальной ценой и высоким качеством!",
  //   15,
  //   ".menu .container",
  //   "menu__item"
  // ).render();
  // new MenuCard(
  //   "img/tabs/elite.jpg",
  //   'Меню "Премиум"',
  //   "elite",
  //   "мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
  //   20,
  //   ".menu .container",
  //   "menu__item"
  // ).render();
  // new MenuCard(
  //   "img/tabs/post.jpg",
  //   'Меню "Постное"',
  //   "post",
  //   "это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
  //   10,
  //   ".menu .container",
  //   "menu__item"
  // ).render();
  // // POST request XMLHttpRequest
  // const forms = document.querySelectorAll("form");
  // forms.forEach((item) => {
  //   bindPostData(item);
  // });
  // const message = {
  //   loading: "icons/spinner.svg",
  //   success: "Спасибо! Скоро мы с вами свяжемся",
  //   fail: "Что-то пошло не так...",
  // };
  // const postData = async (url, data) => {
  //   const res = await fetch(url, {
  //     method: "POST",
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //     body: data,
  //   });
  //   return await res.json();
  // };
  // function bindPostData(form) {
  //   form.addEventListener("submit", (e) => {
  //     e.preventDefault();
  //     const statusMessage = document.createElement("img");
  //     statusMessage.src = message.loading;
  //     statusMessage.style.cssText = `
  //     display: block;
  //     margin: 0 auto;
  //     `;
  //     // form.append(statusMessage);
  //     form.insertAdjacentElement("afterend", statusMessage);
  //     // const request = new XMLHttpRequest();
  //     // request.open("POST", "server.php");
  //     // request.setRequestHeader(
  //     //   "content-type",
  //     //   "application/json",
  //     //   "charset=utf-8"
  //     // );
  //     // //formDate format to json
  //     const formsData = new FormData(form);
  //     // const object = {};
  //     // formsData.forEach((value, key) => {
  //     //   object[key] = value;
  //     // });
  //     const json = JSON.stringify(Object.fromEntries(formsData.entries()));
  //     postData("http://localhost:3000/requests", json)
  //       .then((data) => {
  //         console.log(data);
  //         showThanksModal(message.success);
  //         statusMessage.remove();
  //       })
  //       .catch(() => showThanksModal(message.fail))
  //       .finally(() => {
  //         form.reset();
  //       });
  //     // request.addEventListener("load", () => {
  //     //   if (request.status === 200) {
  //     //     console.log(request.response);
  //     //     showThanksModal(message.success);
  //     //     form.reset();
  //     //     statusMessage.remove();
  //     //   } else {
  //     //     showThanksModal(message.fail);
  //     //   }
  //     // });
  //   });
  // }
  // function showThanksModal(message) {
  //   const prevModalDialog = document.querySelector(".modal__dialog");
  //   prevModalDialog.classList.add("hide");
  //   openModalWindow();
  //   const thanksModal = document.createElement("div");
  //   thanksModal.classList.add("modal__dialog");
  //   thanksModal.innerHTML = `
  //   <div class = "modal__content">
  //   <div class = "modal__close" data-close>&times;</div>
  //   <div class = "modal__title">${message}</div>
  //   </div>
  //   `;
  //   document.querySelector(".modal").append(thanksModal);
  //   setTimeout(() => {
  //     thanksModal.remove();
  //     prevModalDialog.classList.add("show");
  //     prevModalDialog.classList.remove("hide");
  //     closeModalWindow();
  //   }, 4000);
  // }
  // // fetch("https://jsonplaceholder.typicode.com/todos/1")
  // //   .then((response) => response.json())
  // //   .then((json) => console.log(json));
  // // // POST запрос
  // // fetch("https://jsonplaceholder.typicode.com/posts", {
  // //   method: "POST",
  // //   body: JSON.stringify({ name: "Ivan", age: 19 }),
  // //   headers: {
  // //     "Content-type": "application/json",
  // //   },
  // // })
  // //   .then((response) => response.json())
  // //   .then((json) => console.log(json));
  // fetch("http://localhost:3000/menu")
  //   .then((data) => data.json())
  //   .then((res) => console.log(res));
  // // slider
  // const slides = document.querySelectorAll(".offer__slide");
  // const prev = document.querySelector(".offer__slider-prev");
  // const next = document.querySelector(".offer__slider-next");
  // let slideIndex = 1;
  // const total = document.querySelector("#total");
  // const current = document.querySelector("#current");
  // // showSlide(slideIndex);
  // // if (slides.length < 10) {
  // //   total.textContent = `0${slides.length}`;
  // // } else {
  // //   total.textContent = slides.length;
  // // }
  // // function showSlide(n) {
  // //   if (n > slides.length) {
  // //     slideIndex = 1;
  // //   }
  // //   if (n < 1) {
  // //     slideIndex = slides.length;
  // //   }
  // //   slides.forEach((item) => (item.style.display = "none"));
  // //   slides[slideIndex - 1].style.display = "block";
  // //   if (slides.length < 10) {
  // //     current.textContent = `0${slideIndex}`;
  // //   } else {
  // //     current.textContent = slideIndex;
  // //   }
  // // }
  // // function plusSlides(n) {
  // //   showSlide((slideIndex += n));
  // // }
  // // prev.addEventListener("click", () => {
  // //   plusSlides(-1);
  // // });
  // // next.addEventListener("click", () => {
  // //   plusSlides(1);
  // // });
  // // slider carousel
  // const slidesWrapper = document.querySelector(".offer__slider-wrapper");
  // const slidesField = document.querySelector(".offer__slider-inner");
  // const width = window.getComputedStyle(slidesWrapper).width;
  // let offset = 0;
  // // dot
  // const slider = document.querySelector(".offer__slider");
  // const dots = [];
  // if (slides.length < 10) {
  //   total.textContent = `0${slides.length}`;
  //   current.textContent = `0${slideIndex}`;
  // } else {
  //   total.textContent = slides.length;
  //   current.textContent = slideIndex;
  // }
  // slidesField.style.width = 100 * slides.length + "%";
  // slidesField.style.display = "flex";
  // slidesField.style.transition = "0.5s all";
  // slidesWrapper.style.overflow = "hidden";
  // slides.forEach((slide) => {
  //   slide.style.width = width;
  // });
  // slider.style.position = "relative";
  // // creat dot element
  // const indicators = document.createElement("ol");
  // indicators.classList.add("carousel-indicators");
  // indicators.style.cssText = `
  //   position: absolute;
  //   right: 0;
  //   bottom: 0;
  //   left: 0;
  //   z-index: 15;
  //   display: flex;
  //   justify-content: center;
  //   margin-right: 15%;
  //   margin-left: 15%;
  //   list-style: none;
  // `;
  // slider.append(indicators);
  // for (let i = 0; i < slides.length; i++) {
  //   const dot = document.createElement("li");
  //   dot.setAttribute("data-slide-to", i + 1);
  //   dot.style.cssText = `
  //     box-sizing: content-box;
  //     flex: 0 1 auto;
  //     border-radius: 100%;
  //     width: 10px;
  //     height: 10px;
  //     margin-right: 3px;
  //     margin-left: 3px;
  //     cursor: pointer;
  //     background-color: #fff;
  //     background-clip: padding-box;
  //     border-top: 10px solid transparent;
  //     border-bottom: 10px solid transparent;
  //     opacity: .5;
  //     transition: opacity .6s ease;
  //   `;
  //   if (i == 0) {
  //     dot.style.opacity = 1;
  //   }
  //   indicators.append(dot);
  //   dots.push(dot);
  // }
  // function deleteNotDigits(str) {
  //   return +str.replace(/\D/g, "");
  // }
  // next.addEventListener("click", () => {
  //   if (offset == deleteNotDigits(width) * (slides.length - 1)) {
  //     offset = 0;
  //   } else {
  //     offset += deleteNotDigits(width);
  //   }
  //   slidesField.style.transform = `translateX(-${offset}px)`;
  //   if (slideIndex == slides.length) {
  //     slideIndex = 1;
  //   } else {
  //     slideIndex++;
  //   }
  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  //   dots.forEach((dot) => (dot.style.opacity = ".5"));
  //   dots[slideIndex - 1].style.opacity = 1;
  // });
  // prev.addEventListener("click", () => {
  //   if (offset == 0) {
  //     offset = deleteNotDigits(width) * (slides.length - 1);
  //   } else {
  //     offset -= deleteNotDigits(width);
  //   }
  //   slidesField.style.transform = `translateX(-${offset}px)`;
  //   if (slideIndex == 1) {
  //     slideIndex = slides.length;
  //   } else {
  //     slideIndex--;
  //   }
  //   if (slides.length < 10) {
  //     current.textContent = `0${slideIndex}`;
  //   } else {
  //     current.textContent = slideIndex;
  //   }
  //   dots.forEach((dot) => (dot.style.opacity = ".5"));
  //   dots[slideIndex - 1].style.opacity = 1;
  // });
  // dots.forEach((dot) => {
  //   dot.addEventListener("click", (e) => {
  //     const slideTo = e.target.getAttribute("data-slide-to");
  //     slideIndex = slideTo;
  //     offset = deleteNotDigits(width) * (slideTo - 1);
  //     slidesField.style.transform = `translateX(-${offset}px)`;
  //     if (slides.length < 10) {
  //       current.textContent = `0${slideIndex}`;
  //     } else {
  //       current.textContent = slideIndex;
  //     }
  //     dots.forEach((dot) => (dot.style.opacity = ".5"));
  //     dots[slideIndex - 1].style.opacity = 1;
  //   });
  // });
  // //calc kcal
  // const result = document.querySelector(".calculating__result span");
  // let sex, height, weight, age, ratio;
  // if (localStorage.getItem("sex")) {
  //   sex = localStorage.getItem("sex");
  // } else {
  //   sex = "female";
  //   localStorage.setItem("sex", "female");
  // }
  // if (localStorage.getItem("ratio")) {
  //   ratio = localStorage.getItem("ratio");
  // } else {
  //   ratio = 1.375;
  //   localStorage.setItem("ratio", 1.375);
  // }
  // function initLocalSettings(selector, activeClass) {
  //   const elements = document.querySelectorAll(selector);
  //   elements.forEach((elem) => {
  //     elem.classList.remove(activeClass);
  //     if (elem.getAttribute("id") === localStorage.getItem("sex")) {
  //       elem.classList.add(activeClass);
  //     }
  //     if (elem.getAttribute("data-ratio") === localStorage.getItem("ratio")) {
  //       elem.classList.add(activeClass);
  //     }
  //   });
  // }
  // initLocalSettings("#gender div", "calculating__choose-item_active");
  // initLocalSettings(
  //   ".calculating__choose_big div",
  //   "calculating__choose-item_active"
  // );
  // function calcTotal() {
  //   if (!sex || !height || !weight || !age || !ratio) {
  //     result.textContent = "____";
  //     return;
  //   }
  //   if (sex === "female") {
  //     result.textContent = Math.round(
  //       (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
  //     );
  //   } else {
  //     result.textContent = Math.round(
  //       (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
  //     );
  //   }
  // }
  // calcTotal();
  // function getStaticInformation(selector, activeClass) {
  //   const elements = document.querySelectorAll(selector);
  //   elements.forEach((elem) =>
  //     elem.addEventListener("click", (e) => {
  //       if (e.target.getAttribute("data-ratio")) {
  //         ratio = +e.target.getAttribute("data-ratio");
  //         localStorage.setItem("ratio", +e.target.getAttribute("data-ratio"));
  //       } else {
  //         sex = e.target.getAttribute("id");
  //         localStorage.setItem("sex", e.target.getAttribute("id"));
  //       }
  //       console.log(ratio, sex);
  //       elements.forEach((elem) => elem.classList.remove(activeClass));
  //       e.target.classList.add(activeClass);
  //       calcTotal();
  //     })
  //   );
  // }
  // getStaticInformation("#gender div", "calculating__choose-item_active");
  // getStaticInformation(
  //   ".calculating__choose_big div",
  //   "calculating__choose-item_active"
  // );
  // function getDynamicInformation(selector) {
  //   const input = document.querySelector(selector);
  //   input.addEventListener("input", (e) => {
  //     if (input.value.match(/\D/g)) {
  //       input.style.border = "1px solid red";
  //     } else {
  //       input.style.border = "none";
  //     }
  //     switch (input.getAttribute("id")) {
  //       case "height":
  //         height = +input.value;
  //         break;
  //       case "weight":
  //         weight = +input.value;
  //         break;
  //       case "age":
  //         age = +input.value;
  //         break;
  //     }
  //     calcTotal();
  //   });
  // }
  // getDynamicInformation("#height");
  // getDynamicInformation("#weight");
  // getDynamicInformation("#age");
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map