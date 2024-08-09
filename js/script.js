"use strict";

const iconMenu = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
const menu = document.querySelector(".menu");

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    menu.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  });
}

window.addEventListener("click", function (e) {
  if (iconMenu) {
    if (e.clientX <= window.innerWidth * 0.4) {
      iconMenu.classList.remove("_active");
      menuBody.classList.remove("_active");
      menu.classList.remove("_active");
      document.body.classList.remove("_lock");
    }
  }
});

////////////////////////CART////////////////////////

const cartItems = document.querySelector(".cart__items");
const cartButton = document.querySelector(".cart__button");
const cartEmpty = document.querySelector(".cart__empty");

if (cartItems && cartButton) {
  if (cartItems.querySelector(".cart__item") == null) {
    cartEmpty.classList.add("_active");
    cartButton.classList.add("_active");
  } else {
    cartEmpty.classList.remove("_active");
    cartButton.classList.remove("_active");
  }
}
