let n = parseInt(prompt("Enter the start number: "));
let m = parseInt(prompt("Enter the end number: "));
let s = parseInt(prompt("Enter the stop number: "));

let reachedStopNumber = false;
for (let i = m; i >= n && !reachedStopNumber; i--) {
    if (i % 2 == 0 && i % 3 == 0) {
        if (i === s) {
            reachedStopNumber = true;
        } else {
            console.log(i);
        }
    }
}
