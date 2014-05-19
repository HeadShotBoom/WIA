window.onload = function() {

    var canvas = document.getElementById('canvas1');
    var stage = new createjs.Stage(canvas);

    var shape = new createjs.Shape();

    //Setup a fill and draw rectangle
    shape.graphics.f('red').dr(50,50,100,100);

//    Rotate
//    Degrees around regristration point
//    shape.rotation = 30;

    //Change Regristration
    //Origion point of the square + width/2 or height/2
    shape.regX = 100;
    shape.regY = 100;

    //Move Square back down
    shape.x = 200;
    shape.y = 100;

//    shape.rotation = 45;

    //Scaleing
    //.5= Half 2 = Twice as big
//    shape.scaleX = 1.5;
//    shape.scaleY = .5;

    //Aplha
    shape.alpha = .55;

    //Visible
    //If 1 = show if 0 - hide
    //Visibility is different from alpha
    //Alpha=0 Objects are clickable while being invisible, visibility is like css rule display:none;
    shape.visible= 1;

    //Skewing
//    shape.skewX = 200;
    shape.skewY = 200;



    stage.addChild(shape);
    stage.update();
};