const buttonFirst = document.querySelector(".a1");
const buttonSecond = document.querySelector(".a2");
const buttonThird = document.querySelector(".a3");
const listFirst = document.querySelector(".list__pic1");
const listSecond = document.querySelector(".list__pic2");
const listThird = document.querySelector(".list__pic3");

buttonFirst.addEventListener("click", function (event) {
  event.preventDefault();
  listSecond.classList.remove("slide__list-visible");
  listThird.classList.remove("slide__list-visible");
  listFirst.classList.toggle("slide__list-visible");
});

buttonSecond.addEventListener("click", function (event) {
  event.preventDefault();
  listFirst.classList.remove("slide__list-visible");
  listThird.classList.remove("slide__list-visible");
  listSecond.classList.toggle("slide__list-visible");
});

buttonThird.addEventListener("click", function (event) {
  event.preventDefault();
  listFirst.classList.remove("slide__list-visible");
  listSecond.classList.remove("slide__list-visible");
  listThird.classList.toggle("slide__list-visible");
});
