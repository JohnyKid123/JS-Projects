let days = parseInt(prompt("Enter number of days:"));
let food = parseInt(prompt("Enter amount of food:"));
let reindeerOne = parseFloat(prompt("Enter food consumption of reindeer 1:"));
let reindeerTwo = parseFloat(prompt("Enter food consumption of reindeer 2:"));
let reindeerThree = parseFloat(prompt("Enter food consumption of reindeer 3:"));

let total = reindeerOne * days + reindeerTwo * days + reindeerThree * days;
if (total > food) {
  console.log(Math.ceil(total - food) + " more kilos of food are needed.");
} else {
  console.log(Math.floor(food - total) + " kilos of food left.");
}
