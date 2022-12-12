async function DisProducts() {
  let res = await fetch(
    "https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products"
  );
  let products = await res.json();
  console.log(products);
  let divproducts = document.getElementById("products");
  for (let product of products) {
    let divproduct = document.createElement("div");
    divproducts.innerHTML += `
    <div class="product"> 
        <img src=${product.image}>
        <h2>${product.description}</h2>
        <p>${product.price}</p>
    </div>`;
  }
}
DisProducts();
