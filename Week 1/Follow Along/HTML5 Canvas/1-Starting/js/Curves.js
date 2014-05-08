window.onload = function() {
	var theCanvas = document.getElementById('Canvas1');
	if (theCanvas && theCanvas.getContext) {
	var ctx = theCanvas.getContext("2d");
	if (ctx) {

        ctx.strokeStyle = 'blue';
        ctx.lineWidth = 5;

        //Stroke a simple bezier curve

        ctx.beginPath();
        ctx.moveTo(50,200);

        //bezierCurveTo(control1 X, control1 y, control2 x, control2 y, x, y)

        ctx.bezierCurveTo(50,100,200,300,200,150);

        ctx.stroke();

        //Quadratic Curve

        ctx.beginPath();
        ctx.moveTo(400,200);

        //quadraticCurveTo(control x, control y, x, y)
        ctx.quadraticCurveTo(400,100,600,150);
        ctx.stroke();
						
						
		}
	}
}