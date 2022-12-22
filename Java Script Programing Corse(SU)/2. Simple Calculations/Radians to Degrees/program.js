function sum([arg1])
{
  let a = parseFloat(arg1);
  let s =  (a * 180) / Math.PI;
  console.log(`${Math.round(s)}`);
}
