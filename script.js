const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const c = new Date();
let day = weekday[c.getDay()];
document.getElementById("currentDayOfTheWeek").innerHTML = day;

const d = new Date();
let ms = d.getUTCMilliseconds();
document.getElementById("currentUTCTime").innerHTML = ms;
// const getCurrentTimeDate = () => {
//     let currentTimeDate = new Date();

//     var weekday = new Array(7);
//     weekday[0] = "SUNDAY";
//     weekday[1] = "MONDAY";
//     weekday[2] = "TUESDAY";
//     weekday[3] = "WEDNESDAY";
//     weekday[4] = "THURSDAY";
//     weekday[5] = "FRIDAY";
//     weekday[6] = "SATURDAY";

//     var month = new Array();
//     month[0] = "JANUARY";
//     month[1] = "FEBRUARY";
//     month[2] = "MARCH";
//     month[3] = "APRIL";
//     month[4] = "May";
//     month[5] = "JUNE";
//     month[6] = "JULY";
//     month[7] = "AUGUST";
//     month[8] = "SEPTEMBER";
//     month[9] = "OCTOBER";
//     month[10] = "NOVEMBER";
//     month[11] = "DECEMBER";
//     var hours   =  currentTimeDate.getHours();

//         var minutes =  currentTimeDate.getMinutes();
//         minutes = minutes < 10 ? '0'+minutes : minutes;

//          var AMPM = hours >= 12 ? 'PM' : 'AM';

//         if(hours === 12){
//             hours=12;

//         }else{

//             hours = hours%12;

//         }

//         var currentTime = `${hours}:${minutes}${AMPM}`;
//         var currentDay = weekday[currentTimeDate.getDay()];

//         var currentMonth = month[currentTimeDate.getMonth()];
//         var CurrentYear = currentTimeDate.getFullYear();

//         var fullDate = `${currentMonth} ${CurrentYear}`;


//         document.getElementById("currentUTCTime").innerHTML = currentTime;
//         document.getElementById("currentDayOfTheWeek").innerHTML = currentDay;
//         setTimeout(getCurrentTimeDate, 500);

//     }
//     getCurrentTimeDate();
// const d = new Date(Date.UTC(2023, 8, 10));
// document.getElementById("currentUTCTime").innerHTML = d;
// const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

// const c = new Date();
// let day = weekday[c.getDay()];
// document.getElementById("currentDayOfTheWeek").innerHTML = day;

// const d = new Date();
// let ms = d.getUTCMilliseconds();
// document.getElementById("currentUTCTime").innerHTML = ms;