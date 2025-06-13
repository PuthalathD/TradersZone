function updateClocks() {
    const now = new Date();

    // Get actual UTC time from local time
    const nowUTC = new Date(now.getTime() + now.getTimezoneOffset() * 60000);
    
    // IST = UTC + 5:30
    const nowIST = new Date(nowUTC.getTime() + (5.5 * 60 * 60 * 1000));

    function formatTime(date) {
        return date.toTimeString().split(' ')[0]; // HH:MM:SS
    }

    document.getElementById('gmtClock').innerText = "GMT Time: " + formatTime(nowUTC);
    document.getElementById('istClock').innerText = "IST Time: " + formatTime(nowIST);
}

// Call once on page load
updateClocks();

// Update every second
setInterval(updateClocks, 1000);

