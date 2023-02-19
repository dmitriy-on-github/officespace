// Smooth menu
document.addEventListener("click", documentActions);
function documentActions(e) {
	const targetElement = e.target;
	/*if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('_active');
	}*/
	if (targetElement.closest('[data-goto]')) {
		//document.documentElement.classList.contains('_active') ?
		//document.documentElement.classList.remove('_active') : null;
		//menu_close();

		const goTo = targetElement.closest('[data-goto]').dataset.goto;
		const goToElement = document.querySelector(goTo);
		const headerHeight = document.querySelector('.header').offsetHeight;
		if (goToElement) {
			window.scrollTo({
				top: goToElement.offsetTop - (headerHeight),
				behavior: "smooth"
			});
		}
		e.preventDefault();
	}
}
// Swiper
const swiper = new Swiper('.slider-main-block', {
	// Optional parameters
	loop: true,
	// Navigation arrows
	navigation: {
		nextEl: '.body-main-block__arrow.swiper-button-next',
		prevEl: '.body-main-block__arrow.swiper-button-prev',
	},
});

// Таби
const tabNavItems = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener("click", function (e) {
	const targetElement = e.target;
	let currentActiveIndex = null;
	let newActiveIndex = null;
	if (targetElement.closest('.tabs-deals__button')) {
		tabNavItems.forEach((tabNavItem, index) => {
			if (tabNavItem.classList.contains('active')) {
				currentActiveIndex = index;
				tabNavItem.classList.remove('active');
			}
			if (tabNavItem === targetElement) {
				newActiveIndex = index;
			}
		});
		targetElement.classList.add('active');
		tabItems[currentActiveIndex].classList.remove('active');
		tabItems[newActiveIndex].classList.add('active');
	}
});