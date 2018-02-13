
$(document).ready(function () {

    $('.main-menu ul li').click(function () {
        var a = $(this).find('a').attr('class');

        if($('body').hasClass(a)){
                       
        }else{
            $('body').removeAttr('class');
            $('body').addClass(a);
        }
        

        var sec = $('#' + a);
        if ($(sec).hasClass('active')) {
        }
        else {
            $('section').removeClass('active');
            $(sec).addClass('active');
        }
    });

});