const n = parseInt(prompt("Enter the number of pairs:"));
let maxDiff = 0;
let lastSum = 0;

for (let i = 0; i < n; i++) {
  const a = parseInt(prompt("Enter the first number of the pair:"));
  const b = parseInt(prompt("Enter the second number of the pair:"));
  const sum = a + b;

  if (i > 0) {
    let currentDiff = Math.abs(sum - lastSum);
    if (currentDiff > maxDiff) maxDiff = currentDiff;
  }

  lastSum = sum;
}

if (maxDiff === 0) console.log("Yes, value=" + lastSum);
else console.log("No, maxdiff=" + maxDiff);
