// temple.js - Footer and Hamburger Menu

// Footer copyright year and last modified
document.addEventListener('DOMContentLoaded', function() {
	const yearSpan = document.getElementById('year');
	const lastModifiedSpan = document.getElementById('lastModified');
	if (yearSpan) yearSpan.textContent = new Date().getFullYear();
	if (lastModifiedSpan) lastModifiedSpan.textContent = document.lastModified;

	// Hamburger menu
	const nav = document.querySelector('nav ul');
	const header = document.querySelector('header');
	if (nav && header) {
		// Create hamburger button
		const hamburger = document.createElement('button');
		hamburger.className = 'hamburger';
		hamburger.setAttribute('aria-label', 'Open navigation menu');
		hamburger.innerHTML = '&#9776;'; // Hamburger icon
		header.insertBefore(hamburger, header.querySelector('nav'));

		// Create close button
		const closeBtn = document.createElement('button');
		closeBtn.className = 'close-menu';
		closeBtn.setAttribute('aria-label', 'Close navigation menu');
		closeBtn.innerHTML = '&times;'; // X icon
		nav.parentNode.insertBefore(closeBtn, nav);
		closeBtn.style.display = 'none';

		// Toggle menu
		function showMenu() {
			nav.style.display = 'flex';
			hamburger.style.display = 'none';
			closeBtn.style.display = 'inline-block';
		}
		function hideMenu() {
			nav.style.display = 'none';
			hamburger.style.display = 'inline-block';
			closeBtn.style.display = 'none';
		}

		hamburger.addEventListener('click', showMenu);
		closeBtn.addEventListener('click', hideMenu);

		// Responsive: show/hide hamburger based on screen size
		function handleResize() {
			if (window.innerWidth < 800) {
				hideMenu();
			} else {
				nav.style.display = 'flex';
				hamburger.style.display = 'none';
				closeBtn.style.display = 'none';
			}
		}
		window.addEventListener('resize', handleResize);
		handleResize();
	}
});
