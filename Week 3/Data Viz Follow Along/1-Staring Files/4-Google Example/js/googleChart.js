//Load google viz library and the core chart package

google.load('visualization', '1', {packages:['corechart']});

//once library is loaded lets run a function

google.setOnLoadCallback(drawChart);

//Create Drawchart function

function drawChart(){
    //We will actually draw chart

    //Create a data table using an array

    var data = google.visualization.arrayToDataTable([

        ['Task', 'Hours Per Day'],
        ['Work', 8],
        ['Eating', 2],
        ['Commuting', 3],
        ['Watch Tv', 4],
        ['Sleep', 7]

    ]);

    var options = {

        title:'My Daily Activities',
//        is3D:true,
        pieHole:.6,
        pieSliceText: 'percentage',
        pieStartAngle: 75,
//        width: 500,
//        height: 500
        legend:{position:'labeled'},
        tooltip:{trigger:'none'}
    };

    //Create Chart Variable
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    //Draw the chart
    chart.draw(data, options);

}