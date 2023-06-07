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

let mapContainer = document.getElementById("map");
if(mapContainer){
  function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      center: {lat: 55.7558, lng: 37.6176},
      zoom: 12,
      disableDefaultUI: false,

      styles: [
        {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
            {
              "color": "#ffffff"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "all",
          "elementType": "labels.icon",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            },
            {
              "weight": 1.2
            }
          ]
        },
        {
          "featureType": "administrative",
          "elementType": "labels",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "administrative.province",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.locality",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "saturation": "-100"
            },
            {
              "lightness": "30"
            }
          ]
        },
        {
          "featureType": "administrative.neighborhood",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "simplified"
            },
            {
              "color": "#212121"
            }
          ]
        },
        {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 20
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "all",
          "stylers": [
            {
              "lightness": "3"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 21
            }
          ]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [
            {
              "visibility": "simplified"
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.fill",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 29
            },
            {
              "weight": 0.2
            }
          ]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 18
            }
          ]
        },
        {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 16
            }
          ]
        },
        {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 19
            }
          ]
        },
        {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 17
            }
          ]
        },
        {
          "featureType": "landscape.man_made",
          "elementType": "geometry",
          "stylers": [
            {
              "color": "#000000"
            },
            {
              "lightness": 3
            }
          ]
        },
        {
          "featureType": "poi",
          "stylers": [
            {
              "visibility": "off"
            }
          ]
        }
      ]
      
    });

    if(mapContainer.dataset.settings === 'area'){
      const polygon = new google.maps.Polygon({
        paths: [
          {lat: 55.773, lng: 37.600},
          {lat: 55.775, lng: 37.655},
          {lat: 55.740, lng: 37.655},
          {lat: 55.740, lng: 37.580},
        ],
        strokeWeight: 0,
        fillColor: "#ffffff",
        fillOpacity: 0.22,
        map: map
      });
    };

    if(mapContainer.dataset.settings === 'marker'){
      map.zoom = 18;
      map.disableDefaultUI = true;

      const markerPositionFirst = {lat: 55.7562, lng: 37.6175};
      const markerPositionSecond = {lat: 55.7555, lng: 37.6165};

      const markerFirst = new google.maps.Marker({
        position: markerPositionFirst,
        map: map,
        icon: '../img/icons/marker.svg'
      });
      const markerSecond = new google.maps.Marker({
        position: markerPositionSecond,
        map: map,
        icon: '../img/icons/marker.svg'
      });

    }

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

  [].slice.call( document.querySelectorAll( '.input__field' ) ).forEach( function( inputEl ) {
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
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    993: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1400: {
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

$('.filter__link').click(function(e){
  e.preventDefault();
  $('#filter').toggleClass('show');
  $('body').toggleClass('overflow-none');
});

// card
new Swiper(".card-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".tab-nav", {
  freeMode: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 7,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 7,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 7,
      spaceBetween: 50,
    },
  },
});

// about
new Swiper(".history-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Swiper(".team-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".team-next",
    prevEl: ".team-prev",
  },
});

new Swiper(".gallery-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
});


new Swiper(".gallery-modal-slider", {
  loop: true,
  slidesPerView: 1,
  thumbs: {
    swiper: {
      el: ".thumbs-slider",
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      breakpoints: {
        "@0.00": {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    },
  },
  nested: true,
  navigation: {
    nextEl: ".gallery-modal-next",
    prevEl: ".gallery-modal-prev",
  },
});

$('.certificates-nav .nav-slider__link').click(function(e){
  e.preventDefault();
  let category = $(this).data('category');
  let items = document.querySelectorAll('.file-item');
  $('.nav-slider__link').removeClass('active');
  $(this).addClass('active');

  items.forEach(item => {
    if($(item).data('category') === category){
      $(item).removeClass('collapse')
    } else{
      $(item).addClass('collapse')
    }
  })
})

new Swiper(".certificates-slider", {
  slidesPerView: 2,
  spaceBetween: 5,
  loop: true,
  breakpoints: {
    768: {
      spaceBetween: 20,
    },
  },
  navigation: {
    nextEl: ".certificates-next",
    prevEl: ".certificates-prev",
  },
});

// blog
new Swiper(".blog-nav-slider", {
  freeMode: true,
  breakpoints: {
    "@0.00": {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 4,
      spaceBetween: 15,
    },
    993: {
      slidesPerView: 6,
      spaceBetween: 15,
    },
    1400: {
      slidesPerView: 8,
      spaceBetween: 15,
    },
  },
});

new Swiper(".article-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// reviews
if(window.innerWidth < 992){
  new Swiper(".platforms-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
};

new Swiper(".messenger-slider", {
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
  navigation: {
    nextEl: ".messenger-next",
    prevEl: ".messenger-prev",
  },
});
