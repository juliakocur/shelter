console.log(`Оценка за задание 100/100\n Main\n Проверка верстки +7\n Вёрстка соответствует макету +35\n Требования к css +6 \n Интерактивность элементов +12 \n Pets\n Проверка верстки +7\n Вёрстка соответствует макету +15\n Требования к css +4\n Интерактивность элементов +14`) 

const iconMenu = document.querySelector('.burger');
const navMenu = document.querySelector('.menu-list');




    iconMenu.addEventListener("click", () => {

if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {

    document.body.classList.toggle('_lock');
    document.querySelector('.shadow').classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    navMenu.classList.toggle('_active');

    });


/* закрытие бургер меню */
const closeBurger = () => {
=======
});
}

/* закрытие бургер меню */
if (navMenu) {
        navMenu.addEventListener("click", function (e) {

        document.body.classList.remove('_lock');
        document.querySelector('.shadow').classList.remove('_active');
        iconMenu.classList.remove('_active');
        navMenu.classList.remove('_active');

};

navMenu.addEventListener("click", () => {
    closeBurger();
});

document.querySelector('.shadow').addEventListener("click", () => {
  if (navMenu.classList.contains('_active')) closeBurger();
});


});
}

