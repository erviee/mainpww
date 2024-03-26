alert('Group Members: Prenciona, Duclayan, Benliro, Camigla, Gaboc, Asirot')
// Find all Add to Cart buttons using document.querySelectorAll
var addToCartButtons = document.querySelectorAll('.addToCartBtn');

// Loop through each button and attach event listener
addToCartButtons.forEach(function(button) {
    button.addEventListener('click', addToCart);
});

// Define the function to execute when the button is clicked
function addToCart(event) {
    // Your logic to add item to cart
    var itemID = event.target.getAttribute('data-item-id'); // Example: Get item ID from data attribute
    var quantity = 1; // Example: Default quantity is 1

    // Example: Send data to backend using fetch API
    fetch('/place-order', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            itemID: itemID,
            quantity: quantity
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to place order');
        }
        return response.json();
    })
    .then(data => {
        // Handle successful response (if needed)
        alert('Order placed successfully!');
    })
    .catch(error => {
        // Handle error
        console.error('Error placing order:', error);
        alert('Failed to place order. Please try again later.');
    });
}
