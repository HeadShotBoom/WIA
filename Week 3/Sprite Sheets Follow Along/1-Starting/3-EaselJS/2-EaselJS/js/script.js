var ship;

function init() {

    var canvas = document.getElementById('easel');
    var stage = new createjs.Stage(canvas);

    //Center of Stage
    var centerX = canvas.width/2;
    var centerY = canvas.height/2;

    //Create Sprite Sheet
    var ss = new createjs.SpriteSheet({

        //Animations Variable - allows us to name different sections of total sprite sheet
        animations:{

            //Written kinda like JSON data
            fly:[0,6],
            explode:[7,12, 'fly']

        },

        //Images is a variable that takes the location of our sprite sheet image
        images:['images/Ship-Blink.png'],
        //frames - how we break up the image
        //Regristration point in center of image
        //110px X 80px origional size
        frames:{
            regX: 55,
            regY:40,
            height:80,
            width:110
        }

    });// End of sprite Sheet

    //Wrap the sprite sheet inside of a bitmap animation
    ship = new createjs.BitmapAnimation(ss);

    //Center the ship on the screen
    ship.x = centerX;
    ship.y = centerY;

//    .play() plays the whole animation
//    ship.play();

    //Play a named sequence
    ship.gotoAndPlay('fly');

    stage.addChild(ship);
    createjs.Ticker.setFPS(15);
    createjs.Ticker.addListener(function(){
        stage.update();
    });

} //end of init
function blowUp(){
    ship.gotoAndPlay('explode');
}