
    var cart2= JSON.parse(localStorage.getItem("cartData")) || [];

    var cartBlock = document.getElementById("cartBlock");

    getStorageItem();
    function getStorageItem(){
        event.preventDefault();
        document.getElementById("cartBlock").innerText="";
     cart2.map(function(ele,indx){
        let div = document.createElement("div");
        div.setAttribute("class", "cartCard");
        let Img = document.createElement("img");
        Img.setAttribute("src", ele.pImg);
        let cartDel = document.createElement("div");
        cartDel.setAttribute("class", "cartDel");
        let h2 = document.createElement("h2");
        h2.innerText=ele.pName;
        h2.setAttribute("class", "cartT");

        let qunt = document.createElement("div");
        qunt.setAttribute("id","quant");

        let remove = document.createElement("button");
        remove.setAttribute("id","totalBtn")
        remove.innerText="remove";

        remove.addEventListener("click",function(){
            cart2.splice(indx,1);
            localStorage.setItem("cartData",JSON.stringify(cart2));
            getStorageItem();
        });
        qunt.append(remove);

        let priceCart = document.createElement("p");
        priceCart.setAttribute("class", "priceCart");
        priceCart.innerText =ele.pPrice;
        cartDel.append(h2,qunt);
        div.append(Img, cartDel, priceCart);
        cartBlock.append(div);

     });
    }
    
     var total = [];
     cart2.map(function(ele){
         var str =  ele.pPrice.replace('$', '');
         total.push(str);
     });
     
     var sum =0;
     for(var i =0;i<total.length;i++)
     {
         sum+=parseInt(total[i]);
     }

     document.getElementById("TotalCart").innerText="$"+sum;

    
     if(cart2.length===0){
        document.getElementById("cartBlock").innerHTML="Cart is empty..."
     }

     document.getElementById("checkout").addEventListener("click",function(){
        if(cart2.length===0){
            alert("Cart is empty please products");
        }
        else{
            location.href="checkout.html";
        }
     });

     document.getElementById("cut").addEventListener("click",function(){
        document.getElementById("cart").style.display = "none";
        
     });
