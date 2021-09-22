$(function() {
  $('.js-btn').click(function() {
  // クリックされたとき、
    
    if($('.js-btn').hasClass('open')){
    // .js-btnが.openを持っているとき、

      $('.menu').fadeOut();
      // .menuを非表示に

      $('.js-btn, .btn-line').removeClass('open')
      // .openを除く

    }else{
      // .js-btnが.openを持っていないとき、
      
      $('.menu').fadeIn();
      // .menuを表示に

      $('.js-btn, .btn-line').addClass('open')
      // .openを付与
      
    }

  });
  
});