//Create a variable to hold video
var vid;

window.onload=function(){
    //Link to video
    vid=document.getElementById('vid');
};

function pauseToggle(){
    //Test the video and determine if it is paused
    // .paused is a boolean property

    if(vid.paused){
        //Play the video
        vid.play();
    }else{
        //Pause the video
        vid.pause();
    }
}

function clicked(){

    //currentTime = Current playtime in seconds
    //Jump Ahead 2 seconds
    vid.currentTime +=2;

}