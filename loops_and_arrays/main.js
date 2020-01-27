// let cardNumber = prompt("Enter your card number please");
//
// function cardNumberValidation(cardNumber) {
//     let cardArray = (cardNumber.split('')).reverse();
//         if (cardArray.length !== 16) {
//             throw new Error('Invalid card number');
//         }
//     cardArray = cardArray.map(function (it, index) {
//         return ((index % 2 !== 0) ? (it * 2) : (+it))
//     });
// let result = cardArray.reduce((sum, curr) => sum + (Math.floor(curr/10) + curr%10), 0);
//     if (result !== result) {
//         throw new Error('Invalid card number');
//     }
// return (result % 10 == 0)
// }
//
// if (cardNumberValidation) {
//     alert("Card is valid");
// } else {
//     alert ("Card is not valid");
// }
// cardNumberValidation(cardNumber);

function factorial(n) {
    return (n !== 0) ? n * factorial(n - 1) : 1;
}

function toradianAngle(degreeAngle) {
    return degreeAngle * Math.PI / 180;
}

function customSin(degreeAngle, precision) {
    let i = 0;
    let sin = 0;
    let e = 0;
    do {
        e = Math.pow(-1, i) *  Math.pow(degreeAngle, 2 * i + 1) / factorial(2 * i + 1);
        i++;
        sin += e;
    } while (Math.abs(e) > precision);
    return sin;
}

alert (customSin(toradianAngle(30), 0.01));

function customCos(degreeAngle, precision) {
    let i = 0;
    let cos = 0;
    let e = 0;
    do {
        e = ( (Math.pow(-1, i)) * ( (Math.pow(degreeAngle, 2 * i)) / factorial(2 * i) ) );
        i++;
        cos += e;
    } while (Math.abs(e) > precision);
    return cos;
}

alert (customCos(toradianAngle(60), 0.01));


function generateTable(precision, from, to, customTrig, realTrig) {
    let table = [];
    for (let degreeAngle = from; degreeAngle <= to; degreeAngle +=10) {
        let result = {angle: degreeAngle, real: realTrig(toradianAngle(degreeAngle)), calculated: customTrig(toradianAngle(degreeAngle), precision)};
        table.push(result);
    }
    return table;
}

console.log(generateTable(0.01, 0, 90, customSin, Math.sin));

// // function printTable(array) { ... }
// //
// // let arrayOfSin = generateTable(0.01, 0, 90, customSin, Math.sin);
// // printTable(arrayOfSin);
//
