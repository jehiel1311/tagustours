

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

//swipper Testimonial

const slider = document.querySelector('#testimonial');
let sliderTestimonial = document.querySelectorAll ('.slide-testimonial');
let sliderTestimonialLast = sliderTestimonial[sliderTestimonial.length -1];

const btnLeft = document.querySelector('#btn-left');
const btnRigth = document.querySelector('#btn-rigth');

slider.insertAdjacentElement('afterbegin', sliderTestimonialLast);

function Next () {
    let sliderTestimonialfirst = document.querySelectorAll('.slide-testimonial')[0];
    slider.style.marginLeft = '-200%';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('beforeend', sliderTestimonialfirst);
        slider.style.marginLeft = '-100%';
    }, 500);
}
function Prev () {
    let sliderTestimonial = document.querySelectorAll ('.slide-testimonial');
    let sliderTestimonialLast = sliderTestimonial[sliderTestimonial.length -1];
    slider.style.marginLeft = '0';
    slider.style.transition = 'all 0.5s';
    setTimeout(function(){
        slider.style.transition = 'none';
        slider.insertAdjacentElement('afterbegin', sliderTestimonialLast);
        slider.style.marginLeft = '-100%';
    }, 500);
}
btnRigth.addEventListener('click', function() {
    Next ();
});
btnLeft.addEventListener('click', function() {
    Prev ();
});
// setInterval(function() {
//   Next();
// },5000);

// Obtén una referencia al elemento de saludo
var greetingElement = document.querySelector('.whatsapp-greeting');

// Crea un array con diferentes saludos en diferentes idiomas
var greetings = ['Talk with us!','Hello :)','Talk with us!'];

// Función para seleccionar aleatoriamente un saludo del array
function getRandomGreeting() {
  var randomIndex = Math.floor(Math.random() * greetings.length);
  return greetings[randomIndex];
}

// Actualiza el texto de saludo cada 5 segundos
setInterval(function() {
  greetingElement.textContent = getRandomGreeting();
}, 5000);

document.getElementById("ver-mas").addEventListener("click", function() {
  // Aquí puedes agregar lógica para cargar más imágenes o mostrar las existentes en otro orden.
  // Por ejemplo, podrías usar AJAX para cargar más imágenes desde un servidor.
});

const $form = document.querySelector('#form');

$form.addEventListener('submit', handleSubmit)

function handleSubmit (event) {
event.preventDefault()
};




//We support section//
let hideText_btn = document.getElementById('hideText_btn');
let hideText = document.getElementById('hideText');

hideText_btn.addEventListener('click', toggleText);

function toggleText () {
  hideText.classList.toggle('show');
}



// whatsapp








function mostrarDialogo() {
  var dialogo = document.getElementById('dialogo');
  dialogo.classList.toggle('hidden');
  
  ocultarGreeting();
}

function enviarWhatsApp() {
  const mensaje = encodeURIComponent(document.getElementById('mensaje').value);
  window.location.href = `https://wa.me/351933848910?text=${mensaje}`;
}

function cerrarDialogo() {
  var dialogo = document.getElementById('dialogo');
 
  dialogo.classList.add('hidden');
}

function mostrarGreeting() {
  document.getElementById('greeting').style.display = 'block';
}

function ocultarGreeting() {
  document.getElementById('greeting').style.display = 'none';
}
