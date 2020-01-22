let cardNumber = prompt("Enter your card number please");

function cardNumberValidation(cardNumber) {
    let cardArray = (cardNumber.split('')).reverse();
        if (cardArray.length !== 16) {
            throw new Error('Invalid card number');
        }
    cardArray = cardArray.map(function (it, index) {
        return ((index % 2 !== 0) ? (it * 2) : (+it))
    });
let result = cardArray.reduce((sum, curr) => sum + (Math.floor(curr/10) + curr%10), 0);
    if (result !== result) {
        throw new Error('Invalid card number');
    }
return (result % 10 == 0)
}

if (cardNumberValidation) {
    alert("Card is valid");
} else {
    alert ("Card is not valid");
}
cardNumberValidation(cardNumber);


// function customSin(angle, precision) { ... }
// function customCos(angle, precision) { ... }
// function generateTable(precision, from, to, customTrig, realTrig) { ... }
// function printTable(array) { ... }
//
// let arrayOfSin = generateTable(0.01, 0, 90, customSin, Math.sin);
// printTable(arrayOfSin);

