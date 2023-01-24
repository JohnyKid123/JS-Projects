let days = parseFloat(prompt("Enter the number of days Tom is on vacation: "));
let working_days = 365 - days;
let minutes = working_days*63 + days*127;
let dif = Math.abs(minutes - 30000);
let hour = dif/60;
let min = dif%60;
if(minutes > 30000) {
    console.log("Tom will run away");
    console.log(Math.trunc(hour) + " hours and " + Math.trunc(min) + " minutes more for play");
}
else {
    console.log("Tom sleeps well");
    console.log(Math.trunc(hour) + " hours and " + Math.trunc(min) + " minutes less for play");
}
