const btn = document.querySelector('.header__body-play')
const modal = document.querySelector('.header__body-modal')
const body = document.body
const closeModal = () => {
    modal.classList.remove('header__body-modal--open')
    body.classList.remove('body--fixed')
}
const openModal = () => {
    modal.classList.add('header__body-modal--open')
    body.classList.add('body--fixed')
}

btn.addEventListener('click', openModal) 

modal.addEventListener('click', event => {
    const target = event.target
    if(target && target.classList.contains('header__body-modal') || target.classList.contains('header__modal-close-btn')) {
        closeModal()
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape') {
        closeModal()
    }
})
/*==============rateYo====================*/
$(function () {

    $("#rateYo1, #rateYo2, #rateYo3").rateYo({
    numStars: 4,
    starWidth: "20px",
    rating: 4,
    spacing: "4px",
    fullStar: true,
    starSvg: '<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1.66699L12.575 6.88366L18.3333 7.72533L14.1667 11.7837L15.15 17.517L10 14.8087L4.85 17.517L5.83333 11.7837L1.66667 7.72533L7.425 6.88366L10 1.66699Z" fill="#C99E71"/>svg>',
    });

});
// попытки остановить воспроизведение в модальном окне при закрытии
// let vid = document.getElementById("myVideo");

// function playVid() {
//     vid.play();
// }

// function pauseVid() {
//     vid.pause();
// }