const buttonFeedback = document.querySelector(".contacts__button");
const popupFeedback = document.querySelector(".popup__feedback");
const popupClose = popupFeedback.querySelector(".popup__close");
const popupInputName = popupFeedback.querySelector(".popup__name");
/*const popupForm = popupFeedback.querySelector(".popup__form");*/

buttonFeedback.addEventListener("click", function (event) {
  event.preventDefault();
  popupFeedback.classList.add("popup__feedback-visible");
  popupInputName.focus();
});

popupClose.addEventListener("click", function (event) {
  event.preventDefault();
  popupFeedback.classList.remove("popup__feedback-visible");
});

window.addEventListener("keydown", function (event) {
  const key = event.key;
  if (key === "ESC" || key === "Escape") {
    popupFeedback.classList.remove("popup__feedback-visible");
  }
});
