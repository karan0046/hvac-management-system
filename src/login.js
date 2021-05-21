



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

function room() {
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var user = firebase.auth().currentUser;
      if(user != null){
        var email_id = user.email;
        var pos = email_id.indexOf("@");
        var uid = email_id.slice(0,pos);

        if(uid == "iit2019046")uid = "Karan Sah"
        if(uid == "iit2019048")uid = "Ravikant Vaishnav"
        if(uid == "iit2019031")uid = "Sarvesh"
        if(uid == "iit2019028")uid = "Shubham Netam"
        notify("sucess","Welcome User : " + uid);
      }
    } 
  });
  
}

function notify(type,message){
  (()=>{
    let n = document.createElement("div");
    let id = Math.random().toString(36).substr(2,10);
    n.setAttribute("id",id);
    n.classList.add("notification",type);
    n.innerText = message;
    document.getElementById("notification-area").appendChild(n);
    setTimeout(()=>{
      var notifications = document.getElementById("notification-area").getElementsByClassName("notification");
      for(let i=0;i<notifications.length;i++){
        if(notifications[i].getAttribute("id") == id){
          notifications[i].remove();
          break;
        }
      }
    },10000);
  })();
}


