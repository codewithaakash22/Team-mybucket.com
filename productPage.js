let url = "https://fakestoreapi.in/api/products";
let img = document.querySelector("img");
let h1 = document.querySelector(".product-title");
let price = document.querySelector(".price");
let description = document.querySelector(".description");
let category = document.querySelector(".Categories");
let brand = document.querySelector(".brand");
let content = document.querySelector(".tab-content");

async function getData(){
    try{
        let obj = await axios.get(url);
        return (obj.data.products);
    }catch(err){
        return [];
    }
}

async function setData(id) {
    let products = await getData();
    let i = id;
    img.setAttribute("src",products[i].image);
    h1.innerText = products[i].title;
    price.innerText = `₹${products[i].price * 80}`;
    description.innerText = products[i].description;
    category.innerText = products[i].category;
    brand.innerText = products[i].brand;
    content.innerText = products[i].description;
    console.log(id);
}


document.addEventListener("DOMContentLoaded",()=>{
    setData(id);
});

const id = localStorage.getItem("selectedProductId");
console.log("Product ID:", id);
