const n = parseInt(prompt("Enter the number of integers:"));
let big = parseInt(prompt("Enter the first integer:"));
let sum = big;

for (let i = 2; i <= n; i++) {
  const a = parseInt(prompt("Enter an integer:"));
  sum += a;
  if (a > big) big = a;
}

if (big === (sum - big)) {
  console.log("Yes");
  console.log("Sum = " + big);
} else {
  console.log("No");
  console.log("Diff = " + Math.abs(big - (sum - big)));
}
