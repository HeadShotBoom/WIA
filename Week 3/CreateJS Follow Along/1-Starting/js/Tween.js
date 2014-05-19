window.onload = function() {
	
	//get canvas element
	var canvas = document.getElementById("canvas1");
	
	//Create our stage wrapped around our canvas
	var stage = new createjs.Stage(canvas);

    // Create ball
    var ball = new createjs.Shape();

    //Setup ball

    ball.graphics.setStrokeStyle(5, 'round', 'round');
    ball.graphics.beginStroke('black');
    ball.graphics.beginFill('red');
    ball.graphics.drawCircle(0,0,50);
    ball.graphics.endStroke();
    ball.graphics.endFill();

    //Draw a line from center of ball to edge
    ball.graphics.setStrokeStyle(1, 'round', 'round');
    ball.graphics.beginStroke('black');
    ball.graphics.moveTo(0,0);
    ball.graphics.lineTo(0,50);
    ball.graphics.endStroke();


    //Move the ball
    ball.x = 100;
    ball.y = 100;

    //Create Tween
    //createjs.Tween.get(display object, {optional properties})
    //properties can be loop, useTicks, ignorGlobal, boolean, true or false
    var tween = createjs.Tween.get(ball, {loop:true}).to({x:ball.x, y:canvas.height-55, rotation:-360}, 1500, createjs.Ease.bounceOut).wait(1000).to({x:canvas.width-55,rotation:360},2500,createjs.Ease.bounceOut).wait(1000).call(tester).to({scaleX:0.5, scaleY:0.5, x:30, rotation:-360, y:canvas.height-30, alpha:0}, 2500, createjs.Ease.bounceOut)



        ;

    function tester(){
        console.log("Tween in the house");
    }


    stage.addChild(ball);
//    stage.update();

    //Create a ticker
    createjs.Ticker.addEventListener('tick', stage);


};