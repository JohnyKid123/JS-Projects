let nights = parseInt(prompt("Enter the number of nights: "));
let destination = prompt("Enter the destination: ");
let roomType = prompt("Enter the room type: ");

let price = 0;
if (destination == "Colorado") {
    if (roomType == "double room") price = 38;
    else if (roomType == "apartment") price = 45;
} else if (destination == "Alps") {
    if (roomType == "double room") price = 35;
    else if (roomType == "apartment") price = 42;
} else if (destination == "Andie") {
    if (roomType == "double room") price = 39;
    else if (roomType == "apartment") price = 49;
}

let total = price * nights;
console.log("They have to spend " + total.toFixed(2) + " leva.");
