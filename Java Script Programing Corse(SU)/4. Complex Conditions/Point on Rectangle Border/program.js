let x1 = parseFloat(prompt("Enter x1: "));
let y1 = parseFloat(prompt("Enter y1: "));
let x2 = parseFloat(prompt("Enter x2: "));
let y2 = parseFloat(prompt("Enter y2: "));
let x = parseFloat(prompt("Enter x: "));
let y = parseFloat(prompt("Enter y: "));
if (x1 < x2 && y1 < y2) {
    if ((x === x1 || x === x2) && (y <= y2 && y >= y1) || (y === y1 || y === y2) && (x < x2 && x > x1)) {
        console.log("Border");
    } else {
        console.log("Inside / Outside");
    }
}
