var ctx;
var canvas = document.getElementById('canvas');

ctx=canvas.getContext('2d');

//Create Variable to keep track of count
var count = 0;

//Variables for x and y coordinates, where in the sprite sheet we are in the frame

var x;
var y;

//Create the movement or position x, y, variables
var xPos = 800;
var yPos = 600;


//Import image

var img = new Image();
img.src = 'images/doggy2.png';

//Once it loads, this call draw function
img.onload=draw;

function draw(){
    //Request an animation frame and pass this function in to create a loop
    requestAnimationFrame(draw);

    //Clear the Rectangle on our canvas
    ctx.clearRect(0,0,800,600);

    //Setup the count, x, and y
    //Sprite sheet is 9 columns, 150 frames total, width=213 height 201

    //Gives us the column we are in
    x = (count%9)*213;

    //For every 9 frames drop 1 row
    y = Math.floor(count/9)*201;

    //Draw the image onto the canvas
    ctx.drawImage(img, x, y, 213, 201, xPos--, yPos--, 213, 201);

    //Setup Count
    if(count==149){
        //reset count
        count=0
    }else{
        count++;
    }

}

