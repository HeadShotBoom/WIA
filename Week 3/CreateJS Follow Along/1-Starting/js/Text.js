window.onload = function() {

    var canvas = document.getElementById('canvas1');
    var stage = new createjs.Stage(canvas);


    //Text class
    var sentence = new createjs.Text();

    //Modify the text property
    sentence.text = 'Any Kind Of Text String.... Poop!';

    //Font Property - Normal CSS
    sentence.font = 'bold 30px Times';

    //Color
    sentence.color ='blue';

    //Text is a display object
    //It inherets all of the normal properties
    sentence.x = 150;
    sentence.y = 50;
//    sentence.rotation = 45;


    sentence.textAlign = 'left';

    sentence.lineWidth = 170;

    sentence.lineHeight = 40;

    sentence.outline = false;

    // Combine the above code into one line
    var sentence2 = new createjs.Text('This is our Second Text!', 'bold 30px Times', 'blue');


    stage.addChild(sentence2);
    stage.addChild(sentence);
    stage.update();
};