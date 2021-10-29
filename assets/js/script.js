var btnOpen = document.querySelector('#btn-open');
btnOpen.addEventListener('click', () => {
    var openMenu = document.getElementById('body');
    openMenu.classList.add('open-menu');
})

var btnClose = document.querySelector('#btn-close');
btnClose.addEventListener('click', () => {
    var closeMenu = document.getElementById('body');
    closeMenu.classList.remove('open-menu');
})
