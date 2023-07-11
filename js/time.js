jQuery(document).ready(function ($) {

    "user strict";
    //1var and Inits
    initTimer();


    // 2.  Inits Menu


    // 3.  Init Timer

    function initTimer() {
        if ($('.timer').length) {
            //    uncomment line below and reolace date
            //    var target_date = new Date("May 4, 2023").getTime();


            // comment lines below
            var date = new Date();
            date.setDate(date.getDate() + 3);
            var target_date = date.getTime();

            // Variables for time units
            var days, hours, minutes, seconds;
            var d = $('#day');
            var h = $('#hour');
            var m = $('#minute');
            var s = $('#second');

            setInterval(function () {
                // find the amount of "seconds" betweem now and target

                var current_date = new Date().getTime();
                var seconds_left = (target_date - current_date) / 1000;

                // do some time calculations

                days = parseInt(seconds_left / 86400);
                seconds_left = seconds_left % 86400;

                hours = parseInt(seconds_left / 3600);
                seconds_left = seconds_left % 3600;

                minutes = parseInt(seconds_left / 60);
                seconds = parseInt(seconds_left % 60);

                // display result

                d.text(days);
                h.text(hours);
                m.text(minutes);
                s.text(seconds);

            });



        }
    }



});
