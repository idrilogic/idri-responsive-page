function responsvieNavba() {
	let topnav = document.querySelector('#topnav');

	if (topnav.className === 'navigation') {
		topnav.className += ' responsive';
	} else {
		topnav.className = 'navigation'
	}
}