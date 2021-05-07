
/*firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //window.alert("login successful")
    // User is signed in.
    
    if(log == 0){log = 1;window.location.href = "hvac.html";}
    
    //document.getElementById("user_div").style.display = "block";
    
    //document.getElementById("lo").style.display = "none";

    /*var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    }
  } else {
    // No user is signed in.
    //document.getElementById("lo").style.display = "block";
    document.getElementById("user_div").style.display = "none";
    //log = 0;

  }
});*/

function login(){

  var userEmail = document.getElementById("Email").value;
  var userPass = document.getElementById("Password").value;
  
  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).then(cred =>{
    window.location.href = "room.html";
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);
    window.location.href = "login.html";
    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
