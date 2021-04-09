var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+'    '+time;
 
document.getElementById("time").innerHTML = dateTime +`<br>`;
////////////////////////////////////////////////



/////////////////////////////////////////////////////
// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..
// Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
// Based on https://gist.github.com/blixt/f17b47c62508be59987b
var _seed = 42;
  Math.random = function() {
    _seed = _seed * 16807 % 2147483647;
    return (_seed - 1) / 2147483646;
  };
    
  var lastDate = 0;
  var data = []
  var data2 = []
  var TICKINTERVAL = 50
  let XAXISRANGE = 1000
  
  function getDayWiseTimeSeries(baseval,yrange) {
      var x = baseval;
      var y = Math.floor(Math.random() * (60 - 10 + 1)) + 10;/// min : 10 ,max  : 60

      
      data.push({
        x, y
      });

      y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
      data2.push({
        x, y
      });
      lastDate = baseval
      baseval += TICKINTERVAL;
  }
  
  getDayWiseTimeSeries(today.getTime(),{
    min: 10,
    max: 90
  })

  
  
  function getNewSeries(baseval, yrange) {
    var newDate = baseval + TICKINTERVAL;
    lastDate = newDate
    var temp = Math.floor(Math.random() * (60 - 10 + 1)) + 10 /// min : 10 , max : 60

    
    data.push({
      x: newDate,
      y: temp
    })
    var aqi = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    data2.push({
      x: newDate,
      y: aqi
    })
    firebase.database().ref('Threshold/AirQuality').on('value',function(snapshot){
      var max = snapshot.val().max;
      var min = snapshot.val().min;
      if(aqi > max){
        alert("AQI : "+aqi+"\n"+"Needs purifiction AQI is high !");
      }
      if(aqi < min){
        alert("AQI : "+aqi+"\n"+"Airquality is quite low !");
      }
      

    });
    firebase.database().ref('Threshold/Temperature').on('value',function(snapshot){
      
      var mx = snapshot.val().max;
      var mn = snapshot.val().min;
      if(temp > mx){
        alert("Temperature : "+temp+"\n"+"high temperature detected ! Take Action");
      }
      if(temp < mn){
        alert("Temperature : "+temp+"\n"+"low temperature detected ! Take Action");
      }
      
    });
  }
  
  

var options = {
    series: [
      {
        name: "Temperature",
        //data: data.slice()
      },
      
    ],
    chart: {
      type: "line",
      id : 'realtime',
      height: 250, 
      animations:{
          enabled : true,
          easing : 'linear',
          dynamicAnimation:{
              speed :1000
          }
      }
    },
    toolbar:{
      show : false
    },
    zoom :{
      enabled : false
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type : 'datetime',
      labels:{
        format : 'HH:mm:ss'
      },
      range : XAXISRANGE
    },
    yaxis: {
      text: {
        max : 100,
        
      },
    },
    fill: {
      opacity: 1,
    },
    legend :{
      show : false
    },
  };


  // for AQI 

  var options2 = {
    series: [
      {
        name: "AQI",
        data: data2.slice()
        
      },
      
    ],
    chart: {
      type: "line",
      id : 'realtime',
      height: 250, 

      animations:{
          enabled : true,
          easing : 'linear',
          dynamicAnimation:{
              speed :1000
          }
      }
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type : 'datetime',
      range : XAXISRANGE
    },
    yaxis: {
      title: {
        max : 500,
      },
    },
    fill: {
      opacity: 1,
    },
    legend :{
      show : false
    },
    zoom :{
      enabled : false
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  var chart2 = new ApexCharts(document.querySelector("#apex2"), options2);
  chart2.render();

  window.setInterval(function () {
    getNewSeries(lastDate, {
      min: 10,
      max: 90
    })

    chart.updateSeries([{
      data: data
    }])
    
    chart2.updateSeries([{
      data: data2
    }])

  }, 5000)

  


  // Sidebar Toggle Codes;
  
  var sidebarOpen = false;
  var sidebar = document.getElementById("sidebar");
  var sidebarCloseIcon = document.getElementById("sidebarIcon");
  
  function toggleSidebar() {
    if (!sidebarOpen) {
      sidebar.classList.add("sidebar_responsive");
      sidebarOpen = true;
    }
  }
  
  function closeSidebar() {
    if (sidebarOpen) {
      sidebar.classList.remove("sidebar_responsive");
      sidebarOpen = false;
    }
  }

//////////////////////////////////////////////


