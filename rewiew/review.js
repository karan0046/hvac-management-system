function review(){
    var data = document.getElementById("exampleFormControlTextarea1").value;
    if (data!=""){
        var reviewTag = document.getElementById("reviewTag");
        var r = document.createElement("div");
        var c = document.createElement("span");
        var d = document.createTextNode(data);
        const randomColor = Math.floor(Math.random()*16777215).toString(16);

        r.className = "review";
        r.style.backgroundColor=randomColor;
        c.className = "content";

        c.appendChild(d);
        r.appendChild(c);

        reviewTag.appendChild(r);

        document.getElementById("exampleFormControlTextarea1").value="";
    }
}