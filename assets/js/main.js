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


//header sticky
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.header').addClass("sticky");
  } else {
    $('.header').removeClass("sticky");
  }
});



//dropdown
if ($(window).width() < 1200) {
  $(".dropdown_list").slideUp('');
  $(".menu-list li.menu_item > a").on("click", function () {
    $(this).parents('.mobile-menu').find(".dropdown_list").slideUp('');
    $(this).removeClass("active");
    if ($(this).next(".dropdown_list").is(':hidden')) {
      $(this).next(".dropdown_list").slideToggle('');
      $(this).toggleClass("active");
    }  
  });
}

//toggle menu
$(document).ready(function () {
  $(document).on("click", '.bar', function () {
    $('.menu-list').toggleClass("open");
    $(".wapper").toggleClass("active");
    $("body").toggleClass("body_hidden");
  })
  $(document).on("click", '.colse', function () {
    $('.menu-list').removeClass("open");
    $(".wapper").removeClass("active");
    $("body").removeClass("body_hidden");
  });
  $(".wapper").on("click", function () {
    $(".menu-list").removeClass('open');
    $(this).removeClass("active");
    $('body').removeClass("body_hidden");
  });
  //destination item
  // $('.destination-item').click(function () {
  //   $(this).toggleClass("active");
  // });
  $(".destination-item").on("click", (function () {
    $(this).addClass("active").siblings().removeClass("active")
  }));
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
  // var $triggermenu = $("body,.bar, .menu-list,.wapper");
  // if ($triggermenu !== event.target && !$triggermenu.has(event.target).length) {
  //   if ($(".menu-list").hasClass("open")) {
  //     $('.menu-list').removeClass('open');
  //   }
  //   if ($(".wapper").hasClass("active")) {
  //     $('.wapper').removeClass('active');
  //   }
  //   if ($("body").hasClass("body_hidden")) {
  //     $('body').removeClass('body_hidden');
  //   }
  // }

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
// slider meet-guide-swiper
const swiper3 = new Swiper(".meet-guide-swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: !0
  },
  autoplay: {
    delay: 4000,
    speed: 800,
  },
  breakpoints: {
    200: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    576: {
      slidesPerView: 1,
      // spaceBetween: 30
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1199: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// offer-deals
$('.offer-deals .accordion-tab-item').hover(function () {
  var value = $(this).attr('data-src');
  $('#card-cover').attr('src', value);
});

// popular-destination-swiper
var popular_destination_swiper = new Swiper(".popular-destination-swiper", {
  slidesPerView: 3,
  spaceBetween: 24,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  }
});

// company-swiper
const company_swiper = new Swiper(".company-swiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    767: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1199: {
      slidesPerView: 6,
    },
    1400: {
      slidesPerView: 8,
    }
  }
});
// company-swiper
const blog_swiper = new Swiper(".blog-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1199: {
      slidesPerView: 3,
    }
  }
});

// Testimonial
const testimonial = new Swiper(".testimonial-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
  },
  spaceBetween: 40,
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 2
    }
  }
});


// counter
$('.counter-number').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {
    duration: 2000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
}); 

// //animation
// sal({
//   'threshold': 0.01,
//   once: false
// });

// Fancybox.bind("[data-fancybox]", {
//   // Your custom options
// });
// Fancybox.bind('[data-fancybox="gallery1"]', {
//   Thumbs: false,
//   Toolbar: false
// });