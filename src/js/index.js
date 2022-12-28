// 1) На кнопку задаєсо додатковий class="js-open-modal" та атрибут data-modal="З буд'яким ім'ям"
// 2) На модалку задаємо class="modal" та атрибут data-modal="З таким самим ім'ям як на кнопці з якою хрчіте повязати"
// 3) задаємо class="js-modal-close" для хрестика закритя модалки
// 4) Всі класи з позіціонуваням та стилями прописуються окремо для кожного вікна
// Приклад

/* <a href="#" class="js-open-modal" data-modal="modal-map">Відкрити вікно 2</a>

<div class="modal modal-map" data-modal="modal-map">
   <svg class="modal__cross js-modal-close" */

document.addEventListener('DOMContentLoaded', function () {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
    overlay = document.querySelector('.js-overlay-modal'),
    closeButtons = document.querySelectorAll('.js-modal-close');

  modalButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      e.preventDefault();

      var modalId = this.getAttribute('data-modal'),
        modalElem = document.querySelector(
          '.modal[data-modal="' + modalId + '"]'
        );

      modalElem.classList.add('active');
      overlay.classList.add('active');
      document.body.classList.add('no-scroll-modal');
    });
  });

  closeButtons.forEach(function (item) {
    item.addEventListener('click', function (e) {
      var parentModal = this.closest('.modal');

      parentModal.classList.remove('active');
      overlay.classList.remove('active');
      document.body.classList.remove('no-scroll-modal');
    });
  });
});
