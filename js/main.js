// Function for setting the individual bill;

function setCost(id, cost) {

    const bill = document.getElementById(id).innerText = cost;;
}

// Function for getting the individual bill;

function getBill(id) {

    const billID = document.getElementById(id);
    let bill = parseFloat(billID.innerText);

    return bill;
}

// Function for calculating the total bill;

function setTotal() {

    const basePrice = 1299;
    const memoryCost = getBill('memory-cost');
    const storageCost = getBill('storage-cost');
    const deliveryCharge = getBill('delivery-cost');
    const total = basePrice + memoryCost + storageCost + deliveryCharge;

    document.getElementById('total-cost').innerText = total;

    return total;
}

//Function for setting the bottom total value; 

function setBottomTotal() {

    const bottomTotal = document.getElementById('bottom-total').innerText = setTotal();
};


//Function for calculating the discounted promo;

function setDiscount() {

    const regularPrice = setTotal();
    const promoPrice = regularPrice - (20 * regularPrice) / 100;

    document.getElementById('bottom-total').innerText = promoPrice;
}

// Event Listeners for memory option billing;
//8GB Base option;
document.getElementById('8gb-btn').addEventListener('click', function () {

    setCost('memory-cost', 0);
    setTotal();
    setBottomTotal();
})

//16GB Option
document.getElementById('16gb-btn').addEventListener('click', function () {

    setCost('memory-cost', 180);
    setTotal();
    setBottomTotal()
})



//Event listeners for storage option billing;
//256GB option
document.getElementById('256gb-btn').addEventListener('click', function () {

    setCost('storage-cost', 0);
    setTotal();
    setBottomTotal()
})

//512GB option
document.getElementById('512gb-btn').addEventListener('click', function () {

    setCost('storage-cost', 100);
    setTotal();
    setBottomTotal()
})

//1TB option
document.getElementById('1tb-btn').addEventListener('click', function () {

    setCost('storage-cost', 180);
    setTotal();
    setBottomTotal()
})


// Event listeners for delivery option billing;
//Free Prime Delivery;

document.getElementById('free-delivery').addEventListener('click', function () {

    setCost('delivery-cost', 0);
    setTotal();
    setBottomTotal()
})

//Express Delivery;

document.getElementById('express-delivery').addEventListener('click', function () {

    setCost('delivery-cost', 20);
    setTotal();
    setBottomTotal()
});


//Pin input and verify; 

document.getElementById('promo-btn').addEventListener('click', function () {

    const userPromo = document.getElementById('promo-input');

    if (userPromo.value == 'stevekaku') {
        setDiscount();
        userPromo.value = null;
    }
})