window.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".menu"),
    menuLink = document.querySelectorAll(".menu_link"),
    hamburger = document.querySelector(".hamburger");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    menu.classList.toggle("menu_active");
  });

  menuLink.forEach((item) => {
    item.addEventListener("click", () => {
      hamburger.classList.toggle("hamburger_active");
      menu.classList.toggle("menu_active");
    });
  });
});

$(document).ready(function () {
  $(".carousel__inner").slick(
    {
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg"/></button>',
        responsive:
        [
            {
              breakpoint: 992, 
              settings: {
                dots: false,
                arrows: false
              },
              breakpoint: 600,
              breakpoint: 480,
              breakpoint: 320,
            }
          ]
      }
  );
});
