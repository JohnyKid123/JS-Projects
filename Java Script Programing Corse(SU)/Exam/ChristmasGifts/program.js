let n = parseInt(prompt("Enter a number: "));

let lego = 0, monopoly = 0, puzzle = 0, robot = 0;
for (let i = 0; i < n; i++) {
    let gift = prompt("What is the gift?");
    if (gift === "lego") lego++;
    else if (gift === "monopoly") monopoly++;
    else if (gift === "puzzle") puzzle++;
    else if (gift === "robot") robot++;
}

console.log("Lego: " + lego);
console.log("Monopoly: " + monopoly);
console.log("Puzzles: " + puzzle);
console.log("Robots: " + robot);
