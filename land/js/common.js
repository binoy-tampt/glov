$(document).ready(function () {

  reviewSlider();
  negativeSlider();

  $('.goToForm').on('click', function () {
    $('html, body').animate({scrollTop: $('form').offset().top - 100}, 700)
  })

});

$(document).on('scroll', function () {
  elementsShower();
});

function negativeSlider() {

  var container = $('.negative__wrap');

  settings = {
    adaptiveHeight: true,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  if ($(window).width() <= 989) {
    container.slick(settings)
  }

  $(window).on('resize', function () {
    if ($(window).width() >= 990) {
      if (container.hasClass('slick-initialized')) {
        container.slick('unslick')
      }
    } else if (!container.hasClass('slick-initialized')) {
      container.slick(settings)
    }
  })

}

function reviewSlider() {

  var container = $('.reviews__wrap');

  settings = {
    adaptiveHeight: true,
    dots: true,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          arrows: false,
        }
      },
    ]
  };

  container.slick(settings);

}

function elementsShower() {

  var element = $('[data-hidden]');
  var winHeight = $(window).height();
  var scroll = $(document).scrollTop();

  element.each(function () {

    var self = $(this);
    var elementPosition = self.offset().top;

    if (scroll > (elementPosition - (winHeight / 1.3))) {
      self.addClass('show');
    }

  })

}