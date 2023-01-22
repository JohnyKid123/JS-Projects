console.log("n = ");
const n = parseInt(prompt("Enter the number of integers:"));
let max = Number.MIN_SAFE_INTEGER;

for (let i = 1; i <= n; i++) {
  const num = parseInt(prompt("Enter an integer:"));
  if (num > max) {
    max = num;
  }
}

console.log("max = " + max);
