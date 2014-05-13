window.onload = function() {

    if(!createjs.Sound.initializeDefaultPlugins()){return;}

    //Create variable to hold path to audio files.

    var audioPath = 'audio/'

    //create an array of objects, each object is a sound
    //Soundjs calls that a manifest

    var manifest = [
        {id:'Music', src:audioPath+'music.mp3|'+audioPath+'music.ogg'},
        {id:'Thunder', src:audioPath+'thunder1.mp3|'+audioPath+'thunder1.ogg'}
    ];

    //Register manifest with soundjs

    createjs.Sound.registerManifest(manifest);

    //Listen for the files to load
    createjs.Sound.addEventListener('fileload', handleLoad);

    function handleLoad(event){
        //This will run once each time a file is initally loaded
        //Playing the file
//        createjs.Sound.play(event.src);
    }
	
};

function playMusic(){
    //Play just music
    createjs.Sound.play('Music');
}

function playThunder(){
    createjs.Sound.play('Thunder');
}