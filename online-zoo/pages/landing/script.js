const burger = document.getElementById('burger');
const nav = document.getElementById('nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
});

const leftArrow = document.getElementById('pets-carousel-left');
const rightArrow = document.getElementById('pets-carousel-right');
const cards = document.querySelector('.cards');
const carousel = document.getElementsByClassName('card').length/2;
let carouselLength = carousel - 3; 
let index = 0; 
let translateX = 0;

if (window.innerWidth < 1400) carouselLength++;
if (window.innerWidth < 927) carouselLength++;


rightArrow.addEventListener('click', () => {
  rightArrowFunc();
});

leftArrow.addEventListener('click', () => {
  leftArrowFunc();
});

let width = window.innerWidth;
console.log(width)

function rightArrowFunc() {

  translateX = translateX - 460 ;
  cards.style.left = translateX + "px";
  index++;

  if (index == carouselLength) {
    rightArrow.classList.add('disabled');
  }

  if (index == 1) {
    leftArrow.classList.remove('disabled');
  }
}

function leftArrowFunc() {
  
  translateX =  translateX + 460;
  cards.style.left = translateX + "px";
  index--;

  if (index == 0){
    leftArrow.classList.add('disabled');
  } 

  if (index == carouselLength-1) {
    rightArrow.classList.remove('disabled');
  }
}