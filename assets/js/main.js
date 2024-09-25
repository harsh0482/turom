//*** Loader Show ***//
$(window).on('load', function(){
  $('.codex-loader').fadeOut();
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


//header sticky
$(window).scroll(function () {
  if ($(this).scrollTop() > 80) {
    $('.header').addClass("sticky");
  } else {
    $('.header').removeClass("sticky");
  }
});


// //child_dropdown_menu
// $('.child_dropdown_menu > a').hover(function(){
//   $(this).toggleClass('active');
// });

//dropdown
if ($(window).width() < 1200) {
  $(".dropdown_list,.child_dropdown_list").slideUp('');
  $(".menu-list li.menu_item > a").on("click", function () {
    $(this).parents('.mobile-menu').find(".dropdown_list").slideUp('');
    $(this).parents('.mobile-menu').find(".child_dropdown_list").slideUp('');
    // $(this).removeClass("active");
    if ($(this).next(".dropdown_list").is(':hidden')) {
      $(this).next(".dropdown_list").slideToggle('');
      // $(this).toggleClass("active");
    }
  });
  $(".child_dropdown_list li > a" ).on( "click", function() {      
    $(this).parents('.dropdown_list').find(".child_dropdown_list").slideUp('');         
    if($(this).next(".child_dropdown_list").is(':hidden')){
      $(this).next(".child_dropdown_list").slideToggle('');  
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
  $(".destination-item").on("click", (function () {
    $(this).addClass("active").siblings().removeClass("active")
  }));

  //sorting-filter-wrap

  $('.sorting-filter-wrap .tab_list_btn').on('click', function (e) {
    if ($(this).hasClass('de_list')) {
      $('.single_card').addClass('de_list').removeClass('grid');
      $(this).addClass('btnactive');
      $('.grid').removeClass('btnactive');

    }
    else if ($(this).hasClass('grid')) {
      $('.single_card').addClass('grid').removeClass('de_list');
      $(this).addClass('btnactive');
      $('.de_list').removeClass('btnactive');
    }
  });

  //gallery page

  $('.buttons').click(function () {

    $(this).addClass('active').siblings().removeClass('active');

    let filter = $(this).attr('data-filter')

    if (filter == 'all') {
      $('.image_box').show(400);
    } else {
      $('.image_box').not('.' + filter).hide(200);
      $('.image_box').filter('.' + filter).show(400);
    }
  });
  
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

// offer-deals
$('.offer-deals .accordion-tab-item').hover(function () {
  var value = $(this).attr('data-src');
  $('#card-cover').attr('src', value);
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

// quantity countr
let value = 1
$(".counter").val(value);
$('.increment').on("click", function() {
  value = parseInt(value+1);
  $(".counter").val(value);
});
$('.decrement').on("click", function(){
  if(value > 1){
    value = parseInt(value-1);
    $(".counter").val(value);
  }else{
    value = 1;
    $(".counter").val(value);
  }
});

