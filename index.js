const slides = document.querySelectorAll('.slide');

for (const slide of slides) {	
	slide.addEventListener('click', () => {
  removeActiveClasses();
  slide.classList.add('active')
  })
}
function removeActiveClasses() {
	slides.forEach((slide) => {
  	slide.classList.remove('active')
  })
}