// animate on scroll
AOS.init();

// typed js
let typedhead = new Typed('.typedhead', {
    strings: [`build interfaces your website with my imajination`, `build interfaces your website with my dru`, `build interfaces your website with my dream`, `build interfaces your website with your dream`],
    typeSpeed: 80,
    loop: false,
    backSpeed: 40,
    backDelay: 300,
})


// opening
setTimeout(() => {
    $('.open h3').css({
        'display': 'none',
        'transition': '.3s'
    });
}, 2000);
//=====================================================||=======================================================
setTimeout(() => {
    $('nav, .contain').css({
        'opacity': 1,
        'display': 'block'
    });
}, 2000);
// onClick
$('.burgerNav input').click(function (e) {
    $('nav ul').toggleClass('appear');
    $('.burgerNav span').toggleClass('appear');
});

// svg awesome
 jQuery('.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });
 
// parallax
$(window).scroll(function () {
    const wScrollY = $(this).scrollTop()

    // console.log(wScrollY)
    $('.head').css({
        'transform': 'translate(0, ' + wScrollY / -20 + '%)'
    });
    $('.about .container p.black, .about .container p.black a').css({
        'transform': 'translate(0,' + wScrollY / -30 + '%)'
    });

    $('.about .container .img').css({
        'transform': 'translate(0,' + wScrollY / 35 + '%)'

    });

    $('.skill .row .col-7').css({
        'transform': 'translate(' + wScrollY / 6 + '%, 0%)'
    });

    if (wScrollY > 2355) {
        $('.skill .row .col-7').css({
            'transform': 'translate( 3000px, 0%)'
        });
    }

    $('.experience').css({
        'transform': 'translate(0, ' + wScrollY / 7.7 + '%)'
    });

    if (wScrollY > 2430) {
        $('.experience').addClass('animation');
        $('.experience').addClass('stop')
    }

    $('.skill .image').css({
        'transform': 'translate(0, ' + wScrollY / -17 + '%)'
    });

    $('.icon').css({
        'transform': 'translate(0, ' + wScrollY / -30 + '%)'
    });



});