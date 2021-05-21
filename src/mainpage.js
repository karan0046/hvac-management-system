
//let contactInfo = firebase.database().ref('contact_us');

function contact(){
    //alert("working")

    var name = document.getElementById("Nm").value;
    var email = document.getElementById("Em").value;
    var message = document.getElementById("Mm").value;
    //console.log(name, email, message);

    //saveContactInfo(name, email, message);
    alert(name);

    

}

function saveContactInfo(name, email, message) {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        name: name,
        email: email,
        message: message,
    });
}