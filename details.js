var cart = JSON.parse(localStorage.getItem("ProductDetails")) || [];
   
 
//Important


for(var i =0; i<1;i++)
{
 document.getElementById("img1").setAttribute("src",cart[i].image);
 document.getElementById("img2").setAttribute("src",cart[i].secImage);
 document.getElementById("image").setAttribute("src",cart[i].image);
 document.getElementById("productName").innerText=cart[i].name;
 document.getElementById("sellerName").innerText=cart[i].brandName;
 document.getElementById("sprice").innerText=cart[i].sp;
 document.getElementById("ogPrice").innerText=cart[i].price;
 document.getElementById("save").innerText=cart[i].save;
 document.getElementById("mimg2").setAttribute("src",cart[i].secImage);
 document.getElementById("mimg1").setAttribute("src",cart[i].image);
}

//For Big Screen Start
 var img=document.getElementById("img1").src;
 var img2=document.getElementById("img2").src;
 var img3=document.getElementById("img3").src;

 document.getElementById("img1").addEventListener("click",function(){
 document.getElementById("image").setAttribute("src",img);
});

document.getElementById("img2").addEventListener("click",function(){
    document.getElementById("image").setAttribute("src",img2);
   });

   document.getElementById("img3").addEventListener("click",function(){
    document.getElementById("image").setAttribute("src",img3);
   });
//Big Image Screen End

   //For Small Screen Start
   var mimg=document.getElementById("mimg1").src;
   var mimg2=document.getElementById("mimg2").src;
   var mimg3=document.getElementById("mimg3").src;
  
   document.getElementById("mimg1").addEventListener("click",function(){
   document.getElementById("image").setAttribute("src",mimg);
  });
  
  document.getElementById("mimg2").addEventListener("click",function(){
      document.getElementById("image").setAttribute("src",mimg2);
     });
  
     document.getElementById("mimg3").addEventListener("click",function(){
      document.getElementById("image").setAttribute("src",mimg3);
     });
 // Small Image End


 //BUTTON CLICK START
 document.getElementById("addCart").addEventListener("click",function(){
    setProductDetailsToLocalStorage();
 });

//BUTTON CLICK END


  //Radio BUTTON Start
  var radio="";
 function radioChecked(){
   if(document.getElementById('s').checked)
   {
    radio="S";
   }
   else if(document.getElementById('m').checked)
   {
    radio="M";
   }
   else if(document.getElementById('l').checked)
   {
    radio="L";
   }
   else if(document.getElementById('xl').checked)
   {
    radio="XL";
   }
   else{

   }
 }

 //radio Button End


 //LOCAL STROAGE START

 var data = JSON.parse(localStorage.getItem("cartData")) || [];
 function setProductDetailsToLocalStorage()
 {
    radioChecked();
    if(radio===""){
        alert("please select size");
    }
    else{
        var parseImg = document.getElementById("image").src;
        var parseProductName = document.getElementById("productName").innerText;
        var parseSize = radio;
        var parsePrice = document.getElementById("ogPrice").innerText;

        //console.log(parseImg,parseProductName,parseSize,parsePrice);

        var obj = {
            pName:parseProductName,
            pPrice:parsePrice,
            pSize:parseSize,
            pImg:parseImg
        };

        data.push(obj);

        localStorage.setItem("cartData",JSON.stringify(data));
    }
 }


 //LOCAL STROAGE END
