var num = parseInt(prompt("Enter a number: "));
for (var n1 = 1; n1 < 9; n1++) {
for (var n2 = 1; n2 <= 9; n2++) {
for (var n3 = 1; n3 <= 9; n3++) {
for (var n4 = 1; n4 <= 9; n4++) {
if (num % n1 == 0 && num % n2 == 0 && num % n3 == 0 && num % n4 == 0) {
console.log(n1 + "" + n2 + "" + n3 + "" + n4);
}
}
}
}
}
