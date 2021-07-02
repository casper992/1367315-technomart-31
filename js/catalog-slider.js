const buttonNext = document.querySelector(".button__next");
const buttonPrevious = document.querySelector(".button__previous");
const catalogSlidePerf = document.querySelector(".catalog__slide1");
const catalogSlideDrel = document.querySelector(".catalog__slide2");
const catalogSlideCarouselFirst = document.querySelector(".carousel1");
const catalogSlideCarouselSecond = document.querySelector(".carousel2");

buttonNext.addEventListener("click", function (event) {
  event.preventDefault();
  catalogSlideDrel.classList.add("catalog__slide-visible");
  catalogSlideCarouselSecond.classList.add("carousel__red");
  catalogSlideCarouselFirst.classList.add("carousel__white");
});

buttonPrevious.addEventListener("click", function (event) {
  event.preventDefault();
  catalogSlideDrel.classList.remove("catalog__slide-visible");
  catalogSlideCarouselSecond.classList.remove("carousel__red");
  catalogSlideCarouselFirst.classList.remove("carousel__white");
});
