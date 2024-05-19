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
        streetTacosModal: document.getElementById("StreetTacosModal"),
        streetBurgerModal: document.getElementById("StreetBurgerModal"),
        streetNachoModal: document.getElementById("StreetNachoModal"),
        massamanCurryModal: document.getElementById("MassamanCurryModal"),
        basilChickenModal: document.getElementById("BasilChickenModal"),
        padThaiModal: document.getElementById("PadThaiModal"),
        vanillaModal: document.getElementById("VanillaModal"),
        chocolateModal: document.getElementById("ChocolateModal"),
	mangoModal: document.getElementById("MangoModal"),
	ribeyeModal: document.getElementById("RibeyeModal"),
	filetMignonModal: document.getElementById("FiletMignonModal"),
	newYorkStripModal: document.getElementById("NewYorkStripModal"),
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
        streetTacosBtn: document.querySelector(".detail-card img[src='https://carlsbadcravings.com/wp-content/uploads/2023/06/chicken-street-tacos-7a.jpg']"),
        streetBurgerBtn: document.querySelector(".detail-card img[src='https://resizer.otstatic.com/v2/photos/wide-mlarge/2/42601973.webp']"),
        streetNachoBtn: document.querySelector(".detail-card img[src='https://www.simplyrecipes.com/thmb/Kh_U_4uRwlEsQ8zcXgOConFciVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__08__mexican-street-corn-nachos-horiz-a-1200-9734ffc6a5ae48a5961c049d5adf2e7c.jpg']"),
        massamanCurryBtn: document.querySelector(".detail-card img[src='https://minimalistbaker.com/wp-content/uploads/2019/07/Massaman-Curry-SQUARE.jpg']"),
        basilChickenBtn: document.querySelector(".detail-card img[src='https://healthyfitnessmeals.com/wp-content/uploads/2020/09/THAI-BASIL-CHICKEN-6.jpg']"),
        padThaiBtn: document.querySelector(".detail-card img[src='https://lovingitvegan.com/wp-content/uploads/2022/06/Vegan-Pad-Thai-Square-3.jpg']"),
        vanillaBtn: document.querySelector(".detail-card img[src='https://static.toiimg.com/thumb/63971154.cms?width=573&height=430']"),
        chocolateBtn: document.querySelector(".detail-card img[src='https://www.nourish-and-fete.com/wp-content/uploads/2018/08/french-style-double-chocolate-ice-cream-740px-1.jpg']"),
        mangoBtn: document.querySelector(".detail-card img[src='https://media01.stockfood.com/largepreviews/ODI0MTg0Ng==/00265866-A-scoop-of-mango-ice-cream-on-a-spoon.jpg']"),
        ribeyeBtn: document.querySelector(".detail-card img[src='https://thebigmansworld.com/wp-content/uploads/2023/05/ribeye-steak-recipe.jpg']"),
        filetMignonBtn: document.querySelector(".detail-card img[src='https://hips.hearstapps.com/hmg-prod/images/delish-filet-mignon-horizontal-1541189043.jpeg']"),
        newYorkStripBtn: document.querySelector(".detail-card img[src='https://thebigmansworld.com/wp-content/uploads/2023/05/new-york-strip-steak-recipe.jpg']"),
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
    'mole Poblano': "https://www.mccormick.com/-/media/project/oneweb/mccormick-us/mccormick/recipe-categories/m/1376x774/mole_poblano_chicken_1376x774.jpg?rev=be4f11cdcbe741c29f1635f48d7c5506&vd=20210922T165012Z&extension=webp&hash=A1E6549E6559FC1F4DBA8FD923D07893",
    'Street Tacos': "https://carlsbadcravings.com/wp-content/uploads/2023/06/chicken-street-tacos-7a.jpg",
    'Street Burger': "https://resizer.otstatic.com/v2/photos/wide-mlarge/2/42601973.webp",
    'Street Nacho': "https://www.simplyrecipes.com/thmb/Kh_U_4uRwlEsQ8zcXgOConFciVg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2015__08__mexican-street-corn-nachos-horiz-a-1200-9734ffc6a5ae48a5961c049d5adf2e7c.jpg",
    'Massaman Curry': "https://minimalistbaker.com/wp-content/uploads/2019/07/Massaman-Curry-SQUARE.jpg",
    'Basil Chicken': "https://healthyfitnessmeals.com/wp-content/uploads/2020/09/THAI-BASIL-CHICKEN-6.jpg",
    'Pad Thai': "https://lovingitvegan.com/wp-content/uploads/2022/06/Vegan-Pad-Thai-Square-3.jpg",
    'Vanilla': "https://static.toiimg.com/thumb/63971154.cms?width=573&height=430",
    'Chocolate': "https://www.nourish-and-fete.com/wp-content/uploads/2018/08/french-style-double-chocolate-ice-cream-740px-1.jpg",
    'Mango': "https://media01.stockfood.com/largepreviews/ODI0MTg0Ng==/00265866-A-scoop-of-mango-ice-cream-on-a-spoon.jpg",
    'Ribeye': "https://thebigmansworld.com/wp-content/uploads/2023/05/ribeye-steak-recipe.jpg",
    'Filet Mignon': "https://hips.hearstapps.com/hmg-prod/images/delish-filet-mignon-horizontal-1541189043.jpeg",
    'New York Strip': "https://thebigmansworld.com/wp-content/uploads/2023/05/new-york-strip-steak-recipe.jpg",
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
        case 'Signature Lasagna':
            switch (size) {
                case 'medium':
                    basePrice = 32.6;
                    break;
                case 'large':
                    basePrice = 40.75;
                    break;
            }
            break;
        case 'Caprese Salad':
            switch (size) {
				case 'small':
					basePrice = 12;
					break;
                case 'medium':
                    basePrice = 16;
                    break;
                case 'large':
                    basePrice = 20;
                    break;
            }
            break;
		case 'Classic Tiramisu':
            switch (size) {
				case 'small':
					basePrice = 10;
					break;
                case 'medium':
                    basePrice = 13;
                    break;
            }
            break;
		case 'Boeuf Bourguignon':
            switch (size) {
				case 'medium':
					basePrice = 24;
					break;
                case 'large':
                    basePrice = 30;
                    break;
            }
            break;
		case 'Ratatouille':
            switch (size) {
				case 'small':
					basePrice = 18;
					break
				case 'medium':
					basePrice = 21;
					break
                case 'large':
                    basePrice = 24;
                    break;
            }
            break;
		case 'Tarte Tatin':
            switch (size) {
				case 'small':
					basePrice = 12;
					break
				case 'medium':
					basePrice = 13.5;
					break
            }
            break;
		case 'Massaman Curry':
            switch (size) {
				case 'small':
					basePrice = 15;
					break
				case 'large':
					basePrice = 20;
					break
            }
            break;
		case 'Basil Chicken':
            switch (size) {
				case 'small':
					basePrice = 12;
					break
				case 'medium':
					basePrice = 14;
					break
				case 'large':
					basePrice = 16;
					break
            }
            break;
		case 'Pad Thai':
            switch (size) {
				case 'small':
					basePrice = 10;
					break
				case 'medium':
					basePrice = 11.5;
					break
				case 'large':
					basePrice = 13;
					break
            }
            break;
		case 'Butter Chicken':
            switch (size) {
				case 'small':
					basePrice = 15;
					break
				case 'medium':
					basePrice = 17.5;
					break
				case 'large':
					basePrice = 20;
					break
            }
            break;
		case 'Palak Paneer':
            switch (size) {
				case 'small':
					basePrice = 12;
					break
				case 'medium':
					basePrice = 15;
					break
            }
            break;
		case 'Mango Lassi':
            switch (size) {
				case 'small':
					basePrice = 8;
					break
				case 'medium':
					basePrice = 10;
					break
            }
            break;
		case 'Sushi Platter':
            switch (size) {
				case 'small':
					basePrice = 25;
					break
				case 'large':
					basePrice = 35;
					break
            }
            break;
		case 'Ramen Bowl':
            switch (size) {
				case 'small':
					basePrice = 15;
					break
				case 'large':
					basePrice = 23;
					break
            }
            break;
		case 'Tempura Bento':
            switch (size) {
				case 'small':
					basePrice = 20;
					break
				case 'large':
					basePrice = 24;
					break
            }
            break;
		case 'Spicy Chicken':
            switch (size) {
				case 'medium':
					basePrice = 15;
					break
				case 'large':
					basePrice = 18;
					break
            }
            break;
		case 'Mapo Tofu':
            switch (size) {
				case 'small':
					basePrice = 12;
					break
				case 'medium':
					basePrice = 14;
					break
            }
            break;
		case 'Beijing Duck':
            switch (size) {
				case 'small':
					basePrice = 25;
					break
				case 'large':
					basePrice = 35;
					break
            }
            break;
		case 'Tacos':
            switch (size) {
				case 'small':
					basePrice = 8;
					break
				case 'medium':
					basePrice = 10;
					break
            }
            break;
		case 'Mexican Burrito':
            switch (size) {
				case 'medium':
					basePrice = 10;
					break
				case 'large':
					basePrice = 15;
					break
            }
            break;
		case 'Mole Poblano':
            switch (size) {
				case 'small':
					basePrice = 12;
					break
				case 'medium':
					basePrice = 13.5;
					break
            }
            break;
		case 'Street Tacos':
            switch (size) {
				case 'small':
					basePrice = 2.5;
					break
				case 'medium':
					basePrice = 4;
					break
            }
            break;
		case 'Street Burger':
            switch (size) {
				case 'small':
					basePrice = 3.5;
					break
				case 'medium':
					basePrice = 4.5;
					break
				case 'large':
					basePrice = 5.5;
					break
            }
            break;
		case 'Street Nacho':
            switch (size) {
				case 'small':
					basePrice = 5;
					break
				case 'medium':
					basePrice = 7;
					break
            }
            break;
		case 'Vanilla':
            switch (size) {
				case 'small':
					basePrice = 3;
					break
				case 'large':
					basePrice = 8;
					break
            }
            break;
		case 'Chocolate':
            switch (size) {
				case 'small':
					basePrice = 3.5;
					break
				case 'large':
					basePrice = 9.5;
					break
            }
            break;
		case 'Mango':
            switch (size) {
				case 'small':
					basePrice = 4;
					break
				case 'large':
					basePrice = 11;
					break
            }
            break;
		case 'Ribeye':
            switch (size) {
				case 'medium':
					basePrice = 40;
					break
				case 'large':
					basePrice = 50;
					break
            }
            break;
		case 'Filet Mignon':
            switch (size) {
				case 'medium':
					basePrice = 45;
					break
				case 'large':
					basePrice = 55;
					break
            }
            break;
		case 'New York Strip':
            switch (size) {
				case 'medium':
					basePrice = 35;
					break
				case 'large':
					basePrice = 45;
					break
            }
            break;
        default:
            basePrice = 10; // Default price for any other items
            break;
    }

    let extrasPrice = 0;
    extras.forEach(extra => {
        switch (extra) {
            case 'cheese':
            case 'flavour':
            case 'scoop':
            case 'spice':
            case 'noodles':
            case 'mango':
            case 'shrimp':
            case 'mild':
            case 'beef':
            case 'meat':
            case 'topping':
            case 'cucumber':
            case 'chicken':
            case 'onion':
            case 'pork':
                extrasPrice += 5; // Each extra costs $5
                break;
			case 'sprinkles':
			case 'cheeses':
			case 'patty':
			case 'barbeque':
                extrasPrice += 2;
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

function updateSubTotal()
{
    let uCart = JSON.parse(localStorage.getItem('cart')) || [];
    let subTotal = 0;
    for(let i = 0; i < uCart.length; i++)
        {
            subTotal += uCart[i].price * uCart[i].quantity;
        }
        document.getElementById("subtotal").innerHTML="$"+subTotal.toFixed(2);
        document.getElementById("checkout").innerHTML="Checkout - $" + (subTotal + 8).toFixed(2);
}

function updateCart()
{
    document.getElementById("item-area").innerHTML="";
    let uCart = JSON.parse(localStorage.getItem('cart')) || [];
    let i = 1;
    if(uCart.length === 0)
        {
            document.getElementById("myCart").innerHTML = "<h3> Your cart is currently empty!</h3>";
            document.getElementById("right-area").innerHTML="";
        }
        else
        {
            for(const element of uCart)
                {
                    document.getElementById("item-area").innerHTML +=`<div class = 'item' id= item${i}>
                    <table>
                    <tr>
                        <td style='width:20% max-width:100px'><img class='detail-img' src='${element.image}'></td>
                        <td style='width:60%; padding-left:20px;'><span class='item-name'>${element.product}</span>
                        <br />${toCaptial(element.size)}${toCaptial(element.extras)}<br /><br />
                        <span id='removeID${i}'><button class='simple-button' onClick='removeItem(${i})'>Remove</button></span></td>
                        <td style='width:20%; min-width:100px; padding-right:10px;' align='right'>
                            <button class='change-num' onClick='subAmount(${i})'>-</button>
                            &nbsp;&nbsp;<span id='amountEle${i}'>${element.quantity}</span>&nbsp;&nbsp;
                            <button class='change-num' onClick='addAmount(${i})'>+</button>
                        </td>
                        <td style='width:10%' id='itemPrice${i}'>$${(element.price * element.quantity).toFixed(2)}</td>
                    </tr>
                </table>
                <span style='float:left'></span>
            </div>`;
            i++;
        }
    }
}

updateCart();
updateSubTotal();

//Add event listeners for checkout button
document.getElementById("checkout").addEventListener("click", function()
{
    var cartItem = JSON.parse(localStorage.getItem('cart')) || [];
    var subTotal = parseFloat(document.getElementById("subtotal").textContent.replace('$',''));
    var deliveryFee = 8.00 //Assuming a fixed delivery fee
    var totalPaid = subTotal + deliveryFee;

    var orderDetails =
    {
        dishes: cartItem.map(item =>
            ({
                name: item.product,
                quantity: item.quantity,
                price: item.price * item.quantity
            })
        ),
        totalPaid: totalPaid
    };

    localStorage.setItem('orderDetails', JSON.stringify(orderDetails));
    window.location.href='order.html';
});
