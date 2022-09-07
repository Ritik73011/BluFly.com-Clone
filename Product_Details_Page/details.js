var cart = JSON.parse(localStorage.getItem("cart")) || [];
   
   
for(var i =0; i<1;i++)
{
 document.getElementById("productName").innerText=cart[i].name;
 document.getElementById("sprice").innerText=cart[i].sprice;
 document.getElementById("image").setAttribute("src",cart[i].img);
}

 var img=document.getElementsByClassName("img1").src;
 var img2=document.getElementsByClassName("img2").src;
 var img3=document.getElementsByClassName("img3").src;

 document.getElementsByClassName("img1").addEventListener("click",function(){
 document.getElementById("image").setAttribute("src",img);
});

document.getElementsByClassName("img2").addEventListener("click",function(){
    document.getElementById("image").setAttribute("src",img2);
   });

   document.getElementsByClassName("img3").addEventListener("click",function(){
    document.getElementById("image").setAttribute("src",img3);
   });