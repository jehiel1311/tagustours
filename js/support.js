

//We support section//
const buttons = document.querySelectorAll('.read-more-btn');
const textElements = document.querySelectorAll('.hideText');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const textElement = textElements[index];
    textElement.classList.toggle('show');

    if (textElement.classList.contains('show')) {
      button.innerHTML = 'Read Less';
      button.style.backgroundColor = 'rgba(12, 38, 70)';
      button.style.color = '#fff';} else {
      button.innerHTML = 'Read More';
      button.style.backgroundColor = '#fff';
      button.style.color = '#000';}
  });
});


//MENU HAMBURGUESA//
document.querySelector(".bars__menu").addEventListener("click", animatebars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var nav_menu = document.querySelector(".nav-menu");
var navmenuli = document.querySelector(".nav-menu li");

function animatebars(){
line1__bars.classList.toggle("activeline1__bars-menu");
line2__bars.classList.toggle("activeline2__bars-menu");
line3__bars.classList.toggle("activeline3__bars-menu");
}

// BARRA DE NAVEGACION FIJA EN DESPTOK//
window.addEventListener("scroll", function() {
  var header = document.querySelector(".header-nav");
  header.classList.toggle("scrolled", window.scrollY > 0);
});