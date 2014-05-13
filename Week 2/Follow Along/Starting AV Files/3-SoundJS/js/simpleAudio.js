window.onload = function() {

    if(!createjs.Sound.initializeDefaultPlugins()){return;}
	//SoundJS has the ability to preload sounds

    createjs.Sound.registerSound({id:'soundId', src:'audio/music.mp3|audio/music.ogg'});

    //Listen for the file to load
    createjs.Sound.addEventListener('fileload', handleFileLoad);

    function handleFileLoad(event){
        //Sound has been loaded
        //ONCE per every sound loaded

        console.log('Preloaded:', event.src);

        //Play Loaded Sound
//        createjs.Sound.play(event.src);

    }
	};
function playMusic(){
    //Play the sound when button is clicked
    createjs.Sound.play('soundId');
}
