
var min1,min2,max1,max2;

function myFunction1() {
    var person = prompt("Please enter your threshold", " ");
    if (person == null || person == 0){
      alert("Input again, This data is invalid  ❌" );
    }
    else if(person <20){
      alert("Don't you think it would be chilly 🤧")
    }
    else if(person>28){
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
      alert("Input again, This data is invalid  ❎" );
    }
    else if(person>100){
      alert("It can trouble some sensitive people 😷")
  
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
    if (person == null || person == 0){
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
    if (person == null || person == 0){
      alert("Input again, This data is invalid  ❌" );
    }
    else if(person <20){
      alert("Don't you think it would be chilly 🤧")
    }
    else if(person>28){
      alert("Don't try to turn it into oven 😨")
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



  
