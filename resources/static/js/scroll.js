$(document).ready(function () {

    var onepage = $(".onepage");
    var root = $('html, body');

    for (i = 0; i < onepage.length - 3; i++) {
        var id = onepage[i].id;

        $("#" + id).append("<a href='#" + onepage[i] + "' class='more'></a>");

    }

    $('a').click(function () {
        if ($.attr(this, 'href').indexOf("#") != -1 && $.attr(this, 'href') != "#") {
            console.log($.attr(this, 'href'));
            root.animate({
                scrollTop: $( $.attr(this, 'href')).offset().top - ($('.navbar').height() * 2)
            }, 500);
            return false;
        }
    });
});
