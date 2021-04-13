$(document).ready(function(){
    // header
    $('#header_top_store li a').hover(function(){
        $(this).css({
            color : 'black'
        });
    },function(){
        $(this).css({
            color : '#848484'
        });
    });

    $('#menu_wrap').hover(function(){
        $('.sub_menu').stop().animate({
            height : '8.33vw'
        },1000);
    },function(){
        $('.sub_menu').stop().animate({
            height : 0
        },300);
    });


    $('.sub_menu li a').hover(function(){
        $(this).css({
            color : '#d0112b'
        });
    },function(){
        $(this).css({
            color : '#848484'
        });
    });

    // header End


    // drip slide mask
    $('#drip_next_icon').click(function(){
        $('#drip_slide_wrap').animate({
            left : '-100vw',
        },500);
    });
    $('#drip_prev_icon').click(function(){
        $('#drip_slide_wrap').animate({
            left : 0,
        },500);
    });
    // appenTo, prependTo 활용하기!!
    // drip slide mask End

    // menu banner
    $('#menu_banner_more').hover(function(){
        $(this).css({
            backgroundColor : '#ffffff'
        });
        $('#menu_banner_more a').css({
            color : '#d0112b'
        });
    },function(){
        $(this).css({
            backgroundColor : '',
        });
        $('#menu_banner_more a').css({
            color : '#ffffff'
        });
    });
    // menu banner End

    // franchise banner
    $('.franchise_banner_btn').hover(function(){
        $(this).css({
            backgroundColor : '#ffffff'
        });
        $(this).children('a').css({
            color : '#d0112b'
        });
    },function(){
        $(this).css({
            backgroundColor : ''
        });
        $(this).children('a').css({
            color : '#ffffff'
        });
    });
    // franchise banner End
    
    // footer
    let family_click = 0;
    $('#footer_familysite').click(function(){
        family_click++;
        if(family_click % 2 == 1){
            $('#footer_familysite_more').stop().animate({
                height : '14.0625vw'
            },500);
        } else{
            $('#footer_familysite_more').stop().animate({
                height : 0
            },500);
        }
    });
    // footer End

    // top btn
    $('#top_btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },1000);
    });

    $(window).scroll(function(){
        let sct = $(window).scrollTop();
        let hh = $('header').height();

        if(sct > hh){
            $('#top_btn').css({
                opacity : 1
            });
        } else if(sct < hh){
            $('#top_btn').css({
                opacity : 0
            });
        }
    });
});
// end