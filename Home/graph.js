window.onload = function () {

    var dps = [{x: 1, y: 10}, {x: 2, y: 13}, {x: 3, y: 18}, {x: 4, y: 20}, {x: 5, y: 17},{x: 6, y: 10}, {x: 7, y: 13}, {x: 8, y: 18}, {x: 9, y: 20}, {x: 10, y: 17}];   //dataPoints. 
    
    var chart1 = new CanvasJS.Chart("chartContainer1",{
        title :{
            text: "Temperature Data"
        },
        axisX: {						
            title: "Time in second"
        },
        axisY: {						
            title: "Units in Celsius"
        },
        data: [{
            type: "spline",
            dataPoints : dps
        }]
    })
    var chart2 = new CanvasJS.Chart("chartContainer2",{
        title :{
            text: "Air Quality Data"
        },
        axisX: {						
            title: "Time in second"
        },
        axisY: {						
            title: "Air Quality Index"
        },
        data: [{
            type: "line",
            dataPoints : dps
        }]
    });
    chart1.render();
    var xVal = dps.length + 1;
    var yVal = 15;	
    var updateInterval = 1000;
    var updateChart1 = function () {
        yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
        dps.push({x: xVal,y: yVal});
        xVal++;
        if (dps.length >  20 )
        {
            dps.shift();				
        }
        chart1.render();		
      
  // update chart after specified time. 

};
    chart2.render();
    var xVal = dps.length + 1;
    var yVal = 15;	
    var updateInterval = 1000;
    var updateChart2 = function() {
        yVal = yVal +  Math.round(5 + Math.random() *(-5-5));
        dps.push({x: xVal,y: yVal});
        xVal++;
        if (dps.length >  20 )
        {
            dps.shift();				
        }
        chart2.render();		

  // update chart after specified time. 

};
setInterval(function(){updateChart1()}, updateInterval); 
setInterval(function(){updateChart2()}, updateInterval);      
}