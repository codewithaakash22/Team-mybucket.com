// let url = "https://fakestoreapi.com/products";
let url = "https://fakestoreapi.in/api/products";

let caption = document.querySelectorAll(".caption");
let imgs = document.querySelectorAll(".item-image");
let price = document.querySelectorAll(".price");
async function getItem() {
    try {
        let item = await axios.get(url);
        return item.data;
    }
    catch (er) {
        return [];
    }
}


// async function itemData() {
//     let arr = await getItem();
//     for (let i = 0; i < 7; i++) {
//         caption[i].innerText = arr[i].title;
//         imgs[i].setAttribute("src", arr[i].image);
//         price[i].innerText = `₹ ${arr[i].price * 80}`;
//     }
// }


async function getData() {
    let data = await getItem();
    let arr = data.products;
    for (let i = 0; i < 14; i++) {
        let r = i;
        caption[i].innerText = arr[r].title;
        imgs[i].setAttribute("src", arr[r].image);
        price[i].innerText = `₹ ${arr[r].price * 80}`;

    }

}

// document.addEventListener("DOMContentLoaded",getData);

let items = document.querySelectorAll(".item-link");


function redirectToProductDetails(productId) {
    localStorage.setItem("selectedProductId", productId);
    window.location.href = "productPage.html";
}