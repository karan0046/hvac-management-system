

function send(){
    //window.alert("working");

    var userEmail = document.getElementById("Email").value;
    
    firebase.auth().sendPasswordResetEmail(userEmail).then(function(){
        window.alert("Reset link is sent Please Check and Login again ");
        window.location.href = "login.html";
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);


        window.location.href = "forgot.html";
        // ...
      });
}