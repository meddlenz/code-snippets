function checkElement() {
	if (event.target.classList == 'c-image-gallery__image') {
		openLightbox(event.target);
	}
	else if (event.target.classList.contains('c-image-gallery__control--close')) {
		var lightbox = event.target.closest('.c-image-gallery__lightbox');
		closeLightbox(lightbox);
	}
	else if (event.target.getAttribute('data-increment')) {
		if (event.target.classList.contains('c-image-gallery__control--previous')) {
			var position = -1;
		} else {
			var position = 1;
		}
		var lightbox = event.target.closest('.c-image-gallery__lightbox');
		var slides = lightbox.getElementsByClassName('c-image-gallery__slide');
		for (count = 0; count < slides.length; count++) {
			if (slides[count].classList.contains('c-image-gallery__slide--visible')) {
				var currentIndex = slides[count].getAttribute('data-index');
				slides[count].classList.remove('c-image-gallery__slide--visible');
			} else {
				slides[count].classList.remove('c-image-gallery__slide--visible');
			}
		}
		changeSlide(event.target, currentIndex, position);
	}
}

function openLightbox(element) {
	var component = element.closest('.c-image-gallery');
	var lightbox = component.querySelector('.c-image-gallery__lightbox');
	var currentIndex = element.getAttribute('data-index');
	var slides = lightbox.getElementsByClassName('c-image-gallery__slide');

	for (count = 0; count < slides.length; count++) {
		slides[count].classList.remove('c-image-gallery__slide--visible');
		var slideIndex = slides[count].getAttribute('data-index');
		if (slideIndex == currentIndex) {
			slides[count].classList.toggle('c-image-gallery__slide--visible');
		}
	}
	
	lightbox.classList.add('c-image-gallery__lightbox--open');
}

function changeSlide(element, index, position) {
	console.log('changeSlide');
	var slides = element.getElementsByClassName('c-image-gallery__slide');
	var component = element.closest('.c-image-gallery');
	var slides = component.getElementsByClassName('c-image-gallery__slide');

	if (position < 1) {
		index--;
	} else {
		index++;
	}
	
	if (index == slides.length) {
		index = 0;
	} else if (index < 0) {
		index = slides.length -1;
	}

	for (count = 0; count < slides.length; count++) {
		var slideIndex = slides[count].getAttribute('data-index');
		console.log(slideIndex);
		if (slideIndex == index) {
			slides[index].classList.add("c-image-gallery__slide--visible");
		}
	}
}

function closeLightbox(element) {
	// console.log('closeLightbox');
	var slides = element.getElementsByClassName('c-image-gallery__slide');
	for (count = 0; count < slides.length; count++) {
		slides[count].classList.remove("c-image-gallery__slide--visible");
	}
	element.classList.remove('c-image-gallery__lightbox--open');
}

document.body.addEventListener('click', checkElement);