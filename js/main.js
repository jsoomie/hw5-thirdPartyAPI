
$(document).ready(function() {
    console.log("Hello World!");

    // Displays Current Time in header
    setInterval(currentTime, 1000);
    function currentTime() {
        $("#header-current-time").text(moment());
    } 

    
})