var pages = [
    { title: "Italian Cuisine", url: "italiano.html", keywords: ['italian', 'pizza', 'pasta'] },
    { title: "Chinese Cuisine", url: "dragon.html", keywords: ['chinese', 'dumplings', 'noodles'] },
    { title: "Indian Cuisine", url: "symphony.html", keywords: ['indian', 'curry', 'naan'] },
    { title: "Cafe", url: "bistro.html", keywords: ['cafe', 'coffee', 'pastries', 'sandwiches'] },
    { title: "Mexican Cuisine", url: "mexicano.html", keywords: ['mexican', 'tacos', 'burritos', 'nachos'] },
    { title: "Sushi", url: "nami.html", keywords: ['sushi', 'sashimi', 'nigiri', 'rolls'] },
    { title: "Steakhouse", url: "steakhouse.html", keywords: ['steakhouse', 'steak', 'ribs', 'grill'] },
    { title: "Thai Cuisine", url: "thai.html", keywords: ['thai', 'curry', 'pad thai', 'spicy'] },
    { title: "Ice Cream Shop", url: "scoops.html", keywords: ['ice cream', 'gelato', 'sundae', 'sorbet', 'dessert'] }

];

function searchCuisine() {
    var input = document.getElementById("searchInput").value.toLowerCase();
    var found = pages.find(page => page.keywords.some(keyword => keyword.includes(input)));
    if (found) {
        window.location.href = found.url;
    } else {
        alert('No matches found.');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var input = document.getElementById("searchInput");
    input.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            searchCuisine();
        }
    });
});