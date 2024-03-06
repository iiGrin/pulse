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
  }

  toggleSlide(".catalog-item__link");
  toggleSlide(".catalog-item__back");

  //modal

  $("[data-modal=modal-consultation]").on("click", function () {
    $(".overlay, #modal-consultation").fadeIn("slow");
  });

  $(".modal__close").on("click", function () {
    $(".overlay, #modal-consultation, #module-thanks, #modal-order").fadeOut(
      "slow"
    );
  });

  $(".button_mini").each(function (i) {
    $(this).on("click", function () {
      $("#modal-order .modal__descr").text(
        $(".catalog-item__subtitle").eq(i).text()
      );
      $(".overlay, #modal-order").fadeIn("slow");
    });
  });

  function validateForms(form) {
    $(form).validate({
      rules: {
        name: {
          required: true,
          minlength: 2,
        },
        phone: "required",
        email: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: {
          required: "We need your name!",
          minlength: jQuery.validator.format(
            "At least {0} characters required!"
          ),
        },
        email: {
          required: "We need your email address to contact you",
          email: "Your email address must be in the format of name@domain.com",
        },
      },
    });
  }

  validateForms("#consultation-form");
  validateForms("#modal-consultation form");
  validateForms("#modal-order form");

  $('input[name=phone').mask("+7 (999) 999-9999");

  // $('form').submit(function(e) {
  //   e.preventDefault();

  //   $.ajax({
  //     type: "POST",
  //     url: "mailer/smart.php",
  //     data: $(this).serialize()
  //   }).done(function() {
  //     $(this).find("input").val("");
  //     $('#modal-consultation, #modal-order').fadeOut();
  //     $('.overlay, #modal-thanks').fadeIn('slow');
  //     $("form").trigger('reset');
  //   });

  //   return false;
  // });
  $('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
      return;
    };

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('#modal-consultation, #modal-order').fadeOut();
        $('.overlay, #modal-thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});
//smooth and pageup
  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    };
  });

  new WOW().init();
});

