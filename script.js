
function updateUTCTime() {
    const d1 = new Date();
    const utcTime = d1.getTime();
    document.getElementById("utctime").innerHTML = utcTime;

    const day = d1.getDay();
    const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    document.getElementById("date").innerHTML = daynames[day];   

}


setInterval(updateUTCTime, 1);


updateUTCTime()