
//header sticky
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.header').addClass("sticky");
  } else {
    $('.header').removeClass("sticky");
  }
});

//login modal validation
(function () {
  'use strict'

  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()



//dropdown
if ($(window).width() < 1200) {
  $(".dropdown_list").slideUp('');
  $(".menu-list li.menu_item > a").on("click", function () {
    $(this).parents('.mobile-menu').find(".dropdown_list").slideUp('');
    if ($(this).next(".dropdown_list").is(':hidden')) {
      $(this).next(".dropdown_list").slideToggle('');
    }
  });
}

//toggle menu
$(document).ready(function () {
  $(".bar").click(function () {
    $('.menu-list').addClass("open");
    $(".wapper").addClass("active");
  })
  $(".colse").click(function () {
    $('.menu-list').removeClass("open");
    $(".wapper").removeClass("active");
  });

  //destination item
  // $('.destination-item').click(function () {
  //   $(this).toggleClass("active");
  // });
  $(".destination-item").on("click", (function () {
    $(this).addClass("active").siblings().removeClass("active")
  }));
  // , $(".destination-prev").on("click", (function () {
  //   var t;
  //   (t = $(".destination-list-area .destination-list-wrap.active")).prev().length > 0 ? (t.removeClass("active"), t.prev().addClass("active")) : (t.removeClass("active"), $(".destination-list-area .destination-list-wrap:last").addClass("active"))
  // })), $(".destination-next").on("click", (function () {
  //   var t;
  //   (t = $(".destination-list-area .destination-list-wrap.active")).next().length > 0 ? (t.removeClass("active"), t.next().addClass("active")) : (t.removeClass("active"), $(".destination-list-area .destination-list-wrap:first").addClass("active"))
});
$(document).on("click", function (event) {

  //*** DropdownMenu-Hide ***//
  // var $trigger = $(".header_top_dropdownmenu , .header_top_dropdownmenu_list");
  // if ($trigger !== event.target && !$trigger.has(event.target).length) {
  //     if ($(".header_top_dropdownmenu_list").hasClass("active")) {
  //         $('.header_top_dropdownmenu_list').removeClass('active');
  //     }
  // }

  // //*** Menu ***//
  var $triggermenu = $(".bar, .menu-list,.wapper");
  if ($triggermenu !== event.target && !$triggermenu.has(event.target).length) {
    if ($(".menu-list").hasClass("open")) {
      $('.menu-list').removeClass('open');
    }
    if ($(".wapper").hasClass("active")) {
      $('.wapper').removeClass('active');
    }
  }

});

//slider first
let swiper = new Swiper(".thumbswiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
});
let swiper2 = new Swiper(".mySwiper2", {
  pagination: {
    el: ".swiper-pagination"
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 4000,
    speed: 800,
    disableOnInteraction: false,
  },
  thumbs: {
    swiper: swiper,
  },
});


// slider tour-categorie
const swiper1 = new Swiper(".tour-swiper", {
  // slidesPerView: 5,
  // spaceBetween: 60,
  // loop: true,
  // grabCursor: true,
  // centeredSlides: true,
  // slideActiveClass: "active",
  // pagination: {
  //   el: ".pagination",
  //   clickable: true
  // },
  slidesPerView: "auto",
  slidesPerView: 5,
  spaceBetween: 60,
  centeredSlides: !0,
  loop: !0,
  grabCursor: !0,
  pagination: {
    el: ".swiper-pagination",
    clickable: !0
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 60
    }
  }
});
