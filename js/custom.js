// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function () {

    /*
     *Ouvinte de eventos .nav-modal-open
    */

    $('.nav-modal-open').on('click', function (e) {

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#' + elem).html())

        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modalId'))

        myModal.show()

    });


    /*
        * Validação de Formulário
     */

    function validate(elem) {
        if (elem.val() == '') {
            console.log('O campo de ' + elem.attr('name') + ' é obrigatório')
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')

            return false
        } else {
            elem.parent().find('.text-muted').hide()
            elem.removeClass('invalid')
        }
    }

    $('body').on('submit', '.modal-body .form', function (e) {
        e.preventDefault()

        const inputName = $('#nome')
        const inputPhone = $('#phone')

        validate(inputName)
        validate(inputPhone)


        if (inputPhone.hasClass('invalid') || inputName.hasClass('invalid')) {
            console.log('Verifique os campos obrigatrios')
            return false
        } else {
            $(this).submit()
        }
    })

    $('body').on('blur', '#nome', function () {
        validate($(this))
    })
    $('body').on('blur', '#email', function () {
        validate($(this))
    })
    $('body').on('blur', '#date', function () {
        $(this).datepicker()
        validate($(this))
        $(this).mask('00/00/0000')
    })
    $('body').on('blur', '#hour', function () {
        validate($(this))
        $(this).mask('00:00')
    })
    $('body').on('keyup', '#phone', function () {
        validate($(this))
        $(this).mask('00 00000-0000');
    })




})




/* ***** Modal profile***** */

const openModalButton = document.querySelector("#perfil");
const closeModalButton = document.querySelector("#close_modal");
const modal = document.querySelector("#modal_profile");
const fade = document.querySelector("#fade_modal");


const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide");
};

[openModalButton, closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});


/* ***** Modal skills***** */








/* Efeito escrevendo */

const el = document.querySelector("#logo");
const logo = "JHONY PEREIRA";
const time = 300;

function showText(el, logo, time) {
    const char = logo.split("").reverse();
    const typer = setInterval(() => {
        if (!char.length) {
            return clearInterval(typer);
        }
        const next = char.pop();
        el.innerHTML += next;

    }, time)
}

showText(el, logo, time);






/* ********** timer ************ */
$(document).ready(function () {

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
            date.setDate(date.getDate() + 180);
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






/*btn top */

const scrollTop = document.getElementById('scrolltop')

window.onload = () => {
    scrollTop.style.visibility = 'hidden';
    scrollTop.style.opacity = 0;
}
window.onscroll = () => {
    if (window.scrollY > 200) {
        scrollTop.style.visibility = 'visible';
        scrollTop.style.opacity = 1;
    } else {
        scrollTop.style.visibility = 'hidden';
        scrollTop.style.opacity = 0;
    }
};



// /* ******************** * PopOver * ************************ */
// var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
// var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
//     return new bootstrap.Popover(popoverTriggerEl)
// })