$(document).ready(function () {


    
            $('.saveBtn').on("click", function () {

                var toDo = $(this).siblings(".description").val();
                // console.log("todo" + toDo);
                var hour = $(this).parent().attr("id");
                // console.log(hour);
                localStorage.setItem(hour, toDo);
                var gotWhatUserWrote = localStorage.getItem(hour);
                console.log("We got -> " + gotWhatUserWrote);
                if (gotWhatUserWrote !== "") {
                    $("id").text(gotWhatUserWrote);
                }
               
            });

            $('#currentDay').text(moment().format("dddd, MMM Do YYYY"));

            
            function giveColor() {

                $(".time-block").each(function () {
                    console.log("each ran");

                    var currentTime = moment().hour();
                    // console.log("This is current time: " + currentTime);

                    var hour = parseInt($(this).attr("id"));
                    console.log(hour);

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
          
    

            giveColor();
        })