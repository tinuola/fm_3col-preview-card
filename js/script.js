const btns = document.querySelectorAll('button');

const icons = document.querySelectorAll('.card__image');

btns.forEach((btn, index) => {
  btn.addEventListener('mouseover', function () {
    icons[index].classList.add('animate-card__image');
  });

  btn.addEventListener('mouseout', function () {
    icons[index].classList.remove('animate-card__image');
  });
});
