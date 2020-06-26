$(document).ready(function () {

    $('#currentDay').text(moment().format("dddd, MMM Do YYYY"));

    // Displays any saved material in local storage
   $('#9 .description').val(localStorage.getItem('9'));
   $('#10 .description').val(localStorage.getItem('10'));
   $('#11 .description').val(localStorage.getItem('11'));
   $('#12 .description').val(localStorage.getItem('12'));
   $('#13 .description').val(localStorage.getItem('13'));
   $('#14 .description').val(localStorage.getItem('14'));
   $('#15 .description').val(localStorage.getItem('15'));
   $('#16 .description').val(localStorage.getItem('16'));
   $('#17 .description').val(localStorage.getItem('17'));
    
    
    function giveColor() {
        // make sure giveColor is called every minute after page loads
        setInterval(function(){giveColor()}, 1000 *60);
        $(".time-block").each(function () {

            var currentTime = moment().hour();
            var hour = parseInt($(this).attr("id"));

            if (hour < currentTime) {
                $(this).addClass("past");

            } else if (hour === currentTime) {
                $(this).removeClass("past");
                $(this).addClass("present");

            } else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }

        })

    }

    $('.saveBtn').on("click", function () {
        // collecting what has been written in text area, assigning to variable
        var toDo = $(this).siblings(".description").val();

        // collecting the 'id' of the parent div of the row
        var hour = $(this).parent().attr("id");

        // pushing the data into local storage
        // key = id with corresponding time
        // value = what has been written
        localStorage.setItem(hour, toDo);
        console.log(toDo);
    });

    // calling functions
    giveColor();
})