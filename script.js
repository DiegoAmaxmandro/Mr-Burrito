// This is the fuction to validate the inputs on login page.
function validate(){

   var username = document.getElementById("username").value;
   var password = document.getElementById("password").value;



    if (username == ""){
        alert("The username It's required to login!");
        
   
    }else if (password.length != "9"){
        alert("Password must have 9 characters!");
        
    
    }else{
        location.href = "indexp2.html";
        alert(`Hello ${username}! Welcome back!`);
  
        
    }

        
}




