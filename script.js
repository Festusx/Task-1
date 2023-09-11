const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const c = new Date();
let day = weekday[c.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = day;

const d = new Date();
let ms = d.getUTCMilliseconds();
document.getElementById("currentUTCTime").innerHTML = ms;