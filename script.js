
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const c = new Date();
let day = weekday[c.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = day;

const d = new Date();
let ms = d.getUTCMilliseconds();
document.getElementById("currentUTCTime").innerHTML = ms;

const f = new Date();
let hrs = d.getHours();
document.getElementById("Hours").innerHTML = hrs;

const g = new Date();
let min = d.getMinutes();
document.getElementById("Minutes").innerHTML = min;

const h = new Date();
let sec = d.getSeconds();
document.getElementById("Seconds").innerHTML = sec;