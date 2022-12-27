const refs = {
    headerEl: document.querySelector('.header-js'),
  };
  
  window.onscroll = function () {
    if (window.screen.width >= 768) {
      scrollY <= 70
        ? refs.headerEl.classList.remove('header-bg')
        : refs.headerEl.classList.add('header-bg');
    } else {
      scrollY <= 120
        ? refs.headerEl.classList.remove('header-bg')
        : refs.headerEl.classList.add('header-bg');
    }
  };