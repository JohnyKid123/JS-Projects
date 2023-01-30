let hexNum = prompt("Enter a hexadecimal number: ");
hexNum = hexNum.replace("0x", "");
let decimalNum = parseInt(hexNum, 16);
console.log(decimalNum);
