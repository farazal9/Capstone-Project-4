document.getElementById("loginForm").addEventListener("submit",function(event){
    event.preventDefault();

  let localEmail = localStorage.getItem("email")
  let localPassword = localStorage.getItem("password")

let userEmail = document.getElementById("userEmail").value;


let userPassword = document.getElementById("userPassword").value;


if(userEmail === localEmail && userPassword === localPassword){
    window.location.href = "../index.html"

}else{
    alert("Something went Wrong!!!");
}

    
});




// styling

let getPinkBg = document.querySelectorAll("#pinkBg");
for(x=0; x<getPinkBg.length; x++){
  getPinkBg[x].style.backgroundColor = "#F55266";

}


let getimgBg = document.getElementById("imgBg");

getimgBg.style.backgroundColor = "#DAE8FA";


let getWhiteBg = document.querySelectorAll("#whiteBg");
for(x=0; x<getWhiteBg.length; x++){
  getWhiteBg[x].style.backgroundColor = "#E4EFFB";

}

