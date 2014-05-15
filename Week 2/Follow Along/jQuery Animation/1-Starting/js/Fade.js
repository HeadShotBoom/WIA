$(function() {

    $('#fadein').click(function(){
        $('#theDiv').fadeIn(2000);
    });

    $('#fadeout').click(function(){
        $('#theDiv').fadeOut(2000);
    });

    $('#fadeto3').click(function(){
        $('#theDiv').fadeTo(2000,.3);
    });

    $('#fadeup').click(function(){
        $('#theDiv').fadeTo(2000, 1);
    })


});