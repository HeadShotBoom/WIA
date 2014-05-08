/*
     Name: Daniel Carroll
     Date: 8 May 2014
     Class & Section:  WIA-#### (I dont know what your looking for here.)
     Comments: "HTML5 Canvas Drawing"
 */

/*******************************************
HTML5 Shape Drawing Activity
    1.  Setup the canvas and 2d context
    2.  Draw out each shape in the sections below
     
********************************************/
window.onload = function() {
    var theCanvas1 = document.getElementById('Canvas1');
    var theCanvas2 = document.getElementById('Canvas2');
    var theCanvas3 = document.getElementById('Canvas3');
    var theCanvas4 = document.getElementById('Canvas4');
    var theCanvas5 = document.getElementById('Canvas5');
    var theCanvas6 = document.getElementById('Canvas6');
    var theCanvas7 = document.getElementById('Canvas7');
/*******************************************
FILE SETUP

// Setup up 7 different Canvases in index.html one for each problem.
//Link Modernizr.js
// Link the main.js file
// Setup the call to that canvas and get it's 2d context
//Use Modernizr to verify that your browser supports canvas, include a fallback message


/*******************************************
PART 1

Draw a rectangle starting at point (0 ,0)
That has a width of 50 px and a heigh of 100px
Set the color of the rectangle to a shade of blue.
Set the stroke color to black and the dimension of the stroke are the same as the rectangle.

Reminder - set the style first then draw.
********************************************/

//Draw Rectangle here
if(theCanvas1 && theCanvas1.getContext){
    var ctx1 = theCanvas1.getContext('2d');
    if(ctx1){
        ctx1.fillStyle = 'blue';
        ctx1.strokeStyle = 'black';
        ctx1.lineWidth = 5;

        ctx1.fillRect(0,0,50,100);
        ctx1.strokeRect(0,0,50,100);


    }
}

/*******************************************
PART 2

Draw a circle starting at point (50 ,50)
That has a radius of 20 px 
Set the color of the circle to a shade of red and set the alpha to .5
Set the stroke color to black and use a radius of 30px for this circle.

Reminder - set the style first then draw.
Use the arc method
********************************************/


//Draw Circle here
if(theCanvas2 && theCanvas2.getContext){
    var ctx2 = theCanvas2.getContext('2d');
    if(ctx2){

        var degrees = 360;
        var radians = (degrees/180)*Math.PI;
        ctx2.fillStyle = 'rgba(100,0,0,0.5)';
        ctx2.strokeStyle = 'black';
        ctx2.lineWidth = 10;
        ctx2.beginPath();
        ctx2.arc(50,50,20,0,radians,false);
        ctx2.fill();
        ctx2.stroke();

    }
}



/*******************************************
PART 3

Practice using Path drawing.
Create a 5-point star shaped pattern using the lineTo method.
Begin this shape at (100, 100)

Height and width and color are up to you.

********************************************/


//Draw Star here
if(theCanvas3 && theCanvas3.getContext){
    var ctx3 = theCanvas3.getContext('2d');
    if(ctx3){
        ctx3.strokeStyle = 'yellow';
        ctx3.fillStyle = 'red';
        ctx3.lineWidth = 3;

        ctx3.beginPath();
        ctx3.moveTo(100,100);
        ctx3.lineTo(160,100);
        ctx3.lineTo(180,40);
        ctx3.lineTo(200,100);
        ctx3.lineTo(260,100);
        ctx3.lineTo(215,135);
        ctx3.lineTo(230,190);
        ctx3.lineTo(180,160);
        ctx3.lineTo(130,190);
        ctx3.lineTo(145,135);
        ctx3.closePath();
        ctx3.fill();
        ctx3.stroke();
    }
}

/*******************************************
PART 4

Practice drawing with Bezier curves.
Try drawing the top to an umbrella.
This should have one large arc (a half circle) on the top and scalloped edges on the bottom.

Position, height, width and color are your choice.
Do not overlap any other object.

********************************************/

//Draw Umbrella top here

    if(theCanvas4 && theCanvas4.getContext){
        var ctx4 = theCanvas4.getContext('2d');
       if(ctx4){
           ctx4.strokeStyle = 'black';
           ctx4.fillStyle = '#363534';

           ctx4.beginPath();
           ctx4.moveTo(50,200);
           ctx4.bezierCurveTo(50,100,200,100,210,200);
           ctx4.bezierCurveTo(200,180,200,180,190,200);
           ctx4.bezierCurveTo(180,180,180,180,170,200);
           ctx4.bezierCurveTo(160,180,160,180,150,200);
           ctx4.bezierCurveTo(140,180,140,180,130,200);
           ctx4.bezierCurveTo(120,180,120,180,110,200);
           ctx4.bezierCurveTo(100,180,100,180,90,200);
           ctx4.bezierCurveTo(80,180,80,180,70,200);
           ctx4.bezierCurveTo(60,180,60,180,50,200);
           ctx4.stroke();
       }
    }

/*******************************************
PART 5

Practice using text.
Draw text into your canvas.  It can said whatever you would like in any color.

********************************************/

//Draw text here
if(theCanvas5 && theCanvas5.getContext){
    var ctx5 = theCanvas5.getContext('2d');
    if(ctx5){
        ctx5.font = '20pt Helvetica';
        ctx5.fillStyle = 'blue';
        ctx5.fillText('This is Text', 200, 80);
    }
}
/*******************************************
PART 6

Pixel manipulation.
Draw the image logo.png into the canvas in the following 3 ways.
1. The image exactly as it is.
2. Shrink the image by 50%
3. Slice a section of the logo out and draw that onto the canvas.

Reminder to use the drawImage method for all 3 of the ways.

********************************************/

//Draw images here



/*******************************************
PART 7

Putting it all together. 

Using a combination of all the methods. 
Create a complex scene.
You must use at least 3 different methods.

********************************************/

// Draw scene here


};