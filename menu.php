<?php
header('Content-Type: application/json');

// Simulated data for multiple restaurants
$menuItems = [
    ["restaurant" => "Pizza Place", "name" => "Margherita Pizza", "price" => 9.99],
    ["restaurant" => "Pizza Place", "name" => "Pepperoni Pizza", "price" => 10.99],
    ["restaurant" => "Burger Joint", "name" => "Classic Burger", "price" => 8.99],
    ["restaurant" => "Burger Joint", "name" => "Veggie Burger", "price" => 9.49],
    ["restaurant" => "Asian Fusion", "name" => "Sushi Roll", "price" => 7.99],
    ["restaurant" => "Asian Fusion", "name" => "Noodle Bowl", "price" => 8.49],
    // Add more items for other restaurants...
];

echo json_encode($menuItems);
?>
