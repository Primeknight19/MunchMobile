document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('paymentForm').addEventListener('submit', function(event) {
        event.preventDefault();
        var cardData = {
            cardNumber: document.getElementById('cardNumber').value,
            cardHolder: document.getElementById('cardHolder').value,
            expiryDate: document.getElementById('expiryDate').value,
            cvv: document.getElementById('cvv').value
        };

        console.log(cardData);
        localStorage.setItem('cardData', JSON.stringify(cardData));
        alert('Card details saved successfully!');
    });
});