window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        ctx.save();
        var orignShadowColor = ctx.shadowColor;
        //Setup Shadow
        ctx.shadowColor = '#000000';
        ctx.shadowOffsetX = 10;
        ctx.shadowOffsetY = 10;
        ctx.shadowBlur = 10;

        //Draw a simple rectangle
        ctx.fillStyle = 'blue';
        ctx.fillRect(20,20,200,100);

		//Draw text with shadow

        ctx.fillStyle = 'green';
        ctx.shadowColor = 'rgba(0,100,100,0.5)';
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 5;

        ctx.font = '25pt Georgia';
        ctx.fillText("Drawing Text On A Canvas",250, 75);

        //Draw a Red Line with a purple Shadow
        ctx.lineCap = 'round';
        ctx.lineWidth = 25;
        ctx.shadowColor = 'rgba(150,0,150,.5)'
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        ctx.shadowBlur = 15;
        ctx.strokeStyle = 'red';

        ctx.beginPath();
        ctx.moveTo(50, 200);
        ctx.lineTo(450,200);
        ctx.stroke();

        //Rectangle with no shadow after having done one with a shadow
        //ctx.shadowColor = orignShadowColor;
        ctx.restore();
        ctx.fillStyle = 'blue';
        ctx.fillRect(20, 225,200,50);
		}
	}
}