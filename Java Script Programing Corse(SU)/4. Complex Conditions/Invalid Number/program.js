let num = parseFloat(prompt("Enter a number: "));
let a = (num >= 100 && num <= 200) || num === 0;
if (!a) console.log("invalid");
