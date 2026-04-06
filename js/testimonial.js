

//We Testimonial section//
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
