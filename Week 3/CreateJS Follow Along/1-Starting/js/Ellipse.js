window.onload = function() {
	
	var canvas = document.getElementById('canvas1');
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //Create our stroke
    shape.graphics.beginStroke('purple');

    shape.graphics.setStrokeStyle(10, 'butt', 'round');

    //Draw a circle
    //drawCircle(x, y, radius)
    shape.graphics.drawCircle(100,100,50);

    //Draw an elipse    drawElipse(x, y, width, height)
    shape.graphics.drawEllipse(75, 200, 150, 50);

    //Draw Arcs   arc(x, y, radius, startAngle, endAngle, anticlockwise = 1 or clockwise = 0)
    shape.graphics.beginStroke('red');
    shape.graphics.arc(100,100,75, 0,-90*(Math.PI/180), 0);

    stage.addChild(shape);
    stage.update();
};