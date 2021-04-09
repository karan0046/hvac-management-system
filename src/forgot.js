

function send(){
    //window.alert("working");

    var userEmail = document.getElementById("Email").value;
    
    firebase.auth().sendPasswordResetEmail(userEmail).then(function(){
        window.alert("Reset link is sent Please Check and Login again ");
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error : " + errorMessage);
    
        // ...
      });
}