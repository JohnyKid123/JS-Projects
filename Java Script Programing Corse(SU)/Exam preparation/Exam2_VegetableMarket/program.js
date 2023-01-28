let vegetables = parseFloat(prompt("Enter price of vegetables: "));
let fruits = parseFloat(prompt("Enter price of fruits: "));
let kilos_veg = parseFloat(prompt("Enter the number of kilograms of vegetables: "));
let kilos_fru = parseFloat(prompt("Enter the number of kilograms of fruits: "));
let price_veg = vegetables * kilos_veg;
let price_fru = fruits * kilos_fru;
console.log((price_veg + price_fru) / 1.94);
