window.onload = function() {
	
	var canvas = document.getElementById('canvas1');

    var stage = new createjs.Stage(canvas);

    //Draw a rectangle
    var rect1 = new createjs.Shape();

    //Create Fill

//    rect1.graphics.beginFill('purple');
//    rect1.graphics.beginFill('rgb(162, 216, 255)');
//    rect1.graphics.beginFill(createjs.Graphics.getRGB(162,216,255,.5));


    //create Linear Gradient
//    rect1.graphics.beginLinearGradientFill(['yellow', 'purple','red'], [0,.5,1],50,50, 150, 50 );

    //Create a Radial Gradient
    rect1.graphics.beginRadialGradientFill(['yellow','red'], [0,1], 100,100, 0, 100,100,100);

    //Draw the rectangle
    rect1.graphics.rect(50,50,100,100);

    stage.addChild(rect1);
    stage.update();
	
			
};