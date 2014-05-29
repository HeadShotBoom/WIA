$(document).ready(function(){

$('.navlinks').mouseenter(function(){
    $(this).animate({fontSize:"48pt"}, 1000);
}).mouseleave(function(){
        $(this).animate({fontSize:"36pt"}, 1000);
    });
});