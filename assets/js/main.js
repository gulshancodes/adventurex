/*
* Website Name : AdventureX - Travel Agency Website
* Designed & Coded By : Gulshan Songara 
*/


/* 01) preloader */
$(window).on('load', function () {
    $('#preloader').fadeOut(1000);
});


$(document).ready(function () {

    "use strict";

    /* 02) on Window Scroll */
    $(window).on("scroll", function () {

        const currentTop = $(this).scrollTop();

        // Sticky Header
        if (currentTop > 150) {
            $(".navbar").addClass("sticky");
        }
        else {
            $(".navbar").removeClass("sticky");
        }

        // Go-to-top btn
        if (currentTop > 1000) {
            $("#goTop").addClass("show");
        }
        else {
            $("#goTop").removeClass("show");
        }

    });

    /* 03) on Window Reload */
    const scroll = $(window).scrollTop();

    // Sticky Header (on Reload)
    if (scroll > 150) {
        $(".navbar").addClass("sticky");
    }
    else {
        $(".navbar").removeClass("sticky");
    }

    // Go-to-top btn (on Reload)
    if (scroll > 1000) {
        $("#goTop").addClass("show");
    }
    else {
        $("#goTop").removeClass("show");
    }

    /* 04) Go-to-top btn functionality */
    $("#goTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, "fast");
        return false;
    });

    /* 05) Search-field */
    $(".search_box").click(function () {
        $(".search_field").toggle(400);
    });

    /* 06) Date-picker */
    $(".datepicker").datepicker({
        dateFormat: "dd-mm-yy",
        changeYear: true,
        changeMonth: true,
        slideDown: true,
        yearRange: "2021:2025"
    });

    /* 07) Swiper Slider */

    // i) Testimonials Swiper
    const swiper = new Swiper(".testi_swiper", {
        loop: true,
        loopedSildes: 4,
        slidesPerView: 1,
        grabCursor: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    // ii) Partners Swiper
    const swiper2 = new Swiper(".partners_swiper", {
        slidesPerView: 5,
        loop: true,
        loopedSildes: 7,
        loopFillGroupWithBlank: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        }
    });

    /* 08) Counter-up */
    $(".counter").counterUp({
        delay: 10,
        time: 500
    });

});