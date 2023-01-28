let v = parseFloat(prompt("Enter the volume of the pool: "));
let p1 = parseFloat(prompt("Enter the flow rate of pipe 1: "));
let p2 = parseFloat(prompt("Enter the flow rate of pipe 2: "));
let h = parseFloat(prompt("Enter the hours of operation: "));
let water = (p1+p2)*h;
if(water <= v) {
    let waterPersent = (water / v) * 100;
    let p1Persent = (p1 * h / water) * 100;
    let p2Persent = (p2 * h / water) * 100;
    console.log("The pool is " + Math.trunc(waterPersent) + "% full." + " Pipe 1: " + Math.trunc(p1Persent) + "%. Pipe 2: " + Math.trunc(p2Persent) + "%.");
}
else {
    let waterMore = water - v;
    console.log("For " + h + " hours the pool overflows with " + waterMore + " liters.");
}
