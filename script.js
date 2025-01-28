const burgerMenu = document.querySelector('.burger-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-header-container .menu');

burgerMenu.addEventListener('click', () => {
  mobileMenu.classList.add('show');
  burgerMenu.style.display = 'none';
  closeMenu.style.display = 'block';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  closeMenu.style.display = 'none';
  burgerMenu.style.display = 'block';
});
