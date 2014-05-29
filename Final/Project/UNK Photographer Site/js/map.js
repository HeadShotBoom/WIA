$(document).ready(function(){

    $('.map_container').fadeOut(1);

    $('a.dot').click(function(){

        $('a.dot').removeClass('selected');
        $(this).addClass('selected');

        var city = '.city_detail#'+$(this).attr('city');
        var htmlCode = $(city).html();

        $('.detail_container').fadeOut(500, function(){
            $('.detail_container .city_detail').html(htmlCode);
            $('.detail_container').fadeIn(500);
        });

    });

    $('#showMap').click(function(){
        $('.map_container').fadeIn(500);
    });
});