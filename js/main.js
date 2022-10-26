let sliderWrapper = document.querySelector(".landing .slider .slider-wrapper");
let prevtBtn = document.querySelector(".landing .slider .controls .prev");
let nextBtn = document.querySelector(".landing .slider .controls .next");

let indexOfQuote = 1;

nextBtn.addEventListener("click", function () {
  indexOfQuote == 5 ? (indexOfQuote = 0) : indexOfQuote++;
  moveSlider(indexOfQuote);
});

prevtBtn.addEventListener("click", function () {
  indexOfQuote == 0 ? (indexOfQuote = 5) : indexOfQuote--;
  moveSlider(indexOfQuote);
});

function moveSlider(index) {
  sliderWrapper.style.marginLeft = `${-index * 300}px`;
}
