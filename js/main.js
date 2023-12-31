const btn = document.querySelector(".header__body-play");
const modal = document.querySelector(".header__body-modal");
const body = document.body;
const iframe = document.querySelector("iframe");
const iframeSrc = iframe.src;

const closeModal = () => {
  modal.classList.remove("header__body-modal--open");
  body.classList.remove("body--fixed");
  //iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
  iframe.src = iframeSrc;
};
const openModal = () => {
  modal.classList.add("header__body-modal--open");
  body.classList.add("body--fixed");
};

btn.addEventListener("click", openModal);

modal.addEventListener("click", (event) => {
  const target = event.target;
  if (
    (target && target.classList.contains("header__body-modal")) ||
    target.classList.contains("header__modal-close-btn")
  ) {
    closeModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal();
  }
});
/*==============rateYo====================*/
$(function () {
  $("#rateYo1, #rateYo2, #rateYo3").rateYo({
    numStars: 4,
    starWidth: "20px",
    rating: 4,
    spacing: "4px",
    fullStar: true,
    starSvg:
      '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.66699L12.575 6.88366L18.3333 7.72533L14.1667 11.7837L15.15 17.517L10 14.8087L4.85 17.517L5.83333 11.7837L1.66667 7.72533L7.425 6.88366L10 1.66699Z" fill="#C99E71"/>svg>'
  });
});




// попытки остановить воспроизведение в модальном окне при закрытии
//$(document).on('click', '#close_vid', function() {
    //jQuery("iframe").each(function() {
     // jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    //});
  //});




// Инициализируем Swiper
new Swiper(".swiper-container", {
  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // mobile + tablet - 320-990
    1: {
      slidesPerView: 1
    },
    1280: {
      slidesPerView: 2
    }
  },
  // Нумерация
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    // Кастомный вывод фракции
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        "/" +
        '<span class="' +
        totalClass +
        '"></span> People'
      );
    }
  },
  // Скролл
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true
  },
  // Автовысота
  autoHeight: true,
  // Количество слайдов для показа
  slidesPerView: "auto",
  // Отключение функционала, если слайдов больше, чем нужно
  //watchOverflow: true,
  // gap между слайдами
  spaceBetween: 40,
  // Количество пролистываемых слайдов
  slidesPerGroup: 1,
  // Бесконечный слайдер
  loop: true,
  // Скорость прокрутки
  speed: 500
}
);

//==============burger====================//    
$(window).on('scroll', function () {
  /*=======
      if ($(window).scrollTop() > 0) {
          $('.burger').addClass('burger--follow')
      } else {
          $('.burger').removeClass('burger--follow')
      }
  =======*/
  })
  setInterval(() => {
      if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
          $('.burger').addClass('burger--follow')
      } else {
          $('.burger').removeClass('burger--follow')
      }
  }, 0);
  
  $('.burger, .overlay, .header__top a').on('click', function (e) {
      //e.preventDefault() - не работают якорные ссылки
      $('.header__top').toggleClass('header__top--open')
      $('.overlay').toggleClass('overlay--show')
      $('.burger').toggleClass('burger--cross')
  })
  
  