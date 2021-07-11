const buttonBuy = document.querySelectorAll(".button__buy"),
  popupBuy = document.querySelector(".popup__buy"),
  buttonClosePopupBuy = popupBuy.querySelector(".map__close");
for (let e = 0; e < buttonBuy.length; e++)
  buttonBuy[e].addEventListener("click", function (u) {
    u.preventDefault(),
      console.log("всё работает"),
      buttonBuy[e].classList.add("popup__visible"),
      popupBuy.classList.add("popup__visible");
  });
buttonClosePopupBuy.addEventListener("click", function (e) {
  e.preventDefault(), popupBuy.classList.remove("popup__visible");
}),
  window.addEventListener("keydown", function (e) {
    const u = e.key;
    ("ESC" !== u && "Escape" !== u) ||
      popupBuy.classList.remove("popup__visible");
  });
