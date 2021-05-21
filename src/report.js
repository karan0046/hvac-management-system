  
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

  // create Report
  let contactInfo = firebase.database().ref('Report');
    function send() {

    //   Get input Values
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let message = document.getElementById("Message").value;
    //console.log(name, email, message);

    saveContactInfo(name, email, message);

    alert("Report Saved");

    //sendEmail(name,email,message);
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

    //-----------------------
    //upload Report
//selecting all required elements
const dropArea = document.querySelector(".drag-area"),
dragText = dropArea.querySelector("header"),
button = dropArea.querySelector("button"),
input = dropArea.querySelector("input");
let file; //this is a global variable and we'll use it inside multiple functions

button.onclick = ()=>{
  input.click(); //if user click on the button then the input also clicked
}

input.addEventListener("change", function(){
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = this.files[0];
  dropArea.classList.add("active");
  showFile(); //calling function
});


//If user Drag File Over DropArea
dropArea.addEventListener("dragover", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  dropArea.classList.add("active");
  dragText.textContent = "Release to Upload File";
});

//If user leave dragged File from DropArea
dropArea.addEventListener("dragleave", ()=>{
  dropArea.classList.remove("active");
  dragText.textContent = "Drag & Drop to Upload File";
});

//If user drop File on DropArea
dropArea.addEventListener("drop", (event)=>{
  event.preventDefault(); //preventing from default behaviour
  //getting user select file and [0] this means if user select multiple files then we'll select only the first one
  file = event.dataTransfer.files[0];
  showFile(); //calling function
});


function showFile(){
  let fileType = file.type; //getting selected file type
  //let validExtensions = ["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document","image/jpeg", "image/jpg", "image/png"]; //adding some valid image extensions in array

  //if ( /\.(jpe?g|png|gif)$/i.test(file.name) === false ) { alert("not an image!"); }

  if(/\.(jpe?g|png|pdf|doc|txt|docx)$/i.test(file.name)){ //if user selected file is an image or pdf file
    let fileReader = new FileReader(); //creating new FileReader object
    fileReader.readAsDataURL(file);
    fileReader.onload = ()=>{
      let fileURL = fileReader.result; //passing user file source in fileURL variable
      //dragText.textContent = "check";
      //button.textContent = "check";
      let bt = `<span></span> <button type = "submit" onclick = "upload()">UPLOAD</button>`;
      //let imgTag = `<img src="${fileURL}" alt="">`; //creating an img tag and passing user selected file source inside src attribute
      //button.textContent = "check";
      dropArea.innerHTML = bt; //adding that created img tag inside dropArea container
      let h = dropArea.querySelector("span");
      h.textContent = file.name;
    }
    
  }else{
    alert("This is not a valid File!");
    dropArea.classList.remove("active");
    dragText.textContent = "Drag & Drop to Upload File";
  }
}

function upload(){
  
  let storageRef = firebase.storage().ref("Report/"+file.name);
  let task = storageRef.put(file).catch(function(error){
    alert.message(error.message);
  });

  window.alert("file uploaded");
  
  //dropArea.classList.add("active");
  dropArea.innerHTML = `
  <header>Drag & Drop to Upload File</header>
  <span>OR</span>
  <button>Browse File</button>
  <input type="file" hidden>`;
  
  
  //window.location.href = "report.html"

}

