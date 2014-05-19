window.onload = function() {
			
			//Canvas & Stage
			var canvas=document.getElementById("canvas");
			
			var stage= new createjs.Stage(canvas);

            var bmp = new createjs.Bitmap();

    //Load image in and wait till fully loaded to do anything with it.

    var img = new Image();
    img.src = "images/ship.svg";

    img.onload = updateStage;

    function updateStage(e){
        bmp = new createjs.Bitmap(e.target);

        //find the center of canvas
        var centerX = canvas.width/2;
        var centerY = canvas.height/2;

        //Move ship to center of stage
        bmp.x = centerX;
        bmp.y = centerY;

        //Change regristration point (Place in image that is center of image for alignment)
        bmp.regX = 50;
        bmp.regY = 50;

        //Scale it up
        bmp.scaleX = 4;
        bmp.scaleY = 4;






        stage.addChild(bmp);
//        stage.update();
    }


    //Ticker controls timing
    createjs.Ticker.addEventListener('tick', tick);

    function tick(e){

        bmp.rotation +=2;
        bmp.x -= 2;
        stage.update();

    }

		
};