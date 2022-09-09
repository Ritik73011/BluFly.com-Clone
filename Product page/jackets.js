var coatJacket=[
    {
        id:1,
        image_url :"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1055283485_RLLZ_1_1080x.jpg?v=1662560039",
        image2 :"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1055283485_RLLZ_2_large.jpg?v=1662560040",
        brandname: "BURBERRY",
        name:"BURBERRY DIAMOND QUILT JACKE ",
        price:"$1,239.99 ",
        strikedoffprice:"1,550.00",
        save:"Save 20%",
    },


    {
        id:2,
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411727649_RLLZ_1_eb986afb-7420-48c8-af94-ca5d41271a92_360x.jpg?v=1660922277",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411727649_RLLZ_2_large.jpg?v=1660922278",
        brandname:"WALTER BAKER",
        name: "WALTER BAKER MARLEY LEATHER BLAZER",
        price:"$194.99 ",
        strikedoffprice:"698.00",
        save:"Save 72%",
    },

    {
        id: 3,
        
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1055315251_RLLZ_black_1_ccc46877-a0b2-40af-b170-7b085519badd_360x.jpg?v=1661957929",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1055315251_RLLZ_black_2_large.jpg?v=1661957930",
        brandname:"BURBERRY",
        name:"BURBERRY DETACHABLE HOOD TRENCH COAT",
        price:"$1,079.99",
        strikedoffprice:"1,350.00",
        save:"Save 20%",
    },

    {
        id:4,
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411172469_RLLZ_1_360x.jpg?v=1662411384",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411172469_RLLZ_2_large.jpg?v=1662411386",
        brandname:"JOHNNY WAS",
        name:"JOHNNY WAS OLIVIA SILK-LINED BLAZER",
        price:"$138.99 ",
        strikedoffprice:"355.00",
        save:"Save 61%",
    },

    {
        id:5,
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411285273_RLLZ_1_360x.jpg?v=1662286188",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411285273_RLLZ_2_large.jpg?v=1662286190",
        brandname:"FLEURETTE",
        name:"FLEURETTE WOOL COAT",
        price:"$535.99",
        strikedoffprice:"1,495.00",
        save:"Save 64%",
    },

    {
        id:6,
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411322077_RLLZ_1_360x.jpg?v=1662542273",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411322077_RLLZ_2_large.jpg?v=1662542275",
        brandname:"VINCE",
        name:"VINCE CROPPED LEATHER FLIGHT JACKET",
        price:"$500.00",
        strikedoffprice:"700.00",
        save:"Save 40%",
    },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // { 
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },

    // {
    //     id:1,
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     price:"",
    //     sp:"",
    //     save:"",
    // },
];

displayData(coatJacket)

function handleFilter(){

    var nameOrder=document.getElementById("BestSelling").value;
        if (nameOrder==="ascending") {
            coatJacket.sort(function (a,b) {     
        if(a.name > b.name) {
                return 1 ;
            }
        if(a.name < b.name) {
                return -1;
             } 
            
            return 0;
        });

    }
    if (nameOrder==="dscending") {
        coatJacket.sort(function (a,b) {    

       if(a.name > b.name) {
             return -1 ;
         }
      if(a.name < b.name) {
              return 1;
         } 

          return 0;
});

}
if (nameOrder==="highToLow") {
    coatJacket.sort(function (a,b) {    

    return b.price-a.price;
});

}

if (nameOrder==="low to high") {
    coatJacket.sort(function (a,b) {    

    return a.price-b.price;
});

}

        displayData(coatJacket)
        console.log(coatJacket)
    }


    function Price199(){
        var checkbox = document.getElementById("199")
      var filterData =  coatJacket.filter(function (elem){
        console.log(checkbox.checked)
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.price === 199
            
          }
          return 0
        })
        displayData(filterData);
       
    }
    function Price164(){
        var checkbox = document.getElementById("164")
      var filterData =  coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.price === 164
            
          }
          return 0
        })
        displayData(filterData);
       
    }
    function Price179(){
        var checkbox = document.getElementById("179")
      var filterData =   coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.price === 179
            
          }
          return 0
        })
        displayData(filterData);
       
    }

    function Armani(){
        var checkbox = document.getElementById("Armanif")
      var filterData =   coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.brandname === "EMPORIO ARMANI"
            
          }
          return 0
        })
        displayData(filterData);
       
    }

    function vince(){
        var checkbox = document.getElementById("vince")
      var filterData =   coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.brandname === "VINCE"
            
          }
          return 0
        })
        displayData(filterData);
       
    }

    function bb(){
        var checkbox = document.getElementById("bb")
      var filterData =   coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.brandname === "BCBGMAXAZRIA";
            
          }
          return 0
        })
        displayData(filterData);
       
    }

    function Am(){
        var checkbox = document.getElementById("Am")
      var filterData =   coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.brandname === "AIDAN MATTOX";
            
          }
          return 0
        })
        displayData(filterData);
       
    }


    function vacation(){
        var checkbox = document.getElementById("vacation")
      var filterData =   coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.name === "WOMEN'S VACATION DRESSES";
            
          }
          return 0
        })
        displayData(filterData);
       
    }

    function cocktail(){
        var checkbox = document.getElementById("cocktail")
      var filterData =  coatJacket.filter(function (elem){
          if(checkbox.checked == false){
            return 1;
          }
          else{
           return elem.name === "WOMEN'S COCKTAIL PARTY  DRESSES";
            
          }
          return 0
        })
        displayData(filterData);
       
    }





     



    
function displayData(data){
document.getElementById("Product").innerText = ""


  data.map(function(elem) { 
   

    var divs=document.createElement("div");
    divs.setAttribute("class", "product_box")

    var image=document.createElement("img");
     image.setAttribute("id", "Image_id") 
     image.setAttribute("src",elem.image_url);

    var image_box = document.createElement("div");
    image_box.setAttribute("class", "image_box")

   
   image_box.addEventListener("mouseout",  function() {
    image.setAttribute("src",elem.image_url);
   
})
   
        image_box.addEventListener("mouseover", function () {
           image.setAttribute("src",elem.image2);
            
        });
       
    
     
    image_box.append(image);


    var h5=document.createElement("h5");
    h5.innerText=elem.brandname;
    h5.setAttribute("Id","brand_Name");
    h5.setAttribute("class", "brandName")

    var h4=document.createElement("h4");
    h4.innerText=elem.name;
    h4.setAttribute("Id","NAME")

    var priceBox=document.createElement("div");

    var price=document.createElement("p");
    price.innerText="$"+elem.price;

    price.setAttribute("class", "price_line")
     
    var sp=document.createElement("p");
    sp.innerText="$"+elem.strikedoffprice +".99";
    sp.setAttribute("class","sp_line");

    var save=document.createElement("p");
    save.innerText=elem.save+"%";
     
     save.setAttribute("class", "save_line")

    priceBox.append(price,sp,save);
    divs.append(image_box,h5,h4,priceBox);
    var Product =  document.getElementById("Product")
    Product.append(divs);
    document.querySelector("#Parent").append(Product);
    
    


    divs.addEventListener("click",function(){

        myPage(elem)
        
    });
});

}


    var Arr=[];
function myPage(elem){
    
    // console.log(elem.price);
    
    var Obj={
        image:elem.image_url,
        secImage:elem.image2,
        brandName:elem.brandname,
        name:elem.name,
        price:elem.price,
        sp:elem.strikedoffprice,
        save:elem.save,
    }
    Arr.push(Obj);
    localStorage.setItem("ProductDetails" ,JSON.stringify(Arr));
    Arr=[];
}


