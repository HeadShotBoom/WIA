$(function() {

    $(function() {

        $('#right').click(function(){
            $('#theDiv').animate({width:'500px'}, 1000, 'easeInCubic');
        });

        $('#text').click(function(){
            $('#theDiv').animate({fontSize:"24pt"}, 1000, 'easeInOutElastic');
        });

        $('#move').click(function(){
            $('#theDiv').animate({left:"500"}, 1000, 'swing');
        });

        $('#multiple').click(function(){
            $('#theDiv').animate({height: "500px", width:'500px', left:'500', fontSize: '24pt'}, 1000, 'easeOutBounce');

        });

        $('#multiple2').click(function(){
            //Chain each animate to the end of the last one excluding the JQuery selector and ending; until the very end.
            $('#theDiv').animate({height:"500px"}, 1000, 'easeInBack').animate({width:"500px"}, 1000, 'easeOutBounce').animate({left:"500"}, 1000, 'easeInCubic').animate({fontSize:"24pt"}, 1000, 'swing');
        });

        $('#reset').click(function(){
            //Pretty Much look in HTML and CSS to find initial values and animate to them
            $('#theDiv').animate({height: "180px", width:'250px', left:'0', fontSize: '16pt'}, 1000, 'easeInOutBack');

        });

    });



});