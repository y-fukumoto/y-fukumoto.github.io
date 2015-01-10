(function() {
  $(function() {
    var cube, nav, panel, rotate, wH, wW;
    wW = $(window).width();
    wH = $(window).height();
    cube = $('.cube');
    panel = $('.panel');
    cube.css({
      'transform': 'translateZ(-' + wH / 2 + 'px)'
    });
    cube.css({
      width: wW,
      height: wH
    });
    panel.css({
      width: wW,
      height: wH
    });
    $('.bottom').css({
      bottom: -wH / 2
    });
    $('.top').css({
      top: -wH / 2
    });
    $('.front').css({
      'transform': 'translateZ(' + wH / 2 + 'px)'
    });
    $('.back').css({
      'transform': 'translateZ(-' + wH / 2 + 'px) rotateX(180deg)'
    });
    rotate = function(e) {
      var deg, el;
      e.preventDefault();
      el = $(e.currentTarget);
      deg = el.data('deg');
      if (!el.hasClass('.active')) {
        $('.scale').css({
          'transform': 'translateZ(-200px)'
        });
        setTimeout(function() {
          cube.css({
            'transform': 'translateZ(-' + wH / 2 + 'px) rotateX(' + deg + 'deg)'
          });
          return setTimeout(function() {
            return $('.scale').css({
              'transform': 'translateZ(0px)'
            });
          }, 500);
        }, 500);
      }
      nav.find('a').removeClass('active');
      return el.addClass('active');
    };
    nav = $('.nav');
    return nav.find('a').on('click', rotate);
  });

}).call(this);
