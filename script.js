const d1 = new Date();
const utcTime = d1.toISOString().slice(11, -1);
const day = d1.getDay();
const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
document.getElementById("date").innerHTML = daynames[day];

document.getElementById("utctime").innerHTML = utcTime;


