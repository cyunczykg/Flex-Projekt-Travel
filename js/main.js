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
};

navBtn.addEventListener('click', handleNav);
