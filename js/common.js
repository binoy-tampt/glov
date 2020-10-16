$(document).ready(function () {
  
  showDescription();
  choiceCard();

  $('textarea').on('focus', sendMessage);

});

function showDescription() {

  var content = $('.aside__content');
  var contentInitialHeight = content.height();
  var innerHeight = $('.aside__inner').height();
  var button = $('.aside__button');

  $(window).on('resize', function () {

    content.removeAttr('style');
    button.removeClass('opened');

    contentInitialHeight = content.height();
    innerHeight = $('.aside__inner').height();

  });

  button.on('click', function () {

    var self = $(this);

    if (!self.hasClass('opened')) {
      content.animate({'height': innerHeight}, 300);
      self.addClass('opened')
    } else {
      content.animate({'height': contentInitialHeight}, 300);
      self.removeClass('opened')
    }

  });


}

function choiceCard() {

  var choiceElement = $('[data-choice]');
  var content = $('[data-chosen]');


  choiceElement.on('click', function () {

    var self = $(this);
    var chosenID = self.data('choice');

    if (choiceElement.hasClass('show')) {
      return
    } else {
      choiceElement.not(self).addClass('disabled');
      self.addClass('show');
      setTimeout(function () {
        $('[data-hidden]').slideDown();
      }, 400)
    }

    $('html, body').animate({scrollTop: self.offset().top - 30}, 500);

    content.filter('[data-chosen="' + chosenID + '"]').slideDown(500);

  });

}

function sendMessage () {

  var textarea = $('textarea');
  var sendButton = $('.user__send');

  sendMessage.showButton = function () {
    if (textarea.val() == '') {
      sendButton.slideUp();
    } else {
      sendButton.slideDown();
    }
  };

  sendMessage.showReport = function () {
    $('[data-message]').fadeOut(100, function () {
      $('[data-report]').fadeIn(200);
    });

  };

  textarea.on('input', sendMessage.showButton);
  $('.user__button').on('click', sendMessage.showReport);

}