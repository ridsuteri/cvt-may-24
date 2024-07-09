// fetch('https://fakestoreapi.com/products').then((response)=>{
//     return response.json()
// }).then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{
//     console.log(error)
// })

async function callApi() {
  let response = await fetch("https://fakestoreapi.com/products");
  let data = await response.json();
  //   console.log(data);

  data.forEach((product) => {
    let productDiv = document.createElement("div");
    let productContainer = document.querySelector(".product-list-container");
    productDiv.innerHTML = `
        <div class="card" style="width: 18rem; max-height:500px;">
        <img src="${product.image}" class="card-img-top" style="height: 200px" alt="...">
        <div class="card-body">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">$ ${product.price}</p>
            <a href="#" class="btn btn-primary">Add to cart</a>
        </div>
        </div>
    `;
    productContainer.appendChild(productDiv);
  });
}

callApi();
