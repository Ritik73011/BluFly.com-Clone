var cart = JSON.parse(localStorage.getItem("cart")) || [];
   
 
//Important

/*
for(var i =0; i<1;i++)
{
 document.getElementById("productName").innerText=cart[i].name;
 document.getElementById("sprice").innerText=cart[i].sprice;
 document.getElementById("image").setAttribute("src",cart[i].img);
}*/

//For Big Screen
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

   //For Small Screen
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