import { openModalWindow, closeModalWindow } from "./modal";
import { postData } from "../services/services";

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

      postData("http://localhost:3000/requests", json)
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
    openModalWindow(".modal");

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
      closeModalWindow(".modal");
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

export default moduleForms;
