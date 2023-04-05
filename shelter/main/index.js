const iconMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.menu-list');



if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    document.querySelector('.shadow').classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');
});
}

/* закрытие бургер меню */
if (navMenu) {
        navMenu.addEventListener("click", function (e) {
        document.body.classList.remove('_lock');
        document.querySelector('.shadow').classList.remove('_active');
        iconMenu.classList.remove('_active');
        navMenu.classList.remove('_active');
});
}


