window.onload = function() {

    //First we will create a stage
    // The stage contains all of the display objects

    var canvas = document.getElementById('canvas1');

    var stage = new createjs.Stage(canvas);

    //Create a Blue Circle
    var circleGraphic = new createjs.Graphics();

    circleGraphic.beginFill('blue');
    circleGraphic.drawCircle(0,0,50);

    // Create Our Shape
    //Shape is a display object that handles vector graphics
    var circleShape = new createjs.Shape(circleGraphic);

    //Access some of the shape properties
    circleShape.x = 50;
    circleShape.y = 50;

    //Add shape to stage's display list
    stage.addChild(circleShape);

    //In order to show on our screen we have to update the stage
    stage.update();

};