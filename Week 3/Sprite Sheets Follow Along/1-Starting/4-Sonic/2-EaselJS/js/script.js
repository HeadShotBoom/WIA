

function init() {
	var canvas = document.getElementById("easel");
	var stage = new createjs.Stage(canvas);
	var centerX = canvas.width/2;
	var centerY = canvas.height/2;
	

    //Variable to hold animation
    var swirl;

    //Setup Sprite Sheet
    var ss = new createjs.SpriteSheet({
        //images - location of sprite sheet
        images:['images/sonic.png'],
        //Frames - how large is a frame
        frames:{
            height:100,
            width:100,
            regX:50,
            regY:50
        }
    });


    //After Setup is complete, wrap in bitmap animation
    swirl= new createjs.BitmapAnimation(ss);
    //Center on stage
    swirl.x=centerX;
    swirl.y=centerY;

    //Play animation
    swirl.play();

    //Add Swirl to stage
    stage.addChild(swirl);

    //Setup Ticker

    //Set Framerate
    createjs.Ticker.setFPS(25);
    createjs.Ticker.addListener(function(){
        stage.update();
    });
	
} //end of init

	