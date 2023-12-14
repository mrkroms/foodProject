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
});
