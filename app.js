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
    const modals = {
        shrimpSoupModal: document.getElementById("shrimpSoupModal"),
        pizzaModal: document.getElementById("pizzaModal"),
        doubleCheeseBurgerModal: document.getElementById("doubleCheeseBurgerModal"),
        wineModal: document.getElementById("wineModal"),
        hotCafeLatteModal: document.getElementById("hotCafeLatteModal"),
        freshSaladModal: document.getElementById("freshSaladModal")
    };

    const buttons = {
        shrimpSoupBtn: document.querySelector(".detail-card img[src='images/seafood.jpeg']"),
        pizzaBtn: document.querySelector(".detail-card img[src='images/pizza.jpeg']"),
        doubleCheeseBurgerBtn: document.querySelector(".detail-card img[src='images/burger.jpeg']"),
        wineBtn: document.querySelector(".detail-card img[src='images/wine.jpeg']"),
        hotCafeLatteBtn: document.querySelector(".detail-card img[src='images/coffee.jpeg']"),
        freshSaladBtn: document.querySelector(".detail-card img[src='images/salad.jpeg']")
    };

    const spans = document.getElementsByClassName("close");

    // Event listeners for buttons
    for (const key in buttons) {
        if (buttons[key]) {
            buttons[key].onclick = (function(modalKey) {
                return function() {
                    modals[modalKey].style.display = "block";
                };
            })(key.replace('Btn', 'Modal'));
        } else {
            console.log(`The button or image to trigger the ${key} modal was not found.`);
        }
    }

    // Close buttons
    for (let i = 0; i < spans.length; i++) {
        spans[i].onclick = function() {
            for (const key in modals) {
                if (modals[key].style.display == "block") {
                    modals[key].style.display = "none";
                }
            }
        };
    }

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        for (const key in modals) {
            if (event.target == modals[key]) {
                modals[key].style.display = "none";
            }
        }
    };
});

const productImages = {
    'Shrimp Soup': 'images/seafood.jpeg',
    'Pizza': 'images/pizza.jpeg',
    'Wine': 'images/wine.jpeg',
    'Double Cheese Burger': 'images/burger.jpeg',
    'Hot Cafe Latte': 'images/coffee.jpeg',
    'Fresh Salad': 'images/salad.jpeg'
};

let cart = [];

function loadCart() {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartUI();
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

window.addEventListener('load', loadCart);
window.addEventListener('unload', saveCart);

document.querySelector('.cart').addEventListener('mouseover', function() {
    const cartDetails = document.getElementById('cartDetails'); 
    if (cartDetails) {
        cartDetails.style.display = 'block';
    }
});

document.querySelector('.cart').addEventListener('mouseout', function() {
    const cartDetails = document.getElementById('cartDetails'); 
    if (cartDetails) {
        cartDetails.style.display = 'none';
    }
});

function addToCart(product) {
    console.log(`Adding ${product} to cart`); // Debugging

    const formId = `addToCartForm${product.replace(/\s/g, '')}`;
    const form = document.getElementById(formId);
    console.log(formId, form); // Debugging

    if (form) {
        const size = form.querySelector('select[name="size"]').value;
        const extras = Array.from(form.querySelectorAll('input[name="extras"]:checked')).map(el => el.value);
        const quantity = parseInt(form.querySelector('input[name="quantity"]').value, 10);
        const price = calculatePrice(product, size, extras, quantity);

        const cartItem = {
            product: product,
            size: size,
            extras: extras,
            quantity: quantity,
            price: price,
            image: productImages[product] // Use the correct image
        };

        console.log(cartItem); // Debugging
        cart.push(cartItem);
        saveCart(); // Save the cart to localStorage
        const modalId = `${product.replace(/\s/g, '').toLowerCase()}Modal`;
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = 'none';
        } else {
            console.error(`Modal with ID ${modalId} not found.`);
        }
        updateCartUI();
    } else {
        console.error(`Form with ID ${formId} not found.`);
    }
}


