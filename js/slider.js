const hero = document.querySelector('.hero');
const heroRightSide = document.querySelector('.hero__right-side');
const btnBack = document.querySelector('.js-btn-back');
const btnNext = document.querySelector('.js-btn-forward');
const sliderPagination = document.querySelectorAll('.slider-pagination__item');
const SLIDES_QUANTITY = 3;
let imgNum = 3;

btnBack.addEventListener('click', onBackBtnClick);
btnNext.addEventListener('click', onNextBtnClick);

changeBackground(imgNum);

function changeBackground(imgNum) {
  if (window.matchMedia('(max-width: 480.98px)').matches) {
    hero.style.backgroundImage = `linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url(../images/hero/mob/img${imgNum}mob@1x.jpg)`;
  }
  if (window.matchMedia('(min-width: 481px) and (max-width: 767.98px)').matches) {
    hero.style.backgroundImage = `linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url(../images/hero/tab/img${imgNum}tab@1x.jpg)`;
  }
  if (window.matchMedia('(min-width: 768px)').matches) {
    heroRightSide.style.backgroundImage = `linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url(../images/hero/tab/img${imgNum}tab@1x.jpg)`;
  }
  if (window.matchMedia('(min-width: 1200px)').matches) {
    heroRightSide.style.backgroundImage = `linear-gradient(rgba(25, 28, 38, 0.2), rgba(25, 28, 38, 0.2)), url(../images/hero/desk/img${imgNum}desk@1x.jpg)`;
  }
}

function changePagination() {
  sliderPagination.forEach(el => {
    if (Number(el.dataset.value) === imgNum) {
      el.classList.add('slider-pagination__item--active');
    } else {
      el.classList.remove('slider-pagination__item--active');
    }
  });
}

function onBackBtnClick() {
  imgNum <= 1 ? (imgNum = SLIDES_QUANTITY) : (imgNum -= 1);
  changeBackground(imgNum);
  changePagination();
}

function onNextBtnClick() {
  imgNum >= SLIDES_QUANTITY ? (imgNum = 1) : (imgNum += 1);
  changeBackground(imgNum);
  changePagination();
}
