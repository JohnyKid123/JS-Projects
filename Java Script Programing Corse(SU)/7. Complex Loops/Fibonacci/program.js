let n = parseInt(prompt("Enter a number: "));

let first = 1;
let second = 1;

for (let i = 2; i <= n; i++) {
  let next = first + second;
  first = second;
  second = next;
}

console.log(second);