function calculatePrice(product, size, extras, quantity) {
    let basePrice = 0;

    switch (product) {
        case 'Shrimp Soup':
            switch (size) {
                case 'small':
                    basePrice = 147;
                    break;
                case 'medium':
                    basePrice = 160;
                    break;
                case 'large':
                    basePrice = 175;
                    break;
            }
            break;
        case 'Pizza':
            switch (size) {
                case 'small':
                    basePrice = 34;
                    break;
                case 'medium':
                    basePrice = 48;
                    break;
                case 'large':
                    basePrice = 60;
                    break;
            }
            break;
        case 'Wine':
            switch (size) {
                case 'glass':
                    basePrice = 13;
                    break;
                case 'bottle':
                    basePrice = 50;
                    break;
            }
            break;
        case 'Double Cheese Burger':
            switch (size) {
                case 'small':
                    basePrice = 23;
                    break;
                case 'medium':
                    basePrice = 28;
                    break;
                case 'large':
                    basePrice = 33;
                    break;
            }
            break;
        case 'Hot Cafe Latte':
            switch (size) {
                case 'small':
                    basePrice = 11.5;
                    break;
                case 'medium':
                    basePrice = 13.5;
                    break;
                case 'large':
                    basePrice = 15.5;
                    break;
            }
            break;
        case 'Fresh Salad':
            switch (size) {
                case 'small':
                    basePrice = 15;
                    break;
                case 'medium':
                    basePrice = 18;
                    break;
                case 'large':
                    basePrice = 22;
                    break;
            }
            break;
        default:
            basePrice = 10; // Default price for any other items
            break;
    }

    let extrasPrice = 0;
    extras.forEach(extra => {
        switch (extra) {
            case 'crackers':
            case 'extra cheese':
            case 'pepperoni':
            case 'extra bacon':
            case 'extra shot':
            case 'whipped cream':
            case 'croutons':
            case 'extra dressing':
                extrasPrice += 5; // Each extra costs $5
                break;
            default:
                extrasPrice += 0;
                break;
        }
    });

    return (basePrice + extrasPrice) * quantity;
}


function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    const itemCount = document.getElementById('itemCount');
    const cartSummary = document.getElementById('cartSummary');
    const cartDetails = document.getElementById('cartDetails'); // Assuming you have a div for cart details

    if (cartDetails) {
        cartDetails.innerHTML = cart.map((item, index) => `
            <div class="cart-item" id="item${index}">
                <img src="${item.image}" alt="${item.product}">
                <div>
                    <h4>${item.product}</h4>
                    <p>${item.size} - $${item.price.toFixed(2)}</p>
                    <p>${item.extras.join(', ')}</p>
                    <p>Quantity: ${item.quantity}</p>
                    <button onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `).join('');
    }

    if (totalItems > 0) {
        itemCount.textContent = totalItems;
        itemCount.style.display = 'block';
        cartSummary.textContent = `Items in Cart: ${totalItems} Total Price: $${totalPrice.toFixed(2)}`;
    } else {
        itemCount.style.display = 'none';
        cartSummary.textContent = 'No items in cart';
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCartUI();
    saveCart();
}

document.querySelector('.cart').addEventListener('click', function(event) {
    event.preventDefault();
    const cartDetails = document.getElementById('cartDetails'); 
    if (cartDetails) {
        cartDetails.style.display = cartDetails.style.display === 'none' ? 'block' : 'none';
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation or API call for authentication can go here

    // Redirect to the main page if login is successful
    window.location.href = 'index.html'; // Ensure this path is correct
});

// Increment and decrement functions for cart items
function addAmount(i){
    // Increment order amount
    amount = document.getElementById("amountEle"+i).innerHTML;
    amount++;
    var numberSpan = document.getElementById("amountEle"+i);
    numberSpan.innerHTML = amount;
    updateTotal(i, amount);
}

function subAmount(i){
    amount = document.getElementById("amountEle"+i).innerHTML;
    if(amount == 1){
    }
    else{
        // Decrement order amount
        amount--;
        var numberSpan = document.getElementById("amountEle"+i);
        numberSpan.innerHTML = amount;
        updateTotal(i, amount);
    }
}

function removeItem(i){
    document.getElementById('item'+i).style.display = 'none';
    rCart = JSON.parse(localStorage.getItem('cart'));
    rCartLength = rCart.length;
    rCart = rCart.filter(function(item){
        return item !== rCart.at(i-1)
    }); 
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(rCart));
    updateCart();
    updateSubTotal();
    rCart = JSON.parse(localStorage.getItem('cart'));
}

function updateTotal(i, amount){
    uCart = JSON.parse(localStorage.getItem('cart'));
    uCart.at(i-1).quantity = amount;
    uCart.at(i-1).price = calculatePrice(uCart.at(i-1).size,uCart.at(i-1).extras,uCart.at(i-1).quantity);
    document.getElementById("itemPrice"+i).innerHTML = "$"+uCart.at(i-1).price.toFixed(2);
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(uCart));
    uCart = JSON.parse(localStorage.getItem('cart'));
    updateSubTotal();
}
