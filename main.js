"use strict";

var _jquery = _interopRequireDefault(require("jquery"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*[ Load page ]
===========================================================*/
(0, _jquery.default)(".animsition").animsition({
  inClass: 'fade-in',
  outClass: 'fade-out',
  inDuration: 1500,
  outDuration: 800,
  linkElement: '.animsition-link',
  loading: true,
  loadingParentElement: 'html',
  loadingClass: 'animsition-loading-1',
  loadingInner: '<div class="cp-spinner cp-meter"></div>',
  timeout: false,
  timeoutCountdown: 5000,
  onLoadEvent: true,
  browser: ['animation-duration', '-webkit-animation-duration'],
  overlay: false,
  overlayClass: 'animsition-overlay-slide',
  overlayParentElement: 'html',
  transition: function transition(url) {
    window.location.href = url;
  }
});
/*[ Back to top ]
===========================================================*/

var windowH = (0, _jquery.default)(window).height() / 2;
(0, _jquery.default)(window).on('scroll', function () {
  if ((0, _jquery.default)(this).scrollTop() > windowH) {
    (0, _jquery.default)("#myBtn").css('display', 'flex');
  } else {
    (0, _jquery.default)("#myBtn").css('display', 'none');
  }
});
(0, _jquery.default)('#myBtn').on("click", function () {
  (0, _jquery.default)('html, body').animate({
    scrollTop: 0
  }, 300);
});
/*[ Select ]
===========================================================*/

(0, _jquery.default)(".selection-1").select2({
  minimumResultsForSearch: 20,
  dropdownParent: (0, _jquery.default)('#dropDownSelect1')
});
/*[ Daterangepicker ]
===========================================================*/

(0, _jquery.default)('.my-calendar').daterangepicker({
  "singleDatePicker": true,
  "showDropdowns": true,
  locale: {
    format: 'DD/MM/YYYY'
  }
});
var myCalendar = (0, _jquery.default)('.my-calendar');
var isClick = 0;
(0, _jquery.default)(window).on('click', function () {
  isClick = 0;
});
(0, _jquery.default)(myCalendar).on('apply.daterangepicker', function () {
  isClick = 0;
});
(0, _jquery.default)('.btn-calendar').on('click', function (e) {
  e.stopPropagation();
  if (isClick == 1) isClick = 0;else if (isClick == 0) isClick = 1;

  if (isClick == 1) {
    myCalendar.focus();
  }
});
(0, _jquery.default)(myCalendar).on('click', function (e) {
  e.stopPropagation();
  isClick = 1;
});
(0, _jquery.default)('.daterangepicker').on('click', function (e) {
  e.stopPropagation();
});
/*[ Play video 01]
===========================================================*/

var srcOld = (0, _jquery.default)('.video-mo-01').children('iframe').attr('src');
(0, _jquery.default)('[data-target="#modal-video-01"]').on('click', function () {
  (0, _jquery.default)('.video-mo-01').children('iframe')[0].src += "&autoplay=1";
  setTimeout(function () {
    (0, _jquery.default)('.video-mo-01').css('opacity', '1');
  }, 300);
});
(0, _jquery.default)('[data-dismiss="modal"]').on('click', function () {
  (0, _jquery.default)('.video-mo-01').children('iframe')[0].src = srcOld;
  (0, _jquery.default)('.video-mo-01').css('opacity', '0');
});
/*[ Fixed Header ]
===========================================================*/

var header = (0, _jquery.default)('header');
var logo = (0, _jquery.default)(header).find('.logo img');
var linkLogo1 = (0, _jquery.default)(logo).attr('src');
var linkLogo2 = (0, _jquery.default)(logo).data('logofixed');
(0, _jquery.default)(window).on('scroll', function () {
  if ((0, _jquery.default)(this).scrollTop() > 5 && (0, _jquery.default)(this).width() > 992) {
    (0, _jquery.default)(logo).attr('src', linkLogo2);
    (0, _jquery.default)(header).addClass('header-fixed');
  } else {
    (0, _jquery.default)(header).removeClass('header-fixed');
    (0, _jquery.default)(logo).attr('src', linkLogo1);
  }
});
/*[ Show/hide sidebar ]
===========================================================*/

(0, _jquery.default)('body').append('<div class="overlay-sidebar trans-0-4"></div>');
var ovlSideBar = (0, _jquery.default)('.overlay-sidebar');
var btnShowSidebar = (0, _jquery.default)('.btn-show-sidebar');
var btnHideSidebar = (0, _jquery.default)('.btn-hide-sidebar');
var sidebar = (0, _jquery.default)('.sidebar');
(0, _jquery.default)(btnShowSidebar).on('click', function () {
  (0, _jquery.default)(sidebar).addClass('show-sidebar');
  (0, _jquery.default)(ovlSideBar).addClass('show-overlay-sidebar');
});
(0, _jquery.default)(btnHideSidebar).on('click', function () {
  (0, _jquery.default)(sidebar).removeClass('show-sidebar');
  (0, _jquery.default)(ovlSideBar).removeClass('show-overlay-sidebar');
});
(0, _jquery.default)(ovlSideBar).on('click', function () {
  (0, _jquery.default)(sidebar).removeClass('show-sidebar');
  (0, _jquery.default)(ovlSideBar).removeClass('show-overlay-sidebar');
});
/*[ Isotope ]
===========================================================*/

var $topeContainer = (0, _jquery.default)('.isotope-grid');
var $filter = (0, _jquery.default)('.filter-tope-group'); // filter items on button click

$filter.each(function () {
  $filter.on('click', 'button', function () {
    var filterValue = (0, _jquery.default)(this).attr('data-filter');
    $topeContainer.isotope({
      filter: filterValue
    });
  });
}); // init Isotope

(0, _jquery.default)(window).on('load', function () {
  var $grid = $topeContainer.each(function () {
    (0, _jquery.default)(this).isotope({
      itemSelector: '.isotope-item',
      percentPosition: true,
      animationEngine: 'best-available',
      masonry: {
        columnWidth: '.isotope-item'
      }
    });
  });
});
var labelGallerys = (0, _jquery.default)('.label-gallery');
(0, _jquery.default)(labelGallerys).each(function () {
  (0, _jquery.default)(this).on('click', function () {
    for (var i = 0; i < labelGallerys.length; i++) {
      (0, _jquery.default)(labelGallerys[i]).removeClass('is-actived');
    }

    (0, _jquery.default)(this).addClass('is-actived');
  });
});