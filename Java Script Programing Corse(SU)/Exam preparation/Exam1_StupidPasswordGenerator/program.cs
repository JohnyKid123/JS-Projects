var a = parseInt(prompt("Enter a number"));
var b = parseInt(prompt("Enter a number"));
for (var n1 = 1; n1 <= a; n1++) {
    for (var n2 = 1; n2 <= a; n2++) {
        for (var n3 = 'a'; n3 <= 'a' + b; n3++) {
            for (var n4 = 'a'; n4 <= 'a' + b; n4++) {
                for (var n5 = Math.max(n1, n2) + 1; n5 <= a; n5++) {
                    console.log(n1 + "" + n2 + "" + n3 + "" + n4 + "" + n5);
                }
            }
        }
    }
}
