$(document).ready(function() {
    $('.menu').on('click', function() {
        $('.dropdown').slideToggle(1000, 'swing');
    });
    var myVar = setInterval(myTimer, 3000);

    function myTimer() {
        $('.contact').fadeIn(500);
    }
    $('.contact').on('click, mouseenter', function() {
        $(this).text('+380968084301').addClass('number');
    }).on('mouseleave', function() {
        $(this).html('<p class="callMy">Call my</p>');
    })

    $('.img-circle').animate({
        opacity: 1,
        width: '100px',
        height: '100px',
        marginLeft: '45%',
        marginTop: '70px',
        borderWidth: '1px'
    }, 3000);
    $('.about').animate({ marginLeft: '41%' }, 700);

    $('.button').on('click', function() {
        $('.more').slideToggle(600);
    });

    $('.one').on('click', function() {
        $('.mon').text('javaScript').addClass('add');
    });
    $('.two').on('click', function() {
        $('.tue').text('HTML').addClass('add')
            .on('mouseenter', function() {
                $('.tags').text('tags').addClass('add_two');
            });
    });
    $('.three').on('click', function() {
        $('.wed').text('CSS').addClass('add')
            .on('mouseenter', function() {
                $('.selectors').text('selectors').addClass('add_two');
            });
    });
    $('.four').on('click', function() {
        $('.fri').text('jQuery').addClass('add')
            .on('mouseenter', function() {
                $('.efects').text('efects').addClass('add_two');
            });
    });
    $('table').on('mouseleave', function() {
        $(this).fadeTo(1000, 0.4);
    });


});

function move() {
    var elem = document.getElementById("myBar");
    var width = 10;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 70) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            elem.innerHTML = width * 1 + '%';
        }
    }
}