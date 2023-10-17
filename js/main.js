const nav = document.querySelector('.nav__items');
const navBtn = document.querySelector('.burger-btn');
const AllNavItems = document.querySelectorAll('.nav__item');

const handleNav = () => {
	nav.classList.toggle('nav__items--active');
	AllNavItems.forEach((NavItem) => {
		NavItem.addEventListener('click', () =>
			nav.classList.remove('nav__items--active')
		);
	});
	handleNavAnimation();
};

const handleNavAnimation = () => {
	let delayTime = 0.3;
	AllNavItems.forEach((item) => {
		item.classList.toggle('nav__item--animation');
		item.style.animationDelay = delayTime + 's';
		delayTime += 0.1;
	});
};

navBtn.addEventListener('click', handleNav);
