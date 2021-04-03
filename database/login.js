firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    //window.alert("login successful")
    // User is signed in.
    //window.location.href = "./forgot.html";
    document.getElementById("user_div").style.display = "block";
    
    document.getElementById("lo").style.display = "none";

    var user = firebase.auth().currentUser;
    if(user != null){
      var email_id = user.email;
      document.getElementById("user_para").innerHTML = "Welcome User : " + email_id;
    }
  } else {
    // No user is signed in.
    document.getElementById("lo").style.display = "block";
    document.getElementById("user_div").style.display = "none";
    

  }
});

function login(){

  var userEmail = document.getElementById("Email").value;
  var userPass = document.getElementById("Password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}
