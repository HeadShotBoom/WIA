window.onload = function() {
	
    var canvas = document.getElementById('canvas1');
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    shape.graphics.beginStroke('purple');
    shape.graphics.setStrokeStyle(5, 'round', 'round');

    //drawPolyStar(x, y, radius, #sides, point size, angle)
    //pointSize -0- Polygon 1-Spikes
    //5 side star
    shape.graphics.drawPolyStar(75,75,50,5,.5, -90);

    //a 3 sided star - triangle
    shape.graphics.drawPolyStar(550,75,50,3,0, -90);

    var shape2 = new createjs.Shape();
    shape2.graphics.beginFill('red');
    shape2.graphics.drawPolyStar(250,255,50,3,0, -90);


    //Add event listener to make it clickable
    shape2.addEventListener('click', function(event){
        console.log('Red Triangle has been clicked!');
    });




    stage.addChild(shape);
    stage.addChild(shape2);
    stage.update();
	
};