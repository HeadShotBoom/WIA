window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        var theString = "Drawing Text On A Canvas";

        //Simple Text using Defaults
        ctx.fillText(theString,20,20);

        //Style the font
        ctx.font = '25pt Georgia';
        ctx.fillStyle = 'blue';
        ctx.fillText(theString, 20, 60);

        //Stroke and Fill text

        ctx.font = '32pt Verdana';
        ctx.fillStyle = 'yellow';
        ctx.textBaseline = 'middle';
        ctx.strokeStyle = "rgba(0,255,0,0.5)";
        ctx.fillText(theString, 20, 160);
        ctx.strokeText(theString, 20, 160);


			
						
		}
	}
}