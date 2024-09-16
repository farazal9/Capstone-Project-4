

document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  
  let localEmail = localStorage.getItem("email");
  let localPassword = localStorage.getItem("password");


  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;


  if (userEmail === localEmail && userPassword === localPassword) {
      window.location.href = "../index.html"; 
  } else {
      alert("Something went wrong!!!");
  }
});


let a = fetch("https://fakestoreapi.com/users");

a.then((response) => {
  return response.json(); 
}).then((users) => {
  
  let mappedData = users.map((user) => {
      return {
          id: user.id,
          email: user.email, 
          username: user.username, 
          password: user.password 
      };
  });


  console.log(mappedData);


  localStorage.setItem("email", mappedData[0].email); 
  localStorage.setItem("password", mappedData[0].password); 
}).catch((error) => {
  console.error('Error fetching the API:', error);
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

