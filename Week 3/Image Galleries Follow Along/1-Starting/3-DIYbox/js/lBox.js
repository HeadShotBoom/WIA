window.onload = function() {
	
    $('.lightbox_trigger').click(function(e){

        //Prevent default action
        e.preventDefault();

        //Get the clicked link's href
        var image_href = $(this).attr('href');

        //Setup Lightbox if it dosent exist or use the lightbox if it does
        if($('#lightbox').length>0){
            //Lightbox div is already created
            //Place the clicked href into our lightbox div img tag
            $('#content').html('<img src="'+ image_href + '"/>');
            $('#lightbox').slideDown(1000);

        }else{
            //First time lightbox div will not exist, so lets make it
            var lightbox =
                '<div id="lightbox">' +
                    '<p>Click to close</p>.' +
                    '<div id="content">' +
                    //Inserting Clicked link href into image
                        '<img src="' + image_href + '" />' +
                   '</div>' +
                '</div>';

            //Insert lightbox HTML into our page
            $('body').append(lightbox);

            $('#lightbox').hide();
            $('#lightbox').slideDown(1000);
        }

    });

    //Setup Click to close
    $('#lightbox').live('click', function(){
       $('#lightbox').slideUp(1000);
    });


};