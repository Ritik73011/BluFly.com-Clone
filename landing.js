var data = JSON.parse(localStorage.getItem("userData")) || [];
display();
function display(){
    
    var x = document.createElement("h2");
    x.innerText="ACCOUNT DETAILS"
    var y = document.createElement("h4");
    y.innerText=data[data.length-1].name

    var z =document.createElement("p");
    z.innerText=data[data.length-1].email;
    document.querySelector(".right").append(x, y, z);
    
}