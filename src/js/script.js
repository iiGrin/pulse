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
  $(".carousel__inner").slick({
    speed: 1200,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="../icons/left.svg"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="../icons/right.svg"/></button>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          dots: false,
          arrows: false,
        },
        breakpoint: 600,
        breakpoint: 480,
        breakpoint: 320,
      },
    ],
  });

  $("ul.catalog__tabs").on(
    "click",
    "li:not(.catalog__tab_active)",
    function () {
      $(this)
        .addClass("catalog__tab_active")
        .siblings()
        .removeClass("catalog__tab_active")
        .closest("div.container")
        .find("div.catalog__content")
        .removeClass("catalog__content_active")
        .eq($(this).index())
        .addClass("catalog__content_active");
    }
  );

  function toggleSlide(item) {
    $(item).each(function (i) {
      $(this).on("click", function (e) {
        e.preventDefault();
        $(".catalog-item__content")
          .eq(i)
          .toggleClass("catalog-item__content_active");
        $(".catalog-item__list").eq(i).toggleClass("catalog-item__list_active");
      });
    });
  };

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");
});
