// Showing navbar when click menu on mobile view
const mobile = document.querySelector('.menu-toggle');
const mobileLink = document.querySelector('.sidebar');

mobile.addEventListener("click", function() {
    mobile.classList.toggle("is-active");  // Fixed classList reference
    mobileLink.classList.toggle("active"); // Ensure "active" is a string
});

// Close menu when click
mobileLink.addEventListener("click", function() {
   const menuBars = document.querySelector(".is-active");  // Fixed typo "quesrySelector"
   if(window.innerWidth <= 768 && menuBars) {
       mobile.classList.toggle("is-active");
       mobileLink.classList.toggle("active");
   }
});

// Move the menu to right and left when click back and next
var step = 100;  // Fixed missing declaration for 'step'
$(".back").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + step + "px"
    });
});

$(".next").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + step + "px"
    });
});

// When click back and next on menu filters
var stepFilter = 60;  // Moved declaration to top for clarity
$(".back-menus").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "-=" + stepFilter + "px"
    });
});

$(".next-menus").on("click", function(e) {
    e.preventDefault();
    $(".highlight-wrapper").animate({
        scrollLeft: "+=" + stepFilter + "px"
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("shrimpSoupModal");
    var btn = document.querySelector(".detail-card img[src='images/seafood.jpeg']"); // Ensure this matches the exact src in the HTML
    var span = document.getElementsByClassName("close")[0];

    if (btn) {
        btn.onclick = function() {
            modal.style.display = "block";
        };
    } else {
        console.log("The button or image to trigger the modal was not found.");
    }

    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        };
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});

function addToCart() {
    const form = document.getElementById('addToCartForm');
    const size = form.size.value;
    const extras = [];
    document.querySelectorAll('#addToCartForm input[name="extras"]:checked').forEach(el => extras.push(el.value));
    const quantity = form.quantity.value;

    const cartItem = {
        product: "Shrimp Soup",
        size: size,
        extras: extras,
        quantity: parseInt(quantity, 10)
    };

    // Simulate adding to cart and show confirmation (log to console for testing)
    console.log("Added to cart:", cartItem);
    alert("Added to cart:\n" + JSON.stringify(cartItem, null, 2));
    
    // Close modal after adding to cart
    document.getElementById('shrimpSoupModal').style.display = 'none';
}

let cart = [];

function addToCart() {
    const form = document.getElementById('addToCartForm');
    const size = form.size.value;
    const extras = Array.from(document.querySelectorAll('#addToCartForm input[name="extras"]:checked')).map(el => el.value);
    const quantity = parseInt(form.quantity.value, 10);
    const price = calculatePrice(size, extras, quantity);  // You will define calculatePrice

    const cartItem = {
        product: "Shrimp Soup",
        size: size,
        extras: extras,
        quantity: quantity,
        price: price
    };

    cart.push(cartItem);
    updateCartUI();
}

function calculatePrice(size, extras, quantity) {
    let basePrice = 147; // Base price for medium size as example
    if (size === 'small') basePrice -= 20;
    if (size === 'large') basePrice += 30;
    let extrasPrice = extras.length * 5; // Assume each extra costs $5
    return (basePrice + extrasPrice) * quantity;
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    document.getElementById('cartSummary').textContent = `Items in Cart: ${totalItems} Total Price: $${totalPrice.toFixed(2)}`;
}

function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const itemCount = document.getElementById('itemCount');
    const cartSummary = document.getElementById('cartSummary');

    if (totalItems > 0) {
        itemCount.textContent = totalItems;
        itemCount.style.display = 'block';
        cartSummary.textContent = `Items in Cart: ${totalItems} Total Price: $${totalPrice.toFixed(2)}`;
    } else {
        itemCount.style.display = 'none';
        cartSummary.textContent = 'No items in cart';
    }
}


document.querySelector('.cart').addEventListener('click', function(event) {
    event.preventDefault();  // Prevent the link from acting as a hyperlink
    const cartDetails = document.getElementById('cartDetails');  // Assuming you have a div for cart details
    cartDetails.style.display = cartDetails.style.display === 'none' ? 'block' : 'none';
});

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

window.addEventListener('load', loadCart);
window.addEventListener('unload', saveCart);

document.querySelector('.cart').addEventListener('mouseover', function() {
    document.getElementById('cartDetails').style.display = 'block';
});

document.querySelector('.cart').addEventListener('mouseout', function() {
    document.getElementById('cartDetails').style.display = 'none';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation or API call for authentication can go here

    // Redirect to the main page if login is successful
    window.location.href = 'index.html'; // Ensure this path is correct
});
