const navBar= document.querySelector('.nav-bar');
const navtoggle= document.querySelector('.ham');

navtoggle.addEventListener('click',() => {

	const visible = navBar.getAttribute("data-visible");

	if (visible==="false") {
		navBar.setAttribute('data-visible', true);
		navtoggle.setAttribute('aria-expanded', true);
	}
	else if (visible==="true") {
		navBar.setAttribute("data-visible", false);
		navtoggle.setAttribute("aria-expanded", false);


	}

});