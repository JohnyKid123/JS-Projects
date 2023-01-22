const n = parseInt(prompt("Enter the number of integers:"));
let evenSum = 0;
let oddSum = 0;

for (let i = 0; i < n; i++) {
  const currentNumber = parseInt(prompt("Enter an integer:"));
  if (i % 2 === 0) {
    evenSum += currentNumber;
  } else {
    oddSum += currentNumber;
  }
}

if (evenSum === oddSum) {
  console.log(`Yes, sum = ${evenSum}`);
} else {
  console.log(`No, diff = ${Math.abs(evenSum - oddSum)}`);
}
