// Get elements
const menuButton = document.getElementById('menu-button');
const nav = document.querySelector('nav');
const closeButton = document.getElementById('menu-close');

// Open menu (sidebar)
menuButton.addEventListener('click', () => {
  nav.classList.add('open');
});

// Close menu (sidebar)
closeButton.addEventListener('click', () => {
  nav.classList.remove('open');
});
