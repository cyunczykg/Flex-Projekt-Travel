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
	AllNavItems.forEach((item, index) => {
		item.classList.toggle('nav__item--animation');
		item.style.animationDelay = 0.3 + (index-1)*0.1 + 's';
	});
};

navBtn.addEventListener('click', handleNav);
