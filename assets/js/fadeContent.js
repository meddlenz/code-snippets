// Fade elements on scroll

var fadeElements = document.getElementsByClassName('scrollFade');

document.addEventListener('scroll', scrollFade);
window.addEventListener('resize', scrollFade);

function scrollFade() {
	var viewportBottom = window.scrollY + window.innerHeight;

	for (var index = 0; index < fadeElements.length; index++) {
		var element = fadeElements[index];
		var rect = element.getBoundingClientRect();

		// console.log(element)
		// console.log('Top: ' + rect.top);
		// console.log('Scroll: ' + window.scrollY)

		var elementFraction = rect.height/12;
		var navOffset = 88;
		var fadeInPoint = window.innerHeight - elementFraction;
		var fadeOutPoint = (-(rect.height/2)+88);
		// The number 88 is the offset for navigation height.
		// console.log('fadeInPoint: ' + fadeInPoint);
		// console.log('fadeOutPoint: ' + fadeOutPoint);

		if (rect.top <= fadeInPoint) {
			element.classList.add('scrollFade--visible');
			element.classList.add('scrollFade--animate');
			element.classList.remove('scrollFade--hidden');
			// console.log(element)
			// console.log(element.classList)
		} else {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}

		if (rect.top <= fadeOutPoint) {
			element.classList.remove('scrollFade--visible');
			element.classList.add('scrollFade--hidden');
		}
	}
}

	


document.addEventListener('DOMContentLoaded', function() {
    scrollFade();
}, false);