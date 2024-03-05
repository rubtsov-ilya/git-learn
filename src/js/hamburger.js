const bodyHam = document.querySelector('body');
let unlockHamburger = true;
const lockPaddingHamburger = document.querySelectorAll('.lock-padding');

//время действия анимации, которая указана в transition. Они должны быть одинаковые
const timeoutHam = 150;


window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.mobile-nav-wrapper'),
    menuItem = document.querySelectorAll('.mobile-nav__link'),
    hamburgerWrapper = document.querySelector('.hamburger-wrapper'),
    hamburger = document.querySelector('.hamburger');

    //включение выключение меню по нажатию на гамбургер
    hamburgerWrapper.addEventListener('click', () => {
        //закрытие меню при клике на гамбургер
        if (menu.classList.contains('mobile-nav-wrapper--active')) {
            hamburger.classList.remove('animate');
            menu.classList.remove('mobile-nav-wrapper--active');
            bodyUnlockHam()
            //открытие меню при клике на гамбургер 
        } else {
            hamburger.classList.add('animate');
            menu.classList.add('mobile-nav-wrapper--active');
            bodyLockHam()
        }
    });

    menuItem.forEach(item => {
        if (item.classList.contains('popup-link')) {
            item.addEventListener('click', () => {
                hamburger.classList.remove('animate');
                menu.classList.remove('mobile-nav-wrapper--active');
            });
        } else {
        item.addEventListener('click', () => {
            hamburger.classList.remove('animate');
            bodyUnlockHam();
            menu.classList.remove('mobile-nav-wrapper--active');
        });
        };
    });


    function bodyLockHam() {
        //класс wrapper нужен ещё на весь сайт, чтобы работало высчитывание размера скроллбара
        const lockPaddingValueHam = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

        if (lockPaddingHamburger.length > 0) {
            for (let index = 0; index < lockPaddingHamburger.length; index++) {
                const elHam = lockPaddingHamburger[index];
                elHam.style.paddingRight = lockPaddingValueHam;
                hamburgerWrapper.style.marginRight = lockPaddingValueHam;
            }
        }
        //body.style.paddingRight = lockPaddingValue;
        bodyHam.classList.add('lock');

        unlockHamburger = false;
        setTimeout(function () {
            unlockHamburger = true;
        }, timeoutHam);
    }

    function bodyUnlockHam() {
        setTimeout(function () {
            if (lockPaddingHamburger.length > 0) {
                for (let index = 0; index < lockPaddingHamburger.length; index++) {
                    const elHam = lockPaddingHamburger[index];
                    elHam.style.paddingRight = '0px';
                    hamburgerWrapper.style.marginRight = '0px';
                }
            }
            bodyHam.style.paddingRight = '0px';
            bodyHam.classList.remove('lock');
        }, timeoutHam);

        unlockHamburger = false;
        setTimeout(function () {
            unlockHamburger = true;
        }, timeoutHam);
    };

});