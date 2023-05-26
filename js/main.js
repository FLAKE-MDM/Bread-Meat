// home
new Swiper(".home-slider", {
  slidesPerView: 1,
  spaceBetween: 22,
  loop: true,
});

new Swiper(".advantages-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".review-next",
    prevEl: ".review-prev",
  },
});

new Swiper(".popular-slider", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".popular-next",
    prevEl: ".popular-prev",
  },
});

// input number
jQuery(($) => {
  $(document).on('click', '.input-number__minus', function () {
      let total = $(this).next();
      if (total.val() > 1) {
          total.val(+total.val() - 0.5);
      } else{
        $(this).parents('.btn-wrapper').find('.btn-add').removeClass('collapse');
        $(this).parents('.fake-btn').addClass('collapse');
      }
  });
  $(document).on('click', '.input-number__plus', function () {
      let total = $(this).prev();
      total.val(+total.val() + 0.5);
  });
  document.querySelectorAll('.input-number__input').forEach(function (el) {
      el.addEventListener('input', function () {
          this.value = this.value.replace(/[^\d]/g, '');
      });
  });
});
$('.btn-add').click(function (e) {
  e.preventDefault();
  $(this).addClass('collapse');
  $(this).parents('.btn-wrapper').find('.fake-btn').removeClass('collapse');
})

new Swiper(".steps-slider", {
  slidesPerView: 2,
  breakpoints: {
    992: {
      slidesPerView: 4,
    },
  },
});

if(window.innerWidth < 1200){
  new Swiper(".recipes-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

if(document.getElementById("map")){
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 55.7558, lng: 37.6176},
      zoom: 12,
      styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    });
  }

  window.initMap = initMap;
}


(function() {
  if (!String.prototype.trim) {
    (function() {
      var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      String.prototype.trim = function() {
        return this.replace(rtrim, '');
      };
    })();
  }

  [].slice.call( document.querySelectorAll( 'input.input__field' ) ).forEach( function( inputEl ) {
    if( inputEl.value.trim() !== '' ) {
      classie.add( inputEl.parentNode, 'input--filled' );
    }

    // events:
    inputEl.addEventListener( 'focus', onInputFocus );
    inputEl.addEventListener( 'blur', onInputBlur );
  } );

  function onInputFocus( ev ) {
    classie.add( ev.target.parentNode, 'input--filled' );
  }

  function onInputBlur( ev ) {
    if( ev.target.value.trim() === '' ) {
      classie.remove( ev.target.parentNode, 'input--filled' );
    }
  }
})();

$('.btn-menu').click(function(){
  $(this).toggleClass('collapsed');
  $('.navbar').toggleClass('show');
  $('body').toggleClass('overflow-none');
});

$('.catalogue-link').click(function(e){
  e.preventDefault();
  $('.catalogue-link').toggleClass('collapsed');
  $('.catalogue-dropdown').toggleClass('show');
  $('body').toggleClass('overflow-none');
})

$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
})

// catalogue
new Swiper(".nav-slider", {
  freeMode: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 3,
      spaceBetween: 1,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    993: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1200: {
      slidesPerView: 8,
      spaceBetween: 15,
    },
  },
});

let block = document.getElementById('filter');
let timeoutId;
$('#filter').click(function(e){
  if(e.target.tagName === 'LABEL' || e.target.tagName === 'INPUT'){
    blockRect = block.getBoundingClientRect();
    let offsetY = e.clientY - blockRect.top - 10;
    $('.filter__footer').css('top', offsetY);
    $('.filter__footer').addClass('show');
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
      $('.filter__footer').removeClass('show');
    }, 2000);
  }
});

$('.dropdown-select__link').click(function(e){
  e.preventDefault();
  $('.dropdown-select__link').removeClass('active');
  $(this).addClass('active');
  $(this).parents().find('.catalogue-selected').html(this.innerHTML);
});

new Swiper(".recommend-slider", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".recommend-next",
    prevEl: ".recommend-prev",
  },
});

