const counterText = document.querySelector(".js-counter");
const pressBtnOnePool = document.querySelector(".js-pressBtnOnePool");
const pressBtnTwoPool = document.querySelector(".js-pressBtnTwoPool");
const pressReset = document.querySelector(".js-pressReset");



const COUNTER_INITIAL_TEXT = 0;
let counter = COUNTER_INITIAL_TEXT;


counterText.innerText = counter;

pressBtnOnePool.addEventListener("click", function () {
  counter++;

  counterText.innerText = counter;
});

pressBtnTwoPool.addEventListener("click", function () {
  counter = counter + 2;
  
  counterText.innerText = counter;
});

pressReset.addEventListener("click", function () {
  counter = COUNTER_INITIAL_TEXT;

  counterText.innerText = counter;
});

// DOM  - Document Object Model
// console.log(document)  // управление элементами на странице
