function calculatePrice(event) {
    event.preventDefault();
    var age = parseInt(document.getElementById('age').value);
    var price;

    if (age <= 4) {
        price = 0; // price for babies
    } else if (age >= 5 && age < 18) {
        price = 120; // Price for children
    } else if (age >= 18 && age < 60) {
        price = 150; // Price for adults
    } else {
        price = 0;
    }

    document.getElementById('result').innerText = "The price of entry is: R" + price;
    document.getElementById('buyi').style.display = 'block';
}

function calculateTotal() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseInt(document.getElementById('result').innerText.split('R')[1]);
    const totalprice = price * quantity;
    document.getElementById('totalResult').innerText = "Total Price: " + totalprice + " ";
}
