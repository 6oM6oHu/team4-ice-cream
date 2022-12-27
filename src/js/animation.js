(function () {
  var animate = document.querySelector('.animate-wrapper');

  var observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      var entryAnimate = entry.target.querySelector('.animate');
      if (
        typeof getCurrentAnimationPreference === 'function' &&
        !getCurrentAnimationPreference()
      ) {
        return;
      }

      if (entry.isIntersecting) {
        entryAnimate.classList.add('start-animation');
        return;
      }

      entryAnimate.classList.remove('start-animation');
    });
  });

  observer.observe(animate);
})();
