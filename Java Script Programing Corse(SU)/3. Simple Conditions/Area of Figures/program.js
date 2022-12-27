function areaOfFigures([arg1, arg2, arg3]) {
	let shape = arg1;
	let area = 0;
	let b = 0;
	let c = 0;
 
	if (shape === 'square') {
		b = Number(arg2);
		area = b * b;
	} else if (shape === 'rectangle') {
		b = Number(arg2);
		c = Number(arg3);
		area = b * c;
   	} else if (shape === 'circle') {
		b = Number(arg2);
		area = Math.PI * b * b;
   	} else if (shape === 'triangle') {
		b = Number(arg2);
		c = Number(arg3);
		area = b * c / 2;
   	}
 
	console.log(Math.round(area * 1000) / 1000);
 
}
