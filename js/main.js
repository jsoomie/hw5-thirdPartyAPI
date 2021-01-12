
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
        console.log(hourNow);

        $(".hour-container").each(function() {
            let selectedHour = parseInt($(this).val());
            if (selectedHour < hourNow) {
                $(".col-md-10").addClass("past");
            } else if (selectedHour === hourNow) {
                $(".col-md-10").removeClass("past");
                $(".col-md-10").addClass("present");
            } else {
                $(".col-md-10").removeClass("past");
                $(".col-md-10").removeClass("present");
                $(".col-md-10").addClass("future");
            }

        })

        console.log(parseInt($(".hour-container").attr('value')));


    }

    hourCheck();
})