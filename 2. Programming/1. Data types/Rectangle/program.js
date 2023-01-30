const length = parseFloat(prompt("Enter the length: "));
const width = parseFloat(prompt("Enter the width: "));
const circumference = 2 * (length + width);
const area = length * width;
const diagonal = Math.sqrt(length * length + width * width);
console.log(circumference);
console.log(area);
console.log(diagonal);
