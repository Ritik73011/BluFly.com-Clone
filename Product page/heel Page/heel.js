var HeelProduct=[
    {
        id:"1",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395698_RLLZ_1_360x.jpg?v=1662075666",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313395698_RLLZ_2_large.jpg?v=1662075668",
        brandname:"VALENTINO",
        name:"VALENTINO ROCKSTUD CAGED 100 PATENT PUMP",
        sp:"$1,100.00",
        price:"$704.99",
        save:"Save 36%",

    },

    {
        id:"2",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/YxYiuJn3H7EHRvOuSfgzUPwdyl9tdS9q-25_360x.jpg?v=1661775274",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/4EtsBtZRU4e3IVqmLMbjOEaaSCgK8WX2-25_large.jpg?v=1661775276",
        brandname:"ALEXANDER WANG",
        name:"JULIE ANKLE STRAP CRYSTAL LOGO WOMENS LEATHER",
        sp:"$795.00",
        price:"$464.99 ",
        save:"Save 42%",

    },

    {
        id:"3",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313408432_RLLZ_1_360x.jpg?v=1661656619",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313408432_RLLZ_2_large.jpg?v=1661656620",
        brandname:"VALENTINO",
        name:"VALENTINO ROCKSTUD CAGED 100 PATENT PUMP",
        sp:"$1,100.00",
        price:"$663.99",
        save:"Save 40%",

    },

    {
        id:"4",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313382839_RLLZ_1_360x.jpg?v=1661961894",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313382839_RLLZ_2_large.jpg?v=1661961895",
        brandname:"MANOLO BLAHNIK",
        name:"MANOLO BLAHNIK HANGISI 70 SATIN PUMP",
        sp:"$1,125.00",
        price:"$759.99",
        save:"Save 32%",

    },

    {
        id:"5",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313263445_RLLZ_1_c250cd52-9fb4-42b1-9c5e-c7ec1e03c41c_360x.jpg?v=1662139891",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313263445_RLLZ_2_large.jpg?v=1662139892",
        brandname:"VALENTINO",
        name:"VALENTINO ROCKSTUD ALCOVE 85 LEATHER PUMP",
        sp:"$1,050.00",
        price:"$697.99",
        save:"Save 34%",

    },

    {
        id:"6",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313216039_RLLZ_1_360x.jpg?v=1661620254",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313216039_RLLZ_2_large.jpg?v=1661620255",
        brandname:"JIMMY CHOO",
        name:"JIMMY CHOO LOVE 85 GLITTER PUMP",
        sp:"$750.00",
        price:"$443.99",
        save:"Save 41% ",

    },

    {
        id:"7",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313392173_RLLZ_1_360x.jpg?v=1661375353",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313392173_RLLZ_2_large.jpg?v=1661375355",
        brandname:"VALENTINO",
        name:"VALENTINO ROCKSTUD CAGED 100 LEATHER PUMP",
        sp:"$1,100.00",
        price:"$829.99 ",
        save:"Save 25%",

    },

    {
        id:"8",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313399754_RLLZ_1_360x.jpg?v=1661352129",
        image2:"",
        brandname:"VALENTINO",
        name:"VALENTINO ROCKSTUD CAGED 100 LEATHER PUMP ",
        sp:"$1,100.00",
        price:"$829.99",
        save:"Save 25%",

    },

    {
        id:"9",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313364612_RLLZ_1_360x.jpg?v=1661932273",
        image2:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313364612_RLLZ_2_large.jpg?v=1661932275",
        brandname:"CHRISTIAN LOUBOUTIN",
        name:"CHRISTIAN LOUBOUTIN SPORTY KATE 85 PATENT PUMP",
        sp:"$795.00",
        price:"$598.99",
        save:"Save 25%",

    },

    {
        id:"10",
        image_url:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313382834_RLLZ_1_360x.jpg?v=1662107021",
        image2:"",
        brandname:"MANOLO BLAHNIK",
       
        name:"MANOLO BLAHNIK HANGISI 50 SATIN PUMP",
        sp:"$995.00",
        price:"$849.99 ",
        save:"Save 15% ",

    },

    // {
    //     id:"11",
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     sp:"",
    //     price:"",
    //     save:"",

    // },

    // {
    //     id:"12",
    //     image_url:"",
    //     image2:"",
    //     brandname:"",
    //     name:"",
    //     sp:"",
    //     price:"",
    //     save:"",

    // },
];


 HeelProduct.map(function(elem) { 

    var divs=document.createElement("div");
    divs.setAttribute("class", "product_box")

    var image=document.createElement("img");
     image.setAttribute("id", "Image_id") 
     image.setAttribute("src",elem.image_url);

    var image_box = document.createElement("div");
    image_box.setAttribute("class", "image_box")

   
   image_box.addEventListener("mouseout",  function() {
    image.setAttribute("src",elem.image_url);
    console.log(0)
})
   
        image_box.addEventListener("mouseover", function () {
           image.setAttribute("src",elem.image2);
            console.log(1)
        });
       
    
     
    image_box.append(image);


    var h5=document.createElement("h5");
    h5.innerText=elem.brandname;

    var h4=document.createElement("h4");
    h4.innerText=elem.name;

    var priceBox=document.createElement("div");

    var sp=document.createElement("p");
    sp.innerText=elem.strikedoffprice ;


    var price=document.createElement("p");
    price.innerText=elem.price;

    price.setAttribute("class", "price_line")
     
    
    var save=document.createElement("p");
    save.innerText=elem.save;
     
     save.setAttribute("class", "save_line")

    priceBox.append(sp,price,save);
    divs.append(image_box,h5,h4,priceBox);
    var Product =  document.getElementById("Product")
    Product.append(divs);
    document.querySelector("#Parent").append(Product);
   
    
}

);


var opt = document.getElementsByClassName("options")
var collection = document.getElementsByClassName("collections")

function hide(collection){
    for(var i=0; i<opt.length; i++){
     if(opt[i].style.display=="none"){
        opt[i].style.display = "block";
    }
    else{
        opt[i].style.display = "none"
      
    }

    }
  
 }
