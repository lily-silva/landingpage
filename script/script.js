// Single item slick carousel
$('.single-item').slick();

// Smoth Scrolling
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        var target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 80
        }, 900, 'swing', function () {

        });
    });
});