let getPinkBg = document.querySelectorAll("#pinkBg");
for(x=0; x<getPinkBg.length; x++){
  getPinkBg[x].style.backgroundColor = "#F55266";

}



let getimgBg = document.getElementById("imgBg");

getimgBg.style.backgroundColor = "#DAE8FA";


// signup navigate to login 

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  let userName = document.getElementById("userName").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword = document.getElementById("userPassword").value;


  console.log(userName, userEmail, userPassword);

  if (userName && userEmail && userPassword) {
      
      localStorage.setItem("name", userName);
      localStorage.setItem("email", userEmail);
      localStorage.setItem("password", userPassword);
      
     
      window.location.href = "./login.html";
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


  document.getElementById("userName").value = mappedData[0].username; 
  document.getElementById("userEmail").value = mappedData[0].email;   
  document.getElementById("userPassword").value = mappedData[0].password; 

}).catch((error) => {
  console.error('Error fetching the API:', error);
});