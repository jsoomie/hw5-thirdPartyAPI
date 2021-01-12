
$(document).ready(function() {
    console.log("Hello World!");

    // Displays Current Time in header
    setInterval(currentTime, 1000);
    function currentTime() {
        $("#header-current-time").text(moment());
    } 

    function hourCheck() {       
        // check what the hour is to compare against
        let hourNow = moment().hours();
        // Loops through the hour list to change colors accordingly
        $(".hour-container").each(function() {
            let selectedHour = parseInt($(this).attr('value'));

            if (selectedHour < hourNow) {
                $(this).children('textarea').addClass("past");
            } else if (selectedHour === hourNow) {
                $(this).children('textarea').removeClass("past");
                $(this).children('textarea').addClass("current");
            } else {
                $(this).children('textarea').removeClass("past");
                $(this).children('textarea').removeClass("current");
                $(this).children('textarea').addClass("future");
            }
        })
    }

    // Setting the local storage!
    $(".btn").click(function() {

        let 

        localStorage.setItem();
    })

    hourCheck();
})