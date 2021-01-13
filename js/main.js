
$(document).ready(function() {
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
            // grabs the value as an int
            let selectedHour = parseInt($(this).attr('value'));
            // Past hour
            if (selectedHour < hourNow) {
                $(this).children('.text-area').addClass("past");
            // Present Hour
            } else if (selectedHour === hourNow) {
                $(this).children('.text-area').removeClass("past");
                $(this).children('.text-area').addClass("current");
            // Future Hour
            } else {
                $(this).children('.text-area').removeClass("past");
                $(this).children('.text-area').removeClass("current");
                $(this).children('.text-area').addClass("future");
            }
        })
    }

    // Setting the local storage on save click!
    $(".btn").click(function() {

        // Stores text
        let userInput = $(this).siblings('textarea').val();
        // Stores hour
        let hourSelected = $(this).parent().attr("id");
        // Stores into local storage for retrieval
        localStorage.setItem(hourSelected, userInput);
    })

    // Local storage retrieval upon document load
    $('#nine .text-area').val(localStorage.getItem('nine'));
    $('#ten .text-area').val(localStorage.getItem('ten'));
    $('#eleven .text-area').val(localStorage.getItem('eleven'));
    $('#twleve .text-area').val(localStorage.getItem('twelve'));
    $('#one .text-area').val(localStorage.getItem('one'));
    $('#two .text-area').val(localStorage.getItem('two'));
    $('#three .text-area').val(localStorage.getItem('three'));
    $('#four .text-area').val(localStorage.getItem('four'));
    $('#five .text-area').val(localStorage.getItem('five'));

    // Clear all button
    $('.clear-button').click(function() {
        let confirmation = confirm('Are you sure you want to delete and remove everything from your schedule?');
        if(confirmation === true) {
            localStorage.clear();
            $('.text-area').val("");
        } else {
            return;
        }

    })

    hourCheck();
})