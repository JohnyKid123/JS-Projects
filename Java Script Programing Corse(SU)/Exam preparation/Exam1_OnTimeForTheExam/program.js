let hourExam = parseInt(prompt("Enter hour of exam: "));
let minutesExam = parseInt(prompt("Enter minutes of exam: "));
let hourArrival = parseInt(prompt("Enter hour of arrival: "));
let minutesArrival = parseInt(prompt("Enter minutes of arrival: "));

let examTime = hourExam * 60 + minutesExam;
let studentsTime = hourArrival * 60 + minutesArrival;
let minutesDifference = studentsTime - examTime;
console.log(minutesDifference);
if (minutesDifference < -30)
    console.log("Early");
else if (minutesDifference <= 0)
    console.log("On time");
else
    console.log("Late");
if (minutesDifference != 0)
{
    let hours = Math.abs(minutesDifference / 60);
    let minutes = Math.abs(minutesDifference % 60);
    if (hours > 0)
    {
        if (minutes < 10)
            console.log(hours + ":0" + minutes + " hours");
        else
            console.log(hours + ":" + minutes + " hours");
    }
    else
        console.log(minutes + " minutes");
    if (minutesDifference < 0)
        console.log(" before the start");
    else
        console.log(" after the start");
}
