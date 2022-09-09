var form = document.querySelector("form");

var userData = JSON.parse(localStorage.getItem("userData")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  var data = {
    name: form.name.value,
    email: form.mail.value,
    password: form.pass.value,
  }
  
  if(checkEmails(data.email)===true){
    userData.push(data);
    alert("Account Created Succesfully");
    localStorage.setItem("userData",JSON.stringify(userData));
  }
  else{
    alert("\n"+"\n"+"Account with this Email already exists"+"\n"+"\n"+"\n"+"Please Log In !")
  }
});


function checkEmails(email){
    var filtered = userData.filter(function(element){
        return email === element.email;
    })
    if(filtered.length>0){
        return false;
    }
    else{
        return true;
    }

}