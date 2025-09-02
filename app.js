
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(data => displayProducts(data))
    .catch(error => console.error("Error fetching data:", error));

function displayProducts(products) {
    const container = document.getElementById("product-container");

    const productCards = products.map(product => `
        <div class="card">
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="category">Category: ${product.category}</p>
            <p>${product.description.substring(0, 10)}...</p>
            <p class="price">Price: $${product.price}</p>
            <p class="rating">Rating:  ${product.rating.rate} (${product.rating.count} reviews)</p>
        </div>
    `);

   
    container.innerHTML = productCards.join('');
}
