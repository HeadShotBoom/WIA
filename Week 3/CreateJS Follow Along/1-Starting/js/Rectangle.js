window.onload = function() {

    var canvas = document.getElementById('canvas1');
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //Setup Stroke
    shape.graphics.beginStroke('purple');
    shape.graphics.setStrokeStyle(10, 'butt', 'round');

    //Draw a Normal Rectangle
    shape.graphics.rect(50, 50, 300, 300);

    //Rounded Rectangle
    //drawRoundRect(x, y, width, height, radius for corner)
    shape.graphics.beginStroke('blue');
    shape.graphics.drawRoundRect(75, 75, 250, 250, 50);

    //Draw Complex Rounded Rectangle
//    (x, y, w, h, TL, TR, BR, BL)
    shape.graphics.beginStroke('red');
    shape.graphics.drawRoundRectComplex(100,100,200,200,50,0,100,0);


    stage.addChild(shape);
    stage.update();
	
};