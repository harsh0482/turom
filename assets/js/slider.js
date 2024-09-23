
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
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
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

// popular-destination-swiper
var popular_destination_swiper = new Swiper(".popular-destination-swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 1500,
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
const swiper4 = new Swiper(".testi_monial", {
    slidesPerView: 2,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    // freeMode: true,
    speed: 2000,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        767: {
            slidesPerView: 2,
        }
    }
});

// service slider
const service = new Swiper(".service-swiper", {
    slidesPerView: 3,
    spaceBetween: 24,
    speed: 1500,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
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
//tour_swiper
const tour_swiper = new Swiper(".tour_swiper", {
    freeMode: true,
    effect: "fade",
    loop: true,
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    thumbs:{
        swiper:".tour_thum_swiper",
    }
})
//tour_thum_swiper
const tour_thum_swiper = new Swiper(".tour_thum_swiper", {
    effect: "slide",
    loop: true,
    spaceBetween: 24,
    speed: 1500,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        576: {
            slidesPerView: 2,
        },
        767: {
            slidesPerView: 2,
        },
        1199: {
            slidesPerView: 3,
        }
    }
})

// slider meet-guide-swiper
const guider_details_swiper = new Swiper(".guider_details_swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    speed: 1000,
    pagination: {
        el: ".swiper-pagination",
        clickable: !0,
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
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30
        },
        1199: {
            slidesPerView: 3,
            spaceBetween: 30
        }
    }
});