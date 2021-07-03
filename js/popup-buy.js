const buttonBuy = document.querySelectorAll(".button__buy");
const popupBuy = document.querySelector(".popup__buy");
const buttonClosePopupBuy = popupBuy.querySelector(".map__close");

for (let showButtons = 0; showButtons < buttonBuy.length; showButtons++) {
  buttonBuy[showButtons].addEventListener("click", function (event) {
    event.preventDefault();
    console.log("всё работает");
    buttonBuy[showButtons].classList.add("popup__visible");
    popupBuy.classList.add("popup__visible");
  });
}

buttonClosePopupBuy.addEventListener("click", function (event) {
  event.preventDefault();
  popupBuy.classList.remove("popup__visible");
});

window.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "ESC" || key === "Escape") {
    popupBuy.classList.remove("popup__visible");
  }
});
