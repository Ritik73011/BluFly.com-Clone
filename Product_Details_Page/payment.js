var cartData = JSON.parse(localStorage.getItem("cartData")) || [];


var total = [];
cartData.map(function(ele){
    var str =  ele.pPrice.replace('$', '');
    total.push(str);
});

var sum =0;
for(var i =0;i<total.length;i++)
{
    sum+=parseInt(total[i]);
}


document.getElementById("pay").innerText="Pay $"+sum;

document.getElementById("pay").addEventListener("click",function(){
    var cardNumber = document.getElementById("cardNumber").value;
    var expYear = document.getElementById("expYear").value;
    var cvv = document.getElementById("cvv").value;
     
    if(cardNumber===""){
        alert("please fill card number");
    }
    else if(expYear===""){
        alert("enter exp date");
    }
    else if(cvv===""){
        alert("enter cvv");
    }
    else{

        if(cardNumber==="123456789" && expYear==="2024-05-02" && cvv==="000"){
            storeOrderHistory();
            alert("order successfully placed")
            //location.href="";
        }
        else{
            alert("wrong details");
        }
    }

});

var arr = JSON.parse(localStorage.getItem("orderHistory")) || [];
function storeOrderHistory(){

    cartData.map(function(elem){
        var obj ={
            oName:elem.pName,
            oPrice:elem.pPrice,
            oImg:elem.pImg
        }

        arr.push(obj);
    });

    localStorage.setItem("orderHistory",JSON.stringify(arr));
}