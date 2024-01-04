"use strict";

window.addEventListener("DOMContentLoaded", () => {
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

  // timer js

  const deadline = "2023-12-16";

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

  // modal window v1.0
  const modalWindow = document.querySelector(".modal");
  // const btnCloseModalWindow = document.querySelector(".modal__close");
  const btnOpenModalWindow = document.querySelectorAll("[data-modal]");

  const openModalWindow = function () {
    modalWindow.classList.add("show");
    modalWindow.classList.remove("hide");
    document.body.style.overflow = "hidden";
    //   clearInterval(modalTimer);
  };

  const closeModalWindow = function () {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
    document.body.style.overflow = "";
  };

  btnOpenModalWindow.forEach((button) =>
    button.addEventListener("click", openModalWindow)
  );

  // btnCloseModalWindow.addEventListener("click", closeModalWindow);
  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow || e.target.getAttribute("data-close") == "") {
      closeModalWindow();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && modalWindow.classList.contains("show")) {
      closeModalWindow();
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
      openModalWindow();
      window.removeEventListener("scroll", showModalByScroll);
    }
  }
  window.addEventListener("scroll", showModalByScroll);

  // menu with class es6

  class MenuCard {
    constructor(src, title, alt, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.title = title;
      this.alt = alt;
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
            <img src=${this.src} alt=${this.alt} />
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

  new MenuCard(
    "img/tabs/vegy.jpg",
    'Меню "Фитнес"',
    "vegy",
    "это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Этоабсолютно новый продукт с оптимальной ценой и высоким качеством!",
    15,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/elite.jpg",
    'Меню "Премиум"',
    "elite",
    "мы используем не только красивый дизайн упаковки,но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",
    20,
    ".menu .container",
    "menu__item"
  ).render();

  new MenuCard(
    "img/tabs/post.jpg",
    'Меню "Постное"',
    "post",
    "это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля,овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",
    10,
    ".menu .container",
    "menu__item"
  ).render();

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
      const object = {};
      formsData.forEach((value, key) => {
        object[key] = value;
      });

      postData("server.php", JSON.stringify(object))
        .then((data) => data.text())
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
    openModalWindow();

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
      closeModalWindow();
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

  fetch("http://localhost:3000/menu")
    .then((data) => data.json())
    .then((res) => console.log(res));
});
