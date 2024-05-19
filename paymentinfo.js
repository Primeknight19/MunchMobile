document.addEventListener('DOMContentLoaded', function () {
    const paymentForm = document.getElementById('paymentForm');
    paymentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const cardData = {
            cardNumber: document.getElementById('cardNumber').value,
            cardHolder: document.getElementById('cardHolder').value,
            expiryDate: document.getElementById('expiryDate').value,
            cvv: document.getElementById('cvv').value
        };

        console.log(cardData);
        localStorage.setItem('cardData', JSON.stringify(cardData));
        alert('Card details saved successfully!');
    });

    // Function to load card details if they exist in localStorage
    function loadCardDetails() {
        const savedCardData = JSON.parse(localStorage.getItem('cardData'));
        if (savedCardData) {
            document.getElementById('cardNumber').value = savedCardData.cardNumber;
            document.getElementById('cardHolder').value = savedCardData.cardHolder;
            document.getElementById('expiryDate').value = savedCardData.expiryDate;
            document.getElementById('cvv').value = savedCardData.cvv;
        }
    }

    // Call the load function when the page loads
    loadCardDetails();

    // Format card number input
    document.getElementById('cardNumber').addEventListener('input', function (e) {
        let input = e.target.value.replace(/\D/g, ''); // Remove all non-digit characters
        let formattedInput = input.match(/.{1,4}/g)?.join(' '); // Split into groups of four and add spaces
        e.target.value = formattedInput ? formattedInput : input; // Update the value with formatted input
        e.target.value = e.target.value.slice(0, 19); // Limit the value to the first three characters
    });

    // Limit CVV input to 3 digits
    document.getElementById('cvv').addEventListener('input', function (e) {
        e.target.value = e.target.value.slice(0, 3); // Limit the value to the first three characters
    });
});