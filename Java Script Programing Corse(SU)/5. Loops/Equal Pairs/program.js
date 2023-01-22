const n = parseInt(prompt("Enter the number of pairs:"));
let evenSum = 0;
let oddSum = 0;
let diff = 0;
let areTheSumsEqual = true;

for (let p = 1; p <= n; p++) {
  const currentNumberOne = parseInt(prompt("Enter the first number:"));
  const currentNumberTwo = parseInt(prompt("Enter the second number:"));

  if (p % 2 === 0) {
    evenSum = currentNumberOne + currentNumberTwo;
  } else {
    oddSum = currentNumberOne + currentNumberTwo;
  }

  if (p > 1 && Math.abs(evenSum - oddSum) > diff) {
    diff = Math.abs(evenSum - oddSum);
    areTheSumsEqual = false;
  }
}

if (areTheSumsEqual) {
  console.log(`Yes, value=${oddSum}`);
} else {
  console.log(`No, maxdiff=${diff}`);
}
