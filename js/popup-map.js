const buttonMap = document.querySelector(".button__map");
const popupMap = document.querySelector(".popup__map");
const mapClose = popupMap.querySelector(".popup__close");

buttonMap.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.add("popup__map-visible");
});

mapClose.addEventListener("click", function (event) {
  event.preventDefault();
  popupMap.classList.remove("popup__map-visible");
});

window.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "ESC" || key === "Escape") {
    popupMap.classList.remove("popup__map-visible");
  }
});
