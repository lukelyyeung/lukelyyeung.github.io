// Opening animation
$(document).ready(function(){
    loadingBar();
});

function loadingBar() {
    var bar = $(".bar");
    var barText = $(".bar p");
    var width = 0;
    var id = setInterval(frame, 25);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
            bar.fadeOut(100);
            opening();
        } else {
            width++;
            bar.css('width', width +'%');
            barText.html(width + '%');
        }
    }
};

function opening() {
    $(".square").fadeIn(100);
    $(".square").addClass("animated rotateIn infinite");
    $(".square").animate({ top: '50'}, 1000,'linear', function() { 
        $(".square").removeClass('infinite');
        if ($(window).width() <= 992) {
            $(".square").removeClass('loading rotateIn animated').css({ 'transform': 'scale(0.7)', 'opacity': '1' });
        }
        $(".container").animate({"opacity":"1.0"},800,'linear');
        color();
    });
};


function color() {
    var overlay = $("#Banner .overlay");
    var scale = 100;
    var id = setInterval(frame, 100);
    function frame() {
        if (scale <= 65) {
            clearInterval(id);
        } else {
            scale--;
            overlay.css('filter', `grayscale(${scale}%)`);
        }
    }
};

// Logo mediaquery
$(window).resize(function(){
    if ($(window).width() <= 992) {
        $(".square").removeClass('loading rotateIn animated').css({'transform':'scale(0.8)','opacity':'1'});
    }
    else 
        $(".square").addClass('loading rotateIn animated')
})

// Gallery control 
$('.gallery-next').click(function() {
    slideshow(1);
})

$('.gallery-prev').click(function() {
    slideshow(-1);
})

function slideshow(num) {
    var currentNum = $('.gallery-active').index();
    var length = $(".gallery-item").length - 1
    currentNum = (currentNum + num) % length || currentNum + num;
    if (currentNum < 0){
        currentNum = length;
    }
    pushShow(currentNum);
}

function pushShow(num) {
    $('.gallery-active').removeClass('gallery-active animated fadeIn').fadeOut('600','ease',function(){
        $(`.gallery-item:nth-child(${num + 1}`).addClass('gallery-active animated fadeIn');
    });
};

// Carousel Single Page Control
$('#carouselSPAControls').carousel({interval:false});

$('#carouselSPAControls').carousel().on('slid.bs.carousel', function () {
    navActivation();
    arrowControl();
    logoColor('even');
});

function navActivation() {
    var index = $('#carouselSPAControls .active').index('.carousel-item') + 1;
    $(".navbar-dark .navbar-nav .nav-item").removeClass('nav-link-active');
    $(`.navbar-dark .navbar-nav .nav-item:nth-child(${index - 1})`).addClass('nav-link-active');
}

function arrowControl() {
    if ($('#carouselSPAControls .carousel-item:first-child').hasClass('active')) {
        $('.up').css('display','none');
    } else {
        $('.up').css('display','flex');
    };
    if ($('#carouselSPAControls .carousel-item:last-child').hasClass('active')) {
        $('.down').css('display','none');
    } else {
        $('.down').css('display','flex');
    };    
}

function logoColor(pattern) {
    if ($(`#carouselSPAControls .carousel-item:nth-child(${pattern})`).hasClass('active')) {
        $('.square h1').css('color','white');
        $('.square').css('border-color','white');
    }else {
        $('.square h1').css('color', 'rgba(214,29,40,1)');
        $('.square').css('border-color', 'rgba(214,29,40,1)');
    }
}

// Mouse wheeling hijacking carousel
$(window).bind('mousewheel DOMMouseScroll', function (event) {
    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        $("#carouselSPAControls").carousel("prev");
    }
    else {
        $("#carouselSPAControls").carousel("next");
    }
});

// Keyboard pressing hijacking for carousel
$(window).bind('keydown', function (event) {
    if (event.which === 38) {
        $("#carouselSPAControls").carousel("prev");
    }
    else if (event.which === 40) {
        $("#carouselSPAControls").carousel("next");
    }
});