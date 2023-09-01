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

$('.yt_player_iframe').on('hidden.bs.modal', function() {
    player.pauseVideo();
});