new Swiper(".additionally-slider", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".additionally-next",
    prevEl: ".additionally-prev",
  },
});
new Swiper(".watched-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});

if(document.getElementById("map-area")){
  function initMapArea() {
    const map = new google.maps.Map(document.getElementById("map-area"), {
      center: {lat: 55.7558, lng: 37.6176},
      zoom: 12,
      styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.province","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.locality","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"30"}]},{"featureType":"administrative.neighborhood","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"all","stylers":[{"visibility":"simplified"},{"gamma":"0.00"},{"lightness":"74"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"lightness":"3"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]
    });

    const polygon = new google.maps.Polygon({
      paths: [
        {lat: 55.760, lng: 37.580},
        {lat: 55.770, lng: 37.650},
        {lat: 55.740, lng: 37.670},
        {lat: 55.720, lng: 37.540},
      ],
      strokeWeight: 0,
      fillColor: "#ffffff",
      fillOpacity: 0.22,
      map: map
    });
  }

  window.initMap = initMapArea;
}




// fake-select
// $('.fake-select__item').click(function(){
//   $(this).parents(".fake-select").find('.fake-select__item').removeClass('fake-select__item_active active');
//   $(this).addClass('fake-select__item_active');
//   $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
//   $(this).parents('.fake-select').find('.fake-select__link').addClass('active');
// });

// new Swiper(".product-slider", {
//   slidesPerView: 1,
//   spaceBetween: 16,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
// });

// window.onscroll = function checkScroll() {
//   if (document.documentElement.scrollTop < 1){
//     $('.header__info').show(300);
//     $('.header').removeClass('header_fixed');
//   } else {
//     $('.header__info').hide(300);
//     $('.header').addClass('header_fixed');
//   }
// };

