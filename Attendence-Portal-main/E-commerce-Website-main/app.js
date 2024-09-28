document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 10.00, image: 'images/product1.jpg' },
        { id: 2, name: 'Product 2', price: 20.00, image: 'images/product2.jpg' },
        { id: 3, name: 'Product 3', price: 30.00, image: 'images/product3.jpg' },
        { id: 4, name: 'Product 4', price: 40.00, image: 'images/product4.jpg' }
    ];

    const productContainer = document.getElementById('products');

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productContainer.appendChild(productElement);
    });
});

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart');
}
