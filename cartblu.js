

    var cart2= JSON.parse(localStorage.getItem("cartData")) || [];

    var cartBlock = document.getElementById("cartBlock");

     cart2.map(function(ele){
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

        let plus = document.createElement("button");
        let totalQ = document.createElement("button");
        let minus = document.createElement("button");
        totalQ.setAttribute("id","totalBtn")
        plus.innerText="+";
        totalQ.innerText=ele.quant;
        minus.innerText="-";

        qunt.append(plus,totalQ,minus);

        let priceCart = document.createElement("p");
        priceCart.setAttribute("class", "priceCart");
        priceCart.innerText =ele.pPrice;
        cartDel.append(h2,qunt);
        div.append(Img, cartDel, priceCart);
        cartBlock.append(div);

     });
    
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

     document.querySelector(".fa-solid fa-xmark").addEventListener("click",function(){
        console.log("hii");
     })