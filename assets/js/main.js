function checkElement() {
	if (event.target.classList == 'c-image-gallery__image') {
		openLightbox(event.target);
	}
	else if (event.target.classList.contains('c-image-gallery__control--close')) {
		var lightbox = event.target.closest('.c-image-gallery__lightbox');
		closeLightbox(lightbox);
	}
	else if (event.target.getAttribute('data-increment')) {
		var component = event.target.closest('.c-image-gallery');
		var slides = component.getElementsByClassName('c-image-gallery__image');
		var imageElement = component.querySelector('.c-image-gallery__image-element');
		var currentIndex = imageElement.getAttribute('data-index');

		if (event.target.classList.contains('c-image-gallery__control--previous')) {
			var position = -1;
		} else {
			var position = 1;
		}
		changeSlide(event.target, currentIndex, position);
	}
}

function openLightbox(element) {
	// console.log('openLightbox');
	var component = element.closest('.c-image-gallery');
	
	var lightbox = component.querySelector('.c-image-gallery__lightbox');
	var currentImage = "background-image: url('" + element.getAttribute('src') + "')";
	var currentIndex = element.getAttribute('data-index');
	var imageElement = lightbox.querySelector('.c-image-gallery__image-element');
	imageElement.setAttribute('data-index', currentIndex);
	

	imageElement.setAttribute('style', currentImage)
	lightbox.classList.add('c-image-gallery__lightbox--open');

}

function changeSlide(element, index, position) {
	// console.log('changeSlide');
	var component = element.closest('.c-image-gallery');
	var slides = component.getElementsByClassName('c-image-gallery__image');
	var imageElement = element.closest('.c-image-gallery__image-element');

	if (position < 1) {
		index--;
	} else {
		index++;
	}

	var beforeCheck = index;
	if (index == slides.length) {
		index = 0;
	} else if (index < 0) {
		index = slides.length -1;
	}

	var newImage = "background-image: url('" + slides[index].getAttribute('src') + "')";
	imageElement.setAttribute('style', newImage)
	imageElement.setAttribute('data-index', index);
}

function closeLightbox(element) {
	// console.log('closeLightbox');
	element.classList.remove('c-image-gallery__lightbox--open');
}

document.body.addEventListener('click', checkElement);