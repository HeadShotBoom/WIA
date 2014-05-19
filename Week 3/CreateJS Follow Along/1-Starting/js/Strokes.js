window.onload = function() {

    var canvas = document.getElementById('canvas1');

    var stage = new createjs.Stage(canvas);

    //Setup Shape
    var shape = new createjs.Shape();

    //Setup Stroke
    shape.graphics.beginStroke('purple');

    //Setup Properties
//    shape.graphics.setStrokeStyle(width, caps value, joints, miter limit);
    shape.graphics.setStrokeStyle(10, 'round', 'miter', 5 );



    //Draw a Line
    shape.graphics.moveTo(25,25);
    shape.graphics.lineTo(250,25);

    shape.graphics.moveTo(50,50);

    //.graphics.quadraticCurveTo(controlx, controly, x, y);
//    shape.graphics.quadraticCurveTo(50,175,250,250);

    //arcTo(x1, y1, x2, y2, radius);
//    shape.graphics.arcTo(100,50,100,500, 60);

    //besier curves
    //bezierCurveTo(cp1c, cp1y, cp2x, cp2y, x, y);
    shape.graphics.bezierCurveTo(100,50,250,50,250,250);

    shape.graphics.lineTo(50,250);

    stage.addChild(shape);
    stage.update();

	
	
};