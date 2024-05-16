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
        signatureLasagnaModal: document.getElementById("SignatureLasagnaModal"),
        capreseSaladModal: document.getElementById("CapreseSaladModal"),
        classicTiramisuModal: document.getElementById("ClassicTiramisuModal"),
        boeufBourguignonModal: document.getElementById("BoeufBourguignonModal"),
        ratatouilleModal: document.getElementById("RatatouilleModal"),
        tarteTatinModal: document.getElementById("TarteTatinModal"),
        butterChickenModal: document.getElementById("ButterChickenModal"),
        palakPaneerModal: document.getElementById("PalakPaneerModal"),
        mangoLassiModal: document.getElementById("MangoLassiModal"),
        sushiPlatterModal: document.getElementById("SushiPlatterModal"),
        ramenBowlModal: document.getElementById("RamenBowlModal"),
        tempuraBentoModal: document.getElementById("TempuraBentoModal"),
        spicyChickenModal: document.getElementById("SpicyChickenModal"),
        mapoTofuModal: document.getElementById("MapoTofuModal"),
        beijingDuckModal: document.getElementById("BeijingDuckModal"),
        tacosModal: document.getElementById("TacosModal"),
        mexicanBurritoModal: document.getElementById("MexicanBurritoModal"),
        molePoblanoModal: document.getElementById("MolePoblanoModal"),
    };

    const buttons = {
        signatureLasagnaBtn: document.querySelector(".detail-card img[src='https://images.unsplash.com/photo-1551443874-e8d6a8e561aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80']"),
        capreseSaladBtn: document.querySelector(".detail-card img[src='https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80']"),
        classicTiramisuBtn: document.querySelector(".detail-card img[src='https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80']"),
        boeufBourguignonBtn: document.querySelector(".detail-card img[src='https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg']"),
        ratatouilleBtn: document.querySelector(".detail-card img[src='https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg']"),
        tarteTatinBtn: document.querySelector(".detail-card img[src='https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tarte-tatin-502b8b9.jpg']"),
        butterChickenBtn: document.querySelector(".detail-card img[src='https://littlespicejar.com/wp-content/uploads/2016/02/Finger-Lickin-Butter-Chicken-14-735x1103.jpg']"),
        palakPaneerBtn: document.querySelector(".detail-card img[src='https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-3.jpg']"),
        mangoLassiBtn: document.querySelector(".detail-card img[src='https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg']"),
        sushiPlatterBtn: document.querySelector(".detail-card img[src='https://www.seafoodandmore.com.au/cdn/shop/products/ADF0AD79-7824-4C6C-94C0-6BE86826663B_23255145-1fae-4c8a-8efe-bf722b43a857.jpg']"),
        ramenBowlBtn: document.querySelector(".detail-card img[src='https://www.marionskitchen.com/wp-content/uploads/2024/04/20240329_MIW_15-Minute-Creamy-Korean-Ramen_Bangkok-7-scaled.webp']"),
        tempuraBentoBtn: document.querySelector(".detail-card img[src='https://media-cdn.tripadvisor.com/media/photo-s/12/5e/83/85/bento-box-a-2-prawn-tempura.jpg']"),
        spicyChickenBtn: document.querySelector(".detail-card img[src='https://christieathome.com/wp-content/uploads/2022/02/General-Tso-Chicken-8.jpg']"),
        mapoTofuBtn: document.querySelector(".detail-card img[src='https://hips.hearstapps.com/hmg-prod/images/mapo-tofu-2-jpg-1642115176.jpg']"),
        beijingDuckBtn: document.querySelector(".detail-card img[src='https://anisland.cooking/wp-content/uploads/2022/02/Roast-Cantonese-Duck-2022.jpg']"),
        tacosBtn: document.querySelector(".detail-card img[src='https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371603491866.jpeg']"),
        mexicanBurritoBtn: document.querySelector(".detail-card img[src='https://www.seriouseats.com/thmb/lOdEqFZsV3LOzX5Pc2Y6XCJuvTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__10__20201002-mission-style-burrito-jillian-atkinson-2-6841455590ed4c3981529b232166643a.jpg']"),
        molePoblanoBtn: document.querySelector(".detail-card img[src='https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-categories/m/1376x774/mole_poblano_chicken_1376x774.jpg?rev=be4f11cdcbe741c29f1635f48d7c5506&vd=20210922T165012Z&extension=webp&hash=A1E6549E6559FC1F4DBA8FD923D07893']"),
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
    'Signature Lasagna': "https://images.unsplash.com/photo-1551443874-e8d6a8e561aa?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    'Caprese Salad': "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    'Classic Tiramisu': "https://images.unsplash.com/photo-1543353071-873f17a7a088?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80",
    'Boeuf Bourguignon': "https://food-images.files.bbci.co.uk/food/recipes/boeuf_bourguignon_25475_16x9.jpg",
    'Ratatouille': "https://img.buzzfeed.com/video-api-prod/assets/eb44570519264864814264f7f0a5e47a/BFV13909_BakedRatatouille-ThumbTextless1080.jpg",
    'Tarte Tatin': "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/tarte-tatin-502b8b9.jpg",
    'Butter Chicken': "https://littlespicejar.com/wp-content/uploads/2016/02/Finger-Lickin-Butter-Chicken-14-735x1103.jpg",
    'Palak Paneer': "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/palak-paneer-3.jpg",
    'Mango Lassi': "https://www.cookwithmanali.com/wp-content/uploads/2017/05/Best-Mango-Mango-Lassi-Recipe.jpg",
    'Sushi Platter': "https://www.seafoodandmore.com.au/cdn/shop/products/ADF0AD79-7824-4C6C-94C0-6BE86826663B_23255145-1fae-4c8a-8efe-bf722b43a857.jpg",
    'Ramen Bowl': "https://www.marionskitchen.com/wp-content/uploads/2024/04/20240329_MIW_15-Minute-Creamy-Korean-Ramen_Bangkok-7-scaled.webp",
    'Tempura Bento': "https://media-cdn.tripadvisor.com/media/photo-s/12/5e/83/85/bento-box-a-2-prawn-tempura.jpg",
    'Spicy Chicken': "https://christieathome.com/wp-content/uploads/2022/02/General-Tso-Chicken-8.jpg",
    'Mapo Tofu': "https://hips.hearstapps.com/hmg-prod/images/mapo-tofu-2-jpg-1642115176.jpg",
    'Beijing Duck': "https://anisland.cooking/wp-content/uploads/2022/02/Roast-Cantonese-Duck-2022.jpg",
    'Tacos': "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/29/0/0149359_Making-Taco_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1371603491866.jpeg",
    'Mexican Burrito': "https://www.seriouseats.com/thmb/lOdEqFZsV3LOzX5Pc2Y6XCJuvTs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__10__20201002-mission-style-burrito-jillian-atkinson-2-6841455590ed4c3981529b232166643a.jpg",
    'molePoblano': "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-categories/m/1376x774/mole_poblano_chicken_1376x774.jpg?rev=be4f11cdcbe741c29f1635f48d7c5506&vd=20210922T165012Z&extension=webp&hash=A1E6549E6559FC1F4DBA8FD923D07893",

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
        const size = form.size.value;
        const extras = Array.from(form.querySelectorAll('input[name="extras"]:checked')).map(el => el.value);
        const quantity = parseInt(form.quantity.value, 10);
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
        document.getElementById(product.replace(/\s/g, '')+'Modal').style.display = 'none';
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
    uCart.at(i-1).price = calculatePrice(uCart.at(i-1).product,uCart.at(i-1).size,uCart.at(i-1).extras,uCart.at(i-1).quantity);
    document.getElementById("itemPrice"+i).innerHTML = "$"+uCart.at(i-1).price.toFixed(2);
    localStorage.clear();
    localStorage.setItem('cart', JSON.stringify(uCart));
    uCart = JSON.parse(localStorage.getItem('cart'));
    updateSubTotal();
}

function hideAll(type){
	for (const s of document.getElementsByClassName('detail-card')){
		s.style.display = "none";
	}
	if(type == "western"){
		document.getElementById("bites").style.display = "block";
		document.getElementById("steakhouse").style.display = "block";
	}
	else if(type == "italian"){
		document.getElementById("italiano").style.display = "block";
	}
	else if(type == "mexican"){
		document.getElementById("mexicano").style.display = "block";
	}
	else if(type == "icecream"){
		document.getElementById("scoops").style.display = "block";
	}
	else if(type == "cafe"){
		document.getElementById("bistro").style.display = "block";
	}
	else if(type == "asian"){
		document.getElementById("nami").style.display = "block";
		document.getElementById("thai").style.display = "block";
		document.getElementById("dragon").style.display = "block";
	}
	else if(type == "indian"){
		document.getElementById("symphony").style.display = "block";
	}
	
}

function showAll(){
	for (const s of document.getElementsByClassName('detail-card')){
		s.style.display = "block";
	}
}
