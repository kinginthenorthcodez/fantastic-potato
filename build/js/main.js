const initApp = () => {
  const hambergerBtn = document.getElementById('humberger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('flex');
    mobileMenu.classList.toggle('hidden');
    hambergerBtn.classList.toggle('toggle-btn');
  };

  hambergerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);
