let n = parseFloat(prompt("Enter the number of kilometers: "));
let dayOrNight = prompt("Enter day or night : ");
let price = 0;
let taxiprice = 0;
if(dayOrNight == "day") {
    taxiprice=0.79;
}
else {
    taxiprice=0.90;
}
if(n<20) {
    price = 0.70 + n*taxiprice;
}
else if(n<100) {
    price = n*0.09;
}
else {
    price = n*0.06;
}
console.log(price);
