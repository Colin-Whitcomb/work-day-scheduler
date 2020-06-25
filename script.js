$(document).ready(function () {

    $('.saveBtn').on("click", function () {

        var toDo = $(this).siblings(".description").val();
        console.log(toDo);
        var hour = $(this).parent().attr("id");
        console.log(hour);
        localStorage.setItem(hour, toDo);
    });

    $('#currentDay').text(moment().format ("dddd, MMM Do YYYY"));

    function giveColor() {
        var currentTime = moment().hour();
        console.log(currentTime);

        $(".time-block").each(function () {

            var hour = parseInt($(this).attr("id"));
            console.log(hour);

            if (hour < currentTime) {
                $(this).addClass("past");

            } else if (hour === currentTime) {
                $(this).addClass("present");
                $(this).removeClass("past");


            } else (hour > currentTime) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }

        });

    };

   

    giveColor();
});