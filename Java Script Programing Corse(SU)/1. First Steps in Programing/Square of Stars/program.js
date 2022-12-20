var size = prompt("Enter the size of the box:");
var box = "";
for (var i = 0; i < size; i++) {
  // On the first and last rows, add a row of size "size" characters
  if (i == 0 || i == size - 1) {
    for (var j = 0; j < size; j++) {
      box += "*";
    }
  } 
  else {
    box += "*";
    for (var j = 0; j < size - 2; j++) 
    {
      box += " ";
    }
    box += "*";
  }
  box += "\n";
}
console.log(box);
