'use strict';

// menu

let mainNav = document.querySelector('.main-nav');
let menuBtn = document.querySelector('.main-nav__toogle');

mainNav.classList.remove('main-nav--no-js');

menuBtn.addEventListener('click', openMenu );

function openMenu(){
    mainNav.classList.toggle('main-nav--closed');
    bgDiv.classList.toggle('hidden');
    menuBtn.classList.toggle('main-nav__toogle--close');
}


// slider

let prevBtn = document.querySelector(".button--prev");
let nextBtn = document.querySelector(".button--next");

let reviewItems = document.querySelectorAll(".slider__item");

prevBtn.addEventListener("click", slidePrev);
nextBtn.addEventListener("click", slideNext);

let slideIndex = 0;

function slideNext(){
  reviewItems.forEach(el => el.classList.add('hidden'))
  if(slideIndex<reviewItems.length-1){
    slideIndex++
  } else if( slideIndex = reviewItems.length-1 ){
    slideIndex = 0
  }
  reviewItems[slideIndex].classList.remove('hidden')
}

function slidePrev(){
  reviewItems.forEach(el => el.classList.add('hidden'))
  if( slideIndex == 0 ){
    slideIndex = reviewItems.length-1
  } else if (0 < slideIndex < reviewItems.length-1){
    slideIndex--
  } 
  reviewItems[slideIndex].classList.remove('hidden')
}