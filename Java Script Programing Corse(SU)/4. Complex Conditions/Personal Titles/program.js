let age = parseFloat(prompt("Enter your age: "));
let gender = prompt("Enter your gender (m or f): ");
if (age < 16) {
    if (gender === "m") console.log("Master");
    else if (gender === "f") console.log("Miss");
} else if (age >= 16) {
    if (gender === "m") console.log("Mr.");
    else if (gender === "f") console.log("Ms.");
}
