const n = parseInt(prompt("Enter the number of integers:"));
let sumLeft = 0;
let sumRight = 0;

for (let i = 0; i < n; i++) {
  const currentNumber = parseInt(prompt("Enter an integer:"));
  sumLeft += currentNumber;
}

for (let i = 0; i < n; i++) {
  const currentNumber = parseInt(prompt("Enter an integer:"));
  sumRight += currentNumber;
}

if (sumLeft === sumRight) {
  console.log(`Yes, sum = ${sumRight}`);
} else {
  const result = Math.abs(sumLeft - sumRight);
  console.log(`No, diff = ${result}`);
}
