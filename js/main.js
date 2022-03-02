$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).css('opacity','1');
            }
        });
    });
});


function scr_ani(scr,offs_max){
  var
  window_h = $(window).height(),
  offs_length = $('.offs').filter(':visible').length,
  ons_length = $('.ons').filter(':visible').length,
  wh_pos = 15;
  if(offs_length){
    var first_item = offs_max - offs_length;
    for (var i=0; i<offs_length; i++) {
      var data_scr = first_item + i;
      var offs = $('.offs[data-scr="' + data_scr + '"]');
      var target = offs.offset().top;
      var trigger = target - (window_h + scr - window_h * wh_pos / 100);
      if(trigger < 0){
        offs.removeClass('offs').addClass('ons');
      }else{
        break;
      }
    }
  }
  if(ons_length){
    var last_item = ons_length - 1;
    for (var i=0; i<ons_length; i++) {
      var data_scr = last_item - i;
      var ons = $('.ons[data-scr="' + data_scr + '"]');
        var target = ons.offset().top;
      var trigger = target - (window_h + scr);
      if(trigger > 0){
        ons.removeClass('ons').addClass('offs');
      }else{
        break;
      }
    }
  }
};

$(function(){

  var cnt = 0;
  for (var i=0; i<$('.offs').length; i++) {
    if($('.offs').eq(i).is(':visible')){
      $('.offs').eq(i).attr('data-scr',cnt);
      cnt++;
    }
  }

  var offs_max = $('.offs').filter(':visible').length;

  var scr = $(window).scrollTop();
  scr_ani(scr,offs_max);

  /************
  スクロール時
  ************/
  $(window).on('scroll', function(){
    var scr = $(window).scrollTop();
    scr_ani(scr,offs_max);
  });// end scroll

});


$(function(){
  var pagetop = $('#page_top');
  pagetop.hide();
  $(window).scroll(function () {
     if ($(this).scrollTop() > 750) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

$(function(){
    $(window).scroll(function (){
        $('.sec_img').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).addClass('anim');
            }
        });
    });
});

$(function(){
    $(window).scroll(function (){
        $('.mask').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100){
                $(this).addClass('anim');
            }
        });
    });
});


