const d1 = new Date();
const utcDate = d1.getUTCMilliseconds();
const day = d1.getDay();
const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.getElementById("date").innerHTML = daynames[day];

document.getElementById("utcdate").innerHTML = utcDate;

console.log(1);
