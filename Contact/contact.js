
let contactInfo = firebase.database().ref('Message');
function send() {

  //   Get input Values
  let name = document.getElementById("Name").value;
  let email = document.getElementById("Email").value;
  let message = document.getElementById("Message").value;
  //console.log(name, email, message);

  saveContactInfo(name, email, message);

  alert("Message sent successfullly");
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}