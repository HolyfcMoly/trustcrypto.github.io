const burger = document.querySelector('#burger');
const nav = document.querySelector('.nav__right');
    // делаем переключения меню
    burger.addEventListener("click", function() {
        nav.classList.toggle('open');
    });
    document.addEventListener("click", function (out) {
        if (!nav.contains(out.target))
        {nav.classList.remove('open');}
    });

    
    // список смены языка
let menuElem = document.querySelector('.dropdown__menu');
let titleElem = menuElem.querySelector('.dropdown__title');

    titleElem.onclick = function() {
        menuElem.classList.toggle('open');
    };
// при клике вне области закрывает список
    document.addEventListener("click", function (e) {
        if (!menuElem.contains(e.target))
        {menuElem.classList.remove('open');}
    });

let links = menuElem.querySelector("dropdown__item");
    for(let i = 0, l = links.length; i < l; i++){
        links[i].onclick = function(){
            titleElem.innerHTML = this.innerHTML;
            titleElem.style.backgroundImage = getComputedStyle(this.children[0]).backgroundImage;
        };
    };


//  смена содержимово кнопки

const button = document.querySelector("#hero__btn");

    if (window.innerWidth <= 992) {
        button.innerHTML = "Посмотреть продукты";
    }

    window.addEventListener("resize", function() {
    if (window.innerWidth <= 992) {
        button.innerHTML = "Посмотреть продукты";
    } else {
        button.innerHTML = "Подробнее";
    }
    });




