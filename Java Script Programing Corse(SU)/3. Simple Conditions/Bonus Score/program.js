function sum([arg1])
{
let num = parseInt(arg1);
let bonus = 0;
if (num<=100)
bonus+=5;
else if (num>1000)
bonus+=(num*10/100);
else if (num>100)
bonus+=(num*20/100);
if (num%2==0)
bonus+=1;
else if(num%10==5)
bonus+=2;
console.log(bonus);
  console.log(bonus + num);
}
