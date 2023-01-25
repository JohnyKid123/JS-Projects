let paperRollsCount = parseInt(prompt("Enter the number of paper rolls"));
let fabricRollsCount = parseInt(prompt("Enter the number of fabric rolls"));
let glueLiters = parseFloat(prompt("Enter the number of liters of glue"));
let discountPercents = parseFloat(prompt("Enter the discount percentage"));

let total = paperRollsCount * 5.8 + fabricRollsCount * 7.2 + glueLiters * 1.2;
let totalWithDiscount = total * (1 - (0.01 * discountPercents));
console.log(totalWithDiscount.toFixed(3));
