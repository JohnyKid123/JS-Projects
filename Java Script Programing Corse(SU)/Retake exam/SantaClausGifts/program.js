let n = parseInt(prompt("Enter a number:"));
let m = parseInt(prompt("Enter a number:"));
let s = parseInt(prompt("Enter a number:"));
let shouldStop = false;
for (let i = m; !shouldStop && i >= n; i--) {
    if (i % 6 === 0) {
        if (i === s) shouldStop = true;
        else console.log(i);
    }
}
