window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        //Create Variable to store image file
        var srcImg = document.getElementById('img1');

        //Draw image directly onto canvas
//        ctx.drawImage(srcImg, 0,0);

        //Draw a scaled down image
        //drawImage(srcIma, dx, dy, dw, dh)
//        ctx.drawImage(srcImg, 50,50,240, 300);

        //Draw a slice of the image
        //drawImage(srcImg, sourceyx, source-y, source-width, source-height, destination-x, destination-y, destination-width, destination-height)
//        ctx.drawImage(srcImg, 285,40,95,140,50,50,190,280);

        var srcVid = document.getElementById('vid1');
        srcVid.play();

        //setInterval(function, how often in ms);

        setInterval(function(){

            ctx.drawImage(srcVid,0,0,480,270);

        },30);

		}
	}
};