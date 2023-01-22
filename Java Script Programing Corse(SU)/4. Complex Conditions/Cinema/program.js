let projectionType = prompt("Enter projection type: ");
let rows = parseInt(prompt("Enter number of rows: "));
let cols = parseInt(prompt("Enter number of columns: "));

let seats = rows * cols;

let ticketPrice = 0;
if (projectionType === "Premiere") ticketPrice = 12;
else if (projectionType === "Normal") ticketPrice = 7.5;
else if (projectionType === "Discount") ticketPrice = 5;

let total = ticketPrice * seats;
console.log(total.toFixed(2) + " leva");
