if(Modernizr.canvas){
    //Canvas is supported

    var theCanvas = document.getElementById('Canvas1');
    var ctx = theCanvas.getContext('2d');

    //Draw some text on our canvas
    ctx.font = '25pt Georgia';
    ctx.fillText('Canvas is Supported', 20, 60);


}else{
    //Canvas is not supported
}

console.log(Modernizr);

if(Modernizr.draganddrop){
    ctx.font = '25pt Georgia';
    ctx.fillText('Drag and Drop Works',20,120);

}else{
    //Polyfills would go here
}