let pattyPrice = parseFloat(prompt("Enter the patty price: "));
let softiePrice = 1.2 * pattyPrice;
let bunPrice = 0.6 * softiePrice;
let pretzelPrice = 1.2 + bunPrice;

let pattiesCount = parseInt(prompt("Enter the patties count: "));
let softiesCount = parseInt(prompt("Enter the softies count: "));
let bunsCount = parseInt(prompt("Enter the buns count: "));
let pretzelsCount = parseInt(prompt("Enter the pretzels count: "));

let budget = parseFloat(prompt("Enter the budget: "));
let total = pattyPrice * pattiesCount + softiePrice * softiesCount + bunPrice * bunsCount + pretzelPrice * pretzelsCount;

if (budget < total) console.log("No! " + (budget - total).toFixed(2) + " leva needed.");
else console.log("Yes! " + (total - budget).toFixed(2) + " leva left.");
