// This is for able to see chart. We are using Apex Chart. U can check the documentation of Apex Charts too..

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
////////////////////////////
var table = [
  "Good",
  "Moderate",
  "Unhealthy for Sensitive groups",
  "Unhealthy",
  "Very unhealthy",
  "Hazadorus"
]

// Replace Math.random() with a pseudo-random number generator to get reproducible results in e2e tests
// Based on https://gist.github.com/blixt/f17b47c62508be59987b
var _seed = 42;
  Math.random = function() {
    _seed = _seed * 16807 % 2147483647;
    return (_seed - 1) / 2147483646;
  };

  
function getNewSeries(yrange) {
  
  var temp = Math.floor(Math.random() * (60 - 10 + 1)) + 10 /// min : 10 , max : 60
  var aqi = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
  //alert(temp);
  firebase.database().ref('Threshold/AirQuality').on('value',function(snapshot){
    var max = snapshot.val().max;
    var min = snapshot.val().min;

    if(aqi > 0 && aqi <= 50)document.getElementById("403").innerText = table[0];
    if(aqi > 50 && aqi <= 100)document.getElementById("403").innerText = table[1];
    if(aqi > 100 && aqi <= 150)document.getElementById("403").innerText = table[2];
    if(aqi > 150 && aqi <= 200)document.getElementById("403").innerText = table[3];
    if(aqi > 200 && aqi <= 300)document.getElementById("403").innerText = table[4];
    if(aqi > 301 && aqi <= 500)document.getElementById("403").innerText = table[5];
    //alert(max);
    if(aqi > max){
      var x,y;
      x = document.getElementById("103").innerText;
      x = parseInt(x);
      y = document.getElementById("203").innerText;
      y = parseInt(y);
      document.getElementById("103").innerText = x+100 ;
      document.getElementById("203").innerText = y + 2 + '%' ;
      alert("AQI : "+aqi+"\n"+"Needs purifiction AQI is high ! purifying intiated");

    }
    if(aqi < min){
      //alert("AQI : "+aqi+"\n"+"Airquality is quite low !");
    }
  });
  firebase.database().ref('Threshold/Temperature').on('value',function(snapshot){
    
    var mx = snapshot.val().max;
    var mn = snapshot.val().min;
    if(temp > mx){
      var x,y,z1,z2;
      x = document.getElementById("101").innerText;
      x = parseInt(x);
      y = document.getElementById("102").innerText;
      y = parseInt(y);
      z1 = document.getElementById("201").innerText;
      z1 = parseInt(z1);
      z2 = document.getElementById("202").innerText;
      z2 = parseInt(z2);
      document.getElementById("101").innerText = x+100 ;
      document.getElementById("102").innerText = y>100?y-100:0 ;
      document.getElementById("201").innerText = z1 + 5 +'%';
      document.getElementById("202").innerText = z2>5?z2-5+'%':0+'%' ;
      if(y-100<0)document.getElementById("1020").innerHTML = `<i class="fa fa-circle-o-notch  fa-3x fa-fw text-red" aria-hidden="true" ></i>` ;
      else document.getElementById("1020").innerHTML = `<i class="fa fa-circle-o-notch  fa-spin fa-3x fa-fw text-red" aria-hidden="true" ></i>` ;
      alert("Temperature : "+temp+"\n"+"high temperature detected ! Cooling intiated");
      
    }
    if(temp < mn){
      var x,y,z1,z2;
      x = document.getElementById("102").innerText;
      x = parseInt(x);
      y = document.getElementById("101").innerText;
      y = parseInt(y);
      z1 = document.getElementById("202").innerText;
      z1 = parseInt(z1);
      z2 = document.getElementById("201").innerText;
      z2 = parseInt(z2);
      document.getElementById("102").innerText = x+100 ;
      document.getElementById("101").innerText = y>100?y-100:0 ;
      document.getElementById("202").innerText = z1 + 5 +'%';
      document.getElementById("201").innerText = z2>5?z2-5+'%':0+'%' ;
      if(y-100<0)document.getElementById("1010").innerHTML = `<i
      class="fas fa-fan  fa-3x fa-fw text-lightblue"
      aria-hidden="true"
    ></i>` ;
    else{
      document.getElementById("1010").innerHTML = `<i
      class="fas fa-fan fa-spin fa-3x fa-fw text-lightblue"
      aria-hidden="true"
    ></i>` ;
    }
      
      alert("Temperature : "+temp+"\n"+"low temperature detected ! heating initiated");
    }
    
  });

}
window.setInterval(function () {
  getNewSeries({
    min: 10,
    max: 90
  })
}, 5000)

/////////////////////////////////////

  