(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileButton = document.querySelector('.js-menu-button');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const bodyScroll = document.querySelector('.js-scroll');
  const menuClose = document.querySelector('.header__mob-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
    mobileButton.classList.toggle('is-open');
    bodyScroll.classList.toggle('no-scroll');
  };

  const removeMenu = () => {
    mobileMenu.classList.remove('is-open');
    mobileButton.classList.remove('is-open');
    bodyScroll.classList.remove('no-scroll');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);
  menuClose.addEventListener('click', removeMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    mobileButton.classList.remove('is-open');
    bodyScroll.classList.remove('is-open');
  });
})();
