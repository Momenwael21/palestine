let sliderWrapper = document.querySelector(".landing .slider .slider-wrapper");
let prevtBtn = document.querySelector(".landing .slider .controls .prev");
let nextBtn = document.querySelector(".landing .slider .controls .next");

// turn on slider
let indexOfQuote = 0;
nextBtn.addEventListener("click", function () {
  indexOfQuote == 5 ? (indexOfQuote = 0) : indexOfQuote++;
  moveSlider(indexOfQuote);
});

prevtBtn.addEventListener("click", function () {
  indexOfQuote == 0 ? (indexOfQuote = 5) : indexOfQuote--;
  moveSlider(indexOfQuote);
});

function startSlider() {
  if (indexOfQuote == 5) {
    indexOfQuote = 0;
  } else {
    indexOfQuote++;
  }
  moveSlider(indexOfQuote);
}

setInterval(startSlider, 5000);

function moveSlider(index) {
  sliderWrapper.style.marginLeft = `${-index * 300}px`;
}

// turn on the map
let mapBtn = document.querySelector("header .toggler");
let mapSection = document.querySelector(".map");

mapBtn.addEventListener("click", () => {
  if (mapSection.classList.contains("active")) {
    mapSection.classList.remove("active");
  } else {
    mapSection.classList.add("active");
  }
});

// play audio when click open button
let openBtn = document.querySelector("a.open");
let audioPlayer = document.querySelector(".cause audio");

openBtn.addEventListener("click", () => {
  audioPlayer.setAttribute(
    "src",
    "../audio/وقضينا إلى بني إسرائيل في الكتاب لتفسدن في الأرض مرتين ولتعلن علوا كبيرا خالد الجليل [TubeRipper.com].webm"
  );
});