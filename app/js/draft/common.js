document.addEventListener("DOMContentLoaded", () => {


  // Проверка активного меню
  try {
    $(function() {
      let pathname_url = window.location.pathname;
      pathname_url = pathname_url.split("/");
      pathname_url = pathname_url[pathname_url.length - 1];
      let href_url = window.location.href;
      href_url = href_url.split("/");
      href_url = href_url[href_url.length - 1];
      
      $(".header-nav__item-link").each(function () {
        let link = $(this).attr("href");
        if(pathname_url == link || href_url == link) {
          $(this).addClass(" header-nav__item-link--active");
        } else {
        };
      });
    });
  } catch (err) {
      console.log(err);
  };





  // Открытие модалки формы 
  try {
    let mod = document.querySelector(".modal-form");
    let op = document.querySelector(".contact-page__button");
    // console.log(op);
    // console.log(mod);

    op.addEventListener("click", function (){
      mod.className += " modal-active";
    });
  } catch (err) {
    console.log(err);

  };



  // mobile menu
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.querySelector(".mobile-menu");

  const toggleMobileMenu = () => {
      hamburger.classList.toggle("is-active");
      mobileMenu.classList.toggle("mobile-menu--active");
      document.body.classList.toggle("no-scroll");
  };

  hamburger.addEventListener("click", toggleMobileMenu);

  //swiper js
  try {
    const swiper = new Swiper('.swiper-container', {
      pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      navigation: {
        nextEl: '.swiper-button-nexty',
        prevEl: '.swiper-button-prevy',
      },
      // observer: true,
      // observeParents: true,
      // parallax:true,
    });


    //   Добавление 0 перед счетчиком слайдов
    let pag = document.querySelector(".swiper-pagination-fraction");
    let pagone = document.querySelectorAll(".swiper-pagination-fraction");
    let pagtoo = document.querySelectorAll(".swiper-pagination-total");

    let paggi = pag.textContent.split(" / ", 1);
    if (paggi[0] < 10) {
      pagone.forEach(element => {
        element.className += " zerro";
      });
      pagtoo.forEach(element => {
        element.className += " zerro";
      });
    };
  } catch (err) {
    // console.log(err);
  };
  



  //   Проверка формы
  try {
    let selector = document.querySelectorAll("input[type='phone']");
    let im = new Inputmask("+38(099)99-99-999");
    let modal = document.querySelector(".modal");
    im.mask(selector);

    new JustValidate('.js-form', {
        rules: {
            // name: {
            //     required: true,
            //     minLength: 2
            // },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true
            },
            text: {
                required: true,
                minLength: 5,
                maxLength: 300
            }
        },

        messages: {
            // name: 
            // {
            //     required: 'Потрібно ввести ім\'я',
            //     minLength: 'Портібно більше двох літер' 
            // },
            email: 'Нужно ввести email',
            phone: 'Нужно ввести телефон',
            text: 'Нужно ввести сообщение'
        },

        
        submitHandler: function (form) {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", "mail.php", true);
            let formData = new FormData(form);

            xhr.addEventListener("load", function () {
                if (xhr.readyState === 4 ) {
                    switch (xhr.status) {
                        case 200:
                            console.log("Форма оправлена!");
                            form.reset();
                            modal.classList.add("modal-active");
                            // setTimeout(() => {
                            //     modal.classList.remove("modal-active");
                            // }, 2000);
                            break;
                    
                        case 404: 
                            console.log("Ничего не вышло");
                        default:
                            console.log("Error");
                            break;
                    }
                }
            })
            xhr.send(formData);
        },
    });
  } catch (err) {
    console.log(err);
  };
  


  // Закрытие модалки
  try {
    let closeBtnOne = document.querySelector(".modal__button");
    let closeBtnToo = document.querySelector(".modal__close");
    let mod = document.querySelector(".modal-form");
    let modal = document.querySelector(".modal");

    closeBtnOne.addEventListener("click", function () {
      console.log(1);
        modal.classList.remove("modal-active");
    });
    closeBtnToo.addEventListener("click", function () {
      console.log(2);
      try {
        modal.classList.remove("modal-active");
      } catch (err) {
        console.log(err);
      };
      try {
        mod.classList.remove("modal-active");
      } catch (err) {
        console.log(err);
      };  
    });
  } catch (err) {
    console.log(err);
  };
  


// fancybox
  try {
    $('[data-fancybox="gallery"]').fancybox({
      // Options will go here
    });
  } catch (err) {
    console.log(err);
  };
  

});