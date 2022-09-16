// let date = new Date();
// console.log(date);

// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// let date = new Date();
// let gettingMonthFromArray = month[date.getMonth()];
// alert(`Current month: ${gettingMonthFromArray}`)

// const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// let date = new Date();
// let gettingDaysFromArrays = days[date.getDay()];
// alert(`Today is ${gettingDaysFromArrays}`)

// const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
// let date = new Date();
// let gettingDaysFromArrays = days[date.getDay()];
// if (gettingDaysFromArrays == "sunday" || gettingDaysFromArrays == "saturday" ) {
//     alert(`Today is Fun Day!`)
// } else {
//     alert(`Today is working Day`)
// };

// let date = new Date();
// let Days = date.getDate();
// if(Days <= 16) {
//     alert(`First fifteen days of the month`)
// } else {
//     alert(`Last days of the month`)
// }

let gettingDate = new Date();
document.write(`<h2> ${gettingDate} </h2>`);
let gettingTime = gettingDate.getTime();
document.write(`<h2> Elapsed since January 1, 1970: ${gettingTime} </h2>`);
let gettingOldDate = new Date("01-01-2001");
console.log(gettingOldDate);
let set = gettingOldDate.setDate(1)
let set1 = gettingOldDate.setTime(12)
console.log(set);
// let gettingTimes = gettingOldDate.getMinutes();
// document.write(`<h2> Elapsed since January 1, 1970: ${gettingTimes} </h2>`);


