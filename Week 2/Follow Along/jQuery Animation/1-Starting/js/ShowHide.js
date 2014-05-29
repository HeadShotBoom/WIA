$(function() {
    //Add a click function to our button
    $('#hide').click(function(){
        $('#theDiv').hide(2000, function(){
            $('#theDiv').css("background-color", "#000");
//        });
//    });
    $('#show').click(function(){
        $('#theDiv').show(2000);
    });
    $('#toggle').click(function(){
        $('#theDiv').toggle(1000);
    })
});


