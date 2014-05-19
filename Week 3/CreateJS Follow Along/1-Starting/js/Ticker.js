window.onload = function() {
	
	var canvas = document.getElementById("canvas1");
	var stage = new createjs.Stage(canvas);
	
	//Create a red rectangle
	var shape = new createjs.Shape();
	
	//Fill 
	shape.graphics.beginFill("red");
	
	//Draw out the rectanlge
	shape.graphics.rect(0,0, 100, 100);
	
	//Change its registeration point
	shape.regX = 50;
	shape.regY= 50;
	
	//Move the rect to (100,100)
	shape.x = 100;
	shape.y = 100;
	
	stage.addChild(shape);
	
//	stage.update();


    //Setup Ticker Class, this controls time. Like a heartbeat that makes a "tick"
    //Create a listener for that tick

    //set framerate in FPS, default is 20
    createjs.Ticker.setFPS(30);

    //Create a listener
    createjs.Ticker.addEventListener('tick', ticks);

    function ticks(e){
//        console.log('Tick');

        shape.rotation+=4;

//        shape.alpha -=.005;

//        shape.x +=5;
//        shape.y +=2;

//        shape.skewX +=.1;
//        shape.skewY +=20

        shape.scaleX +=.1;
        shape.scaleY +=10;


        stage.update();

    }


			
};