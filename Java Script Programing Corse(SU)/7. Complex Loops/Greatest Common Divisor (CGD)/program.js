let a = parseInt(prompt("Enter a number: "));
let b = parseInt(prompt("Enter another number: "));

while (b !== 0) {
  let ob = b;
  b = a % b;
  a = ob;
}

console.log(a);
