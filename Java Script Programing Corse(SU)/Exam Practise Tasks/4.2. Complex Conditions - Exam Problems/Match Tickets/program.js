const budget = parseFloat(prompt("Enter budget: "));
const category = prompt("Enter category: ");
const fansCount = parseInt(prompt("Enter number of fans: "));

let transportPercents = 0;
if (fansCount <= 4) transportPercents = 0.75;
else if (fansCount <= 9) transportPercents = 0.6;
else if (fansCount <= 24) transportPercents = 0.5;
else if (fansCount <= 49) transportPercents = 0.4;
else transportPercents = 0.25;

let ticketPrice = 0;
if (category === "VIP") ticketPrice = 499.99;
else if (category === "Normal") ticketPrice = 249.99;

const total = budget * transportPercents + fansCount * ticketPrice;
if (total > budget) {
  console.log("Not enough money! You need " + (total - budget).toFixed(2) + " leva.");
} else {
  console.log("Yes! You have " + (budget - total).toFixed(2) + " leva left.");
}
