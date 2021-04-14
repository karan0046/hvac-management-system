window.onload = start;
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
    var min1,min2,max1,max2;

function myFunction1() {
    var person = prompt("Please enter your threshold", " ");
    if (person == null || person == 0){
      alert("Input again, This data is invalid  ❌" );
    }
    else if(person <5){
      alert("Don't you think it would be chilly 🤧")
    }
    else if(person>45){
      alert("Don't try to turn it into oven 😨")
    }
    else{
    if (person != null) {

      //let x = document.getElementById("temp1").innerText;
      
        firebase.database().ref('Threshold/Temperature').update({
          min : person
      });
      document.getElementById("temp1").innerHTML = person ;
    }
   }
}

function myFunction2() {
    var person = prompt("Please enter your threshold", " ");
    if (person == null || person == 0){
      alert("Input again, This data is invalid  ❌" );
    }
    else if(person <5){
      alert("Don't you think it would be chilly 🤧")
    }
    else if(person>45){
      alert("Don't try to turn it into oven 😨")
    }
    else{
    if (person != null) {
        firebase.database().ref('Threshold/Temperature').update({
            max : person
        });
        document.getElementById("temp2").innerHTML = person ;
    }
   }
}


function myFunction3() {
    var person = prompt("Please enter your threshold", " ");
    if (person == null || person < 0){
      alert("Input again, This data is invalid  ❎" );
    }
    else if(person>100){
      alert("It can trouble some sensitive people 😷")
  
    }
    else{
    if (person != null) {
        firebase.database().ref('Threshold/AirQuality').update({
            min : person
        });
      document.getElementById("temp3").innerHTML = person ;
    }
   }
}

  function myFunction4() {
    var person = prompt("Please enter your threshold", " ");
    if (person == null || person < 0){
      alert("Input again, This data is invalid  ❎" );
    }
    else if(person>100){
      alert("It can trouble some sensitive people 😷")
  
    }
    else{
    if (person != null) {
        firebase.database().ref('Threshold/AirQuality').update({
            max : person
        });
      document.getElementById("temp4").innerHTML = person ;
    }
   }
}


function logout(){
  firebase.auth().signOut();
}

function start(){
  firebase.database().ref('Threshold/AirQuality').on('value',function(snapshot){
    document.getElementById("temp4").innerHTML = snapshot.val().max;
    document.getElementById("temp3").innerHTML = snapshot.val().min;
    
  });
  firebase.database().ref('Threshold/Temperature').on('value',function(snapshot){
    
    document.getElementById("temp2").innerHTML = snapshot.val().max;
    document.getElementById("temp1").innerHTML = snapshot.val().min;
  });
}
  
