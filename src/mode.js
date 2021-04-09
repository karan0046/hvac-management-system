var month = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
var r = 1;
var srno = 1;
var a = 0;
var i=0;
var j=0;
var time = 5000;
var interval = setInterval(function(){
    updateChart1(0,"","",j!=0?true:false)
},time);

var updateChart1 = function(check,userTemp,userAir,wait){
    if(wait)
    {
        i++;
        if(i >= 10){
            i=0;
            j=0;
        }
    }
    else{
        var date = new Date();    

        var table = document.getElementById("102");
        var row = table.insertRow(r);
        r++;
        var sr = row.insertCell(0);
        var d = row.insertCell(1);
        var t = row.insertCell(2);
        var temp = row.insertCell(3);
        var aqr = row.insertCell(4);

        sr.innerHTML = srno;
        d.innerHTML = date.getDate() +month[date.getMonth()];
        t.innerHTML = date.getHours()+" : "+date.getMinutes()+" : " + date.getSeconds() ;

        if(check === 1)
        {   
            temp.innerHTML = userTemp; 
            aqr.innerHTML = userAir;
        }
        else{
            while(true){
                a = Math.floor(Math.random() * Math.floor(40)) ;
                b = Math.floor(Math.random() * Math.floor(40)) ;
                if(a > 15 && b > 15){
                    break;
                }
            }
            temp.innerHTML = a; 
            aqr.innerHTML = b;
        }
        srno++;
    }
}
//setInterval(function(){updateChart2()}, updateInterval);      

function stop(){
    var userTemp = document.getElementById("temp").value;
    var userAir = document.getElementById("air").value;

    updateChart1(1,userTemp,userAir,false);
    j=1;
    updateChart1(1,userTemp,userAir,true);
}

/////////////////////////////////////////////////////////////////////////
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


