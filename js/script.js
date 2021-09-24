
// jQuery
$(function() {

  // ハンバーガーメニュー
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
  }); // ハンバーガーメニュー（ここまで）

});

// AOS.js
AOS.init({
  offset: 100,
    // アニメーションの開始位置（トリガーの元の位置より100px下に設定）
    // offset (in px) from the original trigger point    
    
    delay: 0, 
    // 遅延 values from 0 to 3000, with step 50ms
    
    duration: 1000, 
    // アニメーションにかける時間（1000ミリ秒かける）
    // values from 0 to 3000, with step 50ms

    easing: 'ease', 
    // アニメーションの仕方　default easing for AOS animations
    
    once: true, 
    // trueにすると、1回だけ実行され、falseだとずっと実行される
    // whether animation should happen only once - while scrolling down
    
    mirror: false, 
    // 要素をスクロールしながら、アニメーション化する必要があるかどうか
    // whether elements should animate out while scrolling past them
    
    anchorPlacement: 'top-bottom', 
    // アニメーション開始のスクロール位置
    // defines which position of the element regarding to window should trigger the animation
});
