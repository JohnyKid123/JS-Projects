let area = parseInt(prompt("Enter the area: "));
let grapesPerSquareMeter = parseFloat(prompt("Enter the grapes per square meter: "));
let requiredLitersOfWine = parseInt(prompt("Enter the required liters of wine: "));
let workersCount = parseInt(prompt("Enter the number of workers: "));

let totalGrapes = grapesPerSquareMeter * area * 0.4;
let producedLitersOfWine = totalGrapes / 2.5;

let diff = producedLitersOfWine - requiredLitersOfWine;
if (diff < 0) {
    console.log("It will be a tough winter! More " + Math.floor(-1 * diff) + " liters wine needed.");
} else {
    console.log("Good harvest this year! Total wine: " + Math.floor(producedLitersOfWine) + " liters.");
    console.log(Math.ceil(diff) + " liters left -> " + Math.ceil(diff / workersCount) + " liters per person.");
}
