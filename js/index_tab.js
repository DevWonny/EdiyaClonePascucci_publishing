$(document).ready(function () {

    // menu btn 
    $('#tab_menu_btn').click(function () {
        $('#tab_menu_wrap').css({
            display: 'block'
        });
    });
    $('#tab_menu_wrap_close').click(function () {
        $('#tab_menu_wrap').css({
            display: 'none'
        });
    });
    // menu btn End

    setInterval(function () {
        $('#tab_main_next').trigger('click');
    }, 2000);

    let tab_family_click = 0;
    $('#tab_footer_family').click(function () {
        tab_family_click++;
        if (tab_family_click % 2 == 1) {
            $('#tab_footer_family_box').stop().animate({
                height: '26.39296187683284vw'
            }, 500)
        } else if (tab_family_click % 2 == 0) {
            $('#tab_footer_family_box').stop().animate({
                height: 0
            }, 500)
        }
    });

    $('.tab_main_menu').click(function () {
        if ($(this).children('.tab_sub_menu').hasClass('tab_menu_has') === true) {
            $(this).children('.tab_sub_menu').removeClass('tab_menu_has');
        } else {
            $('.tab_sub_menu').removeClass('tab_menu_has');
            $(this).children('.tab_sub_menu').addClass('tab_menu_has');
        }
    });

    $('#tab_menu_language li').click(function () {
        let tab_lang = $(this).index();
        
        $('#tab_menu_language li').removeClass('tab_menu_lan_on');
        $('#tab_menu_language li').eq(tab_lang).addClass('tab_menu_lan_on');
    });

    $('#tab_top_btn').click(function(){
        $('html,body').animate({
            scrollTop : 0
        },1000);
    });

    $(window).scroll(function(){
        let tab_sct = $(window).scrollTop();
        let tab_hh = $('#tab_header').height();

        if(tab_sct > tab_hh){
            $('#tab_top_btn').css({
                opacity : 1
            });
        } else if(tab_sct < tab_hh){
            $('#tab_top_btn').css({
                opacity : 0
            });
        }
    });

});