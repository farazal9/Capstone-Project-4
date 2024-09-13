let getPinkBg = document.querySelectorAll("#pinkBg");
for(x=0; x<getPinkBg.length; x++){
  getPinkBg[x].style.backgroundColor = "#F55266";

}




let getimgBg = document.getElementById("imgBg");

getimgBg.style.backgroundColor = "#DAE8FA";



// form js

document.getElementById("signupForm").addEventListener("submit",function(event){
event.preventDefault();

let userName = document.getElementById("userName").value;


let userEmail = document.getElementById("userEmail").value;


let userPassword = document.getElementById("userPassword").value;



console.log(userName,userEmail,userPassword);


if(userName && userEmail && userPassword){

  localStorage.setItem("name",userName)
  localStorage.setItem("email",userEmail)
  localStorage.setItem("password",userPassword)
    
  window.location.href = "./login.html"
}

});

