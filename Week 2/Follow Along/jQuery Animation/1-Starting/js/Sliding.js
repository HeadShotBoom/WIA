$(function() {

    $('#slideup').click(function(){
       $('#theDiv').slideUp(2000);
    });

    $('#slidedown').click(function(){
        $('#theDiv').slideDown(2000);
    });

    $('#toggle').click(function(){
        $('#theDiv').slideToggle(2000);
    });


});

