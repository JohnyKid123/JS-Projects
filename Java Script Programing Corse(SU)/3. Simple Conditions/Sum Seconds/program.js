function sumSeconds([arg1,arg2,arg3]) {
    let timeFirst = parseInt(arg1);
    let timeSecond = parseInt(arg2);
    let timeThird = parseInt(arg3);
 
    let totalTime = timeFirst + timeSecond + timeThird;
 
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
 
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
 
    } else {
        console.log(`${minutes}:${seconds}`);
    }
 
} 
