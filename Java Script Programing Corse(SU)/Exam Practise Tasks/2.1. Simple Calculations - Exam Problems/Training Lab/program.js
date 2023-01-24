const h = parseFloat(prompt("Enter h value: "));
const w = parseFloat(prompt("Enter w value: "));
const r = h * 100 / 120; 
const s = (w * 100 - 100) / 70; 
const f = Math.trunc(r); 
const t = Math.trunc(s); 
console.log((t * f) - 3);
