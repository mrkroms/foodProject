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

export default modal;
export { closeModalWindow, openModalWindow };
