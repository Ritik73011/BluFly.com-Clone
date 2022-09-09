
let form = document.querySelector("form")
let userData = JSON.parse(localStorage.getItem("userData")) || [];
let orderHistory = JSON.parse(localStorage.getItem("orderHistory")) || [];

if(userData.length===0){
    document.getElementById("main2").style.display = "none";
}
else{
    document.getElementById("main").style.display = "none";
}
form.addEventListener("submit",function(){
    event.preventDefault();
    if(userData.length===0){
        alert("please signup first")
    }
    else{
    userData.map(function(ele){

        if(checkSignin(ele.email,ele.password) == true){
            alert("LogIn successful");
            document.getElementById("main").style.display = "none";
        }
        else{
            alert("Wrong Username or Password");
        }
    });
}
})

function checkSignin(mail,passw){

    var email = document.getElementById("email").value;
    var pas = document.getElementById("pass").value;
    
    if(email===mail && passw===pas){
        return true;
    }
    return false;
}

var leftDiv =document.getElementById("left");

if(orderHistory.length===0){
    var h3 = document.createElement("h3");
    h3.innerText="No Order History";
    leftDiv.append(h3);
}
else{
orderHistory.map(function(elem){
 var flexDiv = document.createElement("div");
 flexDiv.setAttribute("id","flexDiv");

 var img = document.createElement("img");
 img.setAttribute("src",elem.oImg);

 var h4 =document.createElement("h4");
 h4.innerText=elem.oName;

 var p = document.createElement("p");
 p.innerText = "$" + elem.oPrice;

 flexDiv.append(img,h4,p);

 leftDiv.append(flexDiv);
});
}
