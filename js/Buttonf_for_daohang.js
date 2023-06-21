
document.addEventListener('DOMContentLoaded', function() {
	const navToggle = document.querySelector('.nav-toggle');
	const header = document.querySelector('header');

	navToggle.addEventListener('click', function() {
		header.classList.toggle('nav-open');
	});
});
