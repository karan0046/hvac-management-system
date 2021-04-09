
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


  // chat sectoin

  var reply = 0;
  function review(){
    var data = document.getElementById("exampleFormControlTextarea1").value;
    if (data!=""){
        var reviewTag = document.getElementById("reviewTag");
        var r = document.createElement("div");
        var c = document.createElement("span");
        var d = document.createTextNode(data);
        
        
        r.className = "review";
        r.style.width="max-content";

        if(reply == 0){
            r.style.backgroundColor="#c4def7";
            reply = 1;
        }else{
            reply = 0;
            r.style.backgroundColor="#9ad1c3";
            r.style.textAlign="right";
            
        }
        
        c.className = "content";

        c.appendChild(d);
        r.appendChild(c);

        reviewTag.appendChild(r);

        document.getElementById("exampleFormControlTextarea1").value="";
    }
}

//time

var today = new Date();
var day = today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+'    '+daylist[day]+ '  '+time;
 
document.getElementById("time").innerHTML = dateTime +`<br>`;

function start(){
  firebase.database().ref(date).on('value',function(snapshot){
    document.getElementById("temp4").innerHTML = snapshot.val().message;
    
  });
}

function logout(){
  firebase.auth().signOut();
}