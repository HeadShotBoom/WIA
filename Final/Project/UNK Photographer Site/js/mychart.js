$(function(){


    $('#canvasImg').hide();
    var canvas = document.getElementById('myChart');
    var ctx = canvas.getContext('2d');

    var data = {
        labels : ["Taking Pictures","Editing Photos","Sleeping","Marketing","Client Interaction","Sucking At Life"],
        datasets : [
            {
                fillColor : "rgba(220,220,220,0.5)",
                strokeColor : "rgba(220,220,220,1)",
                pointColor : "rgba(220,220,220,1)",
                pointStrokeColor : "#fff",
                data : [20,25,90,32,10,85]
            },
            {
                fillColor : "rgba(151,187,205,0.5)",
                strokeColor : "rgba(151,187,205,1)",
                pointColor : "rgba(151,187,205,1)",
                pointStrokeColor : "#fff",
                data : [50,30,20,55,96,0]
            }
        ]
    };

    var options = {

        pointFontColor:"rgba(255,255,255,1)",
        pointLabelFontSize:14,
        onAnimationComplete:done
    };
    var myNewChart = new Chart(ctx).Radar(data, options);

    function done(){

        console.log('TEST');
        var dataURL = canvas.toDataURL();

        //Set Source of image tag
        document.getElementById('canvasImg').src = dataURL;
        $('#myChart').hide();
        $('#canvasImg').show();
    }

});








