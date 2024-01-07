import { getResource } from "../services/services";

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

  getResource("http://localhost:3000/menu").then((data) => {
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

export default cards;
