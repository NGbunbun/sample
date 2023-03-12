$(function(){

    //----------------------------------
    //ヘッダーの表示切り替え
    //----------------------------------
    $(window).scroll(function(){
        //トップページより下に移動したら、ヘッダー表示
        if($(this).scrollTop()>200){
            $('.header').addClass('header-active');
        }else{
            $('.header').removeClass('header-active');
        }
    });

    //----------------------------------
    //画面内に入ったら下からふわっと
    //----------------------------------
    //動きのきっかけにするアニメーション名を定義
    function fadeUpTrigger(){
        //複数あるfadeUpTriggerクラスをそれぞれ個別に適用
        $('.fadeUpTrigger').each(function(){
            //対象要素より100px下の
            var elemPos=$(this).offset().top+50;
            var scroll=$(window).scrollTop();
            var windowHeight=$(window).height();
            //画面内に入ったらfadeUpクラス追加、画面外に出たらfadeUpクラスを外す
            if(scroll>=elemPos-windowHeight){
                $(this).addClass('fadeUp');
            }else{
                $(this).removeClass('fadeUp');
            }
        });
    }
    //画面をスクロールする度に定義した関数を呼び出す
    $(window).scroll(function(){
        fadeUpTrigger();
    });
    

    //----------------------------------
    //トレーナータブの切り替え
    //----------------------------------
    $tabs=$('.tab-name');
    $('.tab-name').click(function(){
        $('.tab-active').removeClass('tab-active');
        $(this).addClass('tab-active');

        const index=$tabs.index(this);
        $('.tab-content').removeClass('show').eq(index).addClass('show');
    });

    //----------------------------------
    //スライダー
    //----------------------------------
    //Swiperの初期化
    const swiper = new Swiper('.swiper',{
        //最初に戻るようにする
        loop: true,
        // ページネーションが必要なら追加
        pagination: {
            el: ".swiper-pagination"
        },
        // ナビボタンが必要なら追加
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    });

    //----------------------------------
    //Priceページのスクロールイベント
    //----------------------------------
    $('.course-wrap').scroll(function(){
        //横スクロールしたら、アイコン消す
        if($(this).scrollLeft()>20){
            $('.scroll-icon-wrap').fadeOut();
        }
    });

    //----------------------------------
    //FAQのページのアコーディオン
    //----------------------------------
    $('.question').click(function(){
        $(this).toggleClass('active');
        $(this).next().slideToggle(300);
    });

    //----------------------------------
    //トップページへ戻るボタン
    //----------------------------------
    $(window).scroll(function(){
        //下にスクロールしたらボタン表示
        if($(this).scrollTop()>300){
            $('.page-top').fadeIn();
        } else{
            $('.page-top').fadeOut();
        }
    });
    
    $('.page-top').click(function(){
        //クリックしたらトップページに戻る
        $('html,body').animate({
            scrollTop:0
        },500);
        return false;
    });

});
