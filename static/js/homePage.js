$(function() {
    var oTop1 = $('#tb1').offset().top;
    var oTop2 = $('#tb2').offset().top;
    var winHeight = $(window).height();
    $(window).scroll(function() {
        $('#tb1').css({
            opacity: function() {
                var scroll = $(window).scrollTop();
                var op = 1.5 - ((oTop1 - scroll) / winHeight) * 4;
                // console.log(op);
                return op;
            }
        });
    });
    $(window).scroll(function() {
        $('#tb2').css({
            opacity: function() {
                var scroll = $(window).scrollTop();
                var op = 1.7 - ((oTop2 - scroll) / winHeight) * 4;
                // console.log(op);
                return op;
            }
        });
    });
});