// new Swiper(".catalogue-slider", {
//   slidesPerView: 2,
//   spaceBetween: 11,
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     1400: {
//       slidesPerView: 5,
//       spaceBetween: 24,
//     },
//   },
// });

// // pane
// $('.pane-open').click(function(e){
//   e.preventDefault();
//   $('body').addClass('overflow-none');
//   $('.pane').removeClass('show');
//   $($(this).attr('href')).addClass('show');
//   if($(this).attr('href') == '#nav'){
//     $('.pane-close__link-nav').addClass('show');
//   } else{
//     $('.pane-close__link').addClass('show');
//   }
// })
// $('.pane-close').click(function(e){
//   e.preventDefault();
//   $('body').removeClass('overflow-none');
//   $('.pane').removeClass('show');
//   $('.pane-close__link, .pane-close__link-nav').removeClass('show');
// });

// let loginForm = document.querySelector("#form-phone");

// loginForm.addEventListener("submit", function(e){
//   e.preventDefault();

//   let phone = document.querySelector("#phone");
//   let errorMess = document.querySelector("#phoneError");

//   if(phone.value == ""){
//     $(errorMess).removeClass("collapse");
//     errorMess.textContent = "Заполните поле"
//     $(phone).addClass("has-error");
//   } else if((phone.value.length != 10)){
//     $(errorMess).removeClass("collapse");
//     errorMess.textContent = "Неверный формат"
//     $(phone).addClass("has-error");
//     console.log();
//   } else{
//     $('.pane').removeClass('show');
//     $('body').addClass('overflow-none');
//     $('.pane').removeClass('show');
//     $("#code-pane").addClass('show');
//   }
// })

// let codeGroupInputs = document.querySelectorAll("#code-group input")

// for(let i = 0; i < codeGroupInputs.length; i++){
//   codeGroupInputs[i].addEventListener("input", function(){
//     if(codeGroupInputs[i].value != ""){
//       codeGroupInputs[i+1].focus()
//     }
//   })
// }

// $(".pass-view").click(function(e){
//   e.preventDefault();
//   let inputPass = document.querySelector("#pass");;
//   if (inputPass.type == "password"){
//     inputPass.type = "text"
//   } else{
//     inputPass.type = "password"
//   }
// })


// // catalogue
// $( function() {
//   $( "#price-range" ).slider({
//     range: true,
//     min: 2900,
//     max: 60000,
//     values: [ 2900, 33900 ],
//     slide: function( event, ui ) {
//       $( "#price-min" ).val(ui.values[ 0 ] );
//       $( "#price-max" ).val(ui.values[ 1 ] );
//     }
//   });
//   $( "#price-min" ).val($( "#price-range" ).slider( "values", 0 ));
//     $( "#price-max" ).val($( "#price-range" ).slider( "values", 1 ) );
// });
// $('.tag-del').click(function(){
//   $(this).parent().remove()
// })

// // item
// new Swiper(".product-item-slider", {
//   loop: true,
//   slidesPerView: 1,
//   thumbs: {
//     swiper: {
//       el: ".product-item-thumbs",
//       slidesPerView: 4,
//       spaceBetween: 16,
//       breakpoints: {
//         "@0.00": {
//           slidesPerView: 4,
//         },
//         992: {
//           slidesPerView: 5,
//           spaceBetween: 16,
//           direction: "vertical",
//         },
//         1200: {
//           slidesPerView: 6,
//           spaceBetween: 16,
//           direction: "vertical",
//         },
//       },
//     },
//   },
// });

// if(window.innerWidth > 991){
//   $(function(){
//     var topPos = $('.floating').offset().top;
//      $(window).scroll(function() {
//      var top = $(document).scrollTop(),
//          pip = $('.stoper').offset().top,
//          height = $('.floating').outerHeight();
//      if (top > topPos && top < pip - height) {$('.floating').addClass('fixed').removeAttr("style");}
//      else if (top > pip - height) {$('.floating').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
//      else {$('.floating').removeClass('fixed');}
//      });
//    });
// }

// new Swiper(".tab-nav-slider", {
//   slidesPerView: "auto",
//   spaceBetween: 47,
//   freeMode: true,
// });

// // order
// $('.radio-list__item').click(function(){
//   $(this).parent().find('.radio-list__item').removeClass('active');
//   $(this).addClass('active');
// })



// // certificates
// new Swiper(".certificates-slider", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// new Swiper(".tab-nav-slider__margin-md", {
//   slidesPerView: "auto",
//   spaceBetween: 24,
//   freeMode: true,
//   breakpoints: {
//     992: {
//       spaceBetween: 47,
//     },
//   },
// });

// // calculator


// $( function() {
//   $( "#weight-range" ).slider({
//     range: "max",
//     min: 1,
//     max: 200,
//     value: 89,
//     slide: function( event, ui ) {
//       $( "#weight-range-value" ).val( ui.value );
//     }
//   });
//   $( "#weight-range-value" ).val( $( "#weight-range" ).slider( "value" ) );
// } );

// $(".tab-nav-btn__label").click(function(){
//   $(this).parents(".tab-nav-btn").find(".tab-nav-btn__label").removeClass("active");
//   $(this).addClass("active");
// })

// // profile
// // // datepicker
// $( "#birthday" ).datepicker( $.datepicker.regional[ "ru" ] );
// $( "#birthday" ).datepicker( "option", "dateFormat", "d MM y" );

// $("#add-address").click(function(e){
//   e.preventDefault();
//   let addressGroup = document.querySelector("#address-group");

//   addressGroup.insertAdjacentHTML("beforeend", '<div class="form-group_margin-sm address-item pos-rel"><input type="email" class="form-control form-control_lg"  placeholder="Введите адрес"></div>')
// })

// $(".address-item__link").click(function(e){
//   e.preventDefault();
//   $(this).parent().find(".form-control").removeAttr("disabled")
//   this.style.display = "none"
// })

// $(".history-item__link").click(function(e){
//   e.preventDefault();
//   $(this).parent().toggleClass("active")
// })

