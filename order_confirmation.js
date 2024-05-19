
document.addEventListener('DOMContentLoaded', function() 
{
    function getOrderDetails() 
    {
        const orderDetails = JSON.parse(localStorage.getItem('orderDetails'));
        console.log('Order Details:', orderDetails);

        if (orderDetails) 
            {
                const orderedDishesList = document.getElementById('orderedDishes');
                orderedDishesList.innerHTML='';//clear previous items
                orderDetails.dishes.forEach(dish =>   
                {
                    const listItem = document.createElement('li');
                    listItem.textContent = `${dish.name} - Quantity: ${dish.quantity} - Price: $${dish.price.toFixed(2)}`;
                    orderedDishesList.appendChild(listItem);
                });
                document.getElementById('totalPaid').textContent = `$${orderDetails.totalPaid.toFixed(2)}`;
            }
    }
    getOrderDetails();
});

document.getElementById('continueOrdering').addEventListener('click', () =>
    {
        localStorage.removeItem('orderDetails');
        window.location.href = 'index.html';
});
