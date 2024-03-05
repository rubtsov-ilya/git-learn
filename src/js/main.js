document.addEventListener('DOMContentLoaded', () => {

  // Плавная прокрутка по якорям с исключением #popup якоря
  const links = document.querySelectorAll('a[href^="#"');
  links.forEach(function (link) {
    if (link.classList.contains('popup-link')) {
      return
    } else {
      link.addEventListener('click', function(e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        //const topOffset = document.querySelector('.header').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
    };
  });




  //Мобильная навигация burger-menu
  const bodyHam = document.querySelector('body');
  let unlockHamburger = true;
  const lockPaddingHamburger = document.querySelectorAll('.lock-padding');

  //время действия анимации, которая указана в transition. Они должны быть одинаковые
  const timeoutHam = 150;
  
  const menu = document.querySelector('.mobile-nav-wrapper'),
  menuItem = document.querySelectorAll('.mobile-nav__do-close'),
  menuBg = document.querySelector('.mobile-nav-wrapper__bg'),
  hamburgerWrapper = document.querySelector('.hamburger-wrapper'),
  hamburger = document.querySelector('.hamburger');

  //включение выключение меню по нажатию на гамбургер
  hamburgerWrapper.addEventListener('click', () => {
      //закрытие меню при клике на гамбургер
      if (menu.classList.contains('active')) {
          hamburger.classList.remove('animate');
          menu.classList.remove('active');
          bodyUnlockHam()
          //открытие меню при клике на гамбургер 
      } else {
          hamburger.classList.add('animate');
          menu.classList.add('active');
          bodyLockHam()
      }
  });

  menuBg.addEventListener('click', (e) => {
        //закрытие меню при клике на гамбургер
        hamburger.classList.remove('animate');
        menu.classList.remove('active');
        bodyUnlockHam()
        e.stopPropagation
        //открытие меню при клике на гамбургер 
      
  });

  menuItem.forEach(item => {
      if (item.classList.contains('popup-link')) {
          item.addEventListener('click', () => {
              hamburger.classList.remove('animate');
              menu.classList.remove('active');
          });
      } else {
      item.addEventListener('click', () => {
          hamburger.classList.remove('animate');
          bodyUnlockHam();
          menu.classList.remove('active');
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
              //hamburgerWrapper.style.marginRight = lockPaddingValueHam;
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
                  //hamburgerWrapper.style.marginRight = '0px';
              }
          }
          bodyHam.style.paddingRight = '0px';
          bodyHam.classList.remove('lock');
      }, timeoutHam);

      unlockHamburger = false;
      setTimeout(function () {
          unlockHamburger = true;
      }, timeoutHam);
  }

  //img to svg fill
    /* $("img.img-svg").each(function () {
        var $img = $(this);
        var imgClass = $img.attr("class");
        var imgURL = $img.attr("src");
        $.get(imgURL, function (data) {
            var $svg = $(data).find("svg");
            if (typeof imgClass !== "undefined") {
                $svg = $svg.attr("class", imgClass + " replaced-svg");
            }
            $svg = $svg.removeAttr("xmlns:a");
            if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
                $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
            }
            $img.replaceWith($svg);
        }, "xml");
    }); */




})
