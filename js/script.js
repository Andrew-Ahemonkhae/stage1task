


function updateUTCTime() {
    const d1 = new Date();
    const utcTime = d1.toISOString().slice(11, -1);
    document.getElementById("utctime").innerHTML = utcTime;

    const day = d1.getDay();
    const daynames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    document.getElementById("date").innerHTML = daynames[day];   

}

// Update the UTC time every second (1000 milliseconds)
setInterval(updateUTCTime, 1000);

// Initial call to display the UTC time immediately
updateUTCTime()