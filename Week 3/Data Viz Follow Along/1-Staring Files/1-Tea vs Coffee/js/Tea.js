$(function() { 

    $('#coffeeNumber').hide();
    $('#teaNumber').hide();


    $('#moveIt').click(function(){

        //Animate Coffee Div Outward
        $('#coffee').animate({width:'300px', height:'100px'}, 1000);
        $('#coffeeNumber').slideDown(1000);
        //Animate Tea Out
        $('#tea').animate({width:'300'}, 1000);
        $('#teaNumber').slideDown(1000);

    });
		
});