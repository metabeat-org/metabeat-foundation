$(function() {
    var gnb = $(".main-menu").offset().top;

    $(window).scroll(function() {

        var window = $(this).scrollTop();
        if(gnb <= window) {
            $(".main-menu").addClass("fixed");
        } else{
            $(".main-menu").removeClass("fixed");
        }
        if ($(this).scrollTop() >= Math.ceil($('.main-top').offset().top)) {
            $('.main-menu ul li').removeClass('active'); 
        }    
        if ($(this).scrollTop() >= Math.ceil($('.experience').offset().top)) {
            $('.main-menu ul li').removeClass('active'); 
            $('.main-menu ul li:nth-child(1)').addClass('active');
        }
        if ($(this).scrollTop() >= Math.ceil($('.service').offset().top - 300)) {
            $('.main-menu ul li').removeClass('active'); 
            $('.main-menu ul li:nth-child(2)').addClass('active');
        }
        if ($(this).scrollTop() >= Math.ceil($('.contact').offset().top)) {
            $('.main-menu ul li').removeClass('active'); 
            $('.main-menu ul li:nth-child(4)').addClass('active');
            //alert('1');
        }

    });

    if(gnb <= window) {
        $(".main-menu").addClass("fixed");
    } else{
        $(".main-menu").removeClass("fixed");
    };



    $('.main-menu ul li:nth-child(1)').click(function(){
        var offset = $('.experience').offset(); 
        $('html').animate({scrollTop : offset.top + 180}, 400);
    });
    $('.main-menu ul li:nth-child(2)').click(function(){
        var offset = $('.service').offset(); 
        $('html').animate({scrollTop : offset.top - 128}, 400);
    });
    $('.main-menu ul li:nth-child(4)').click(function(){
        var offset = $('.contact').offset(); 
        $('html').animate({scrollTop : offset.top}, 400);
    });

    $(document).mousemove(function(e){
        $('#cursor1').css("top", e.pageY);
        $('#cursor1').css("left", e.pageX);
    });
    $(document).mousemove(function(e){
        $('#cursor2').css("top", e.pageY);
        $('#cursor2').css("left", e.pageX);
    });
    $(document).mousemove(function(e){
        $('#cursor3').css("top", e.pageY);
        $('#cursor3').css("left", e.pageX);
    });        

    $('.service-list li:nth-child(1)').mouseenter(function(){
        $('#cursor1').fadeIn(300);
    });
    $('.service-list li:nth-child(1)').mouseleave(function(){
        $('#cursor1').fadeOut(300);
    });
    $('.service-list li:nth-child(2)').mouseenter(function(){
        $('#cursor2').fadeIn(300);
    });
    $('.service-list li:nth-child(2)').mouseleave(function(){
        $('#cursor2').fadeOut(300);
    });
    $('.service-list li:nth-child(3)').mouseenter(function(){
        $('#cursor3').fadeIn(300);
    });
    $('.service-list li:nth-child(3)').mouseleave(function(){
        $('#cursor3').fadeOut(300);
    });        

    $('.mobile-menu').click(function(){
        $('.mobile-menu-close').show();
        $('body > nav ul').show();
    });
    $('.mobile-menu-close').click(function(){
        $('.mobile-menu-close').hide();
        $('body > nav ul').hide();
    });

    $( '.top-btn' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
    } );





});

$(function() {
    var isVisible = false;

    $(window).on('scroll',function() {
        if (checkVisible($('.dropthebeat'))&&!isVisible) {
            //alert("Visible!!!");
            isVisible=true;        
            $('.dropthebeat ul').addClass('active');
        };  
    });


    if (checkVisible($('.dropthebeat'))&&!isVisible) {
        //alert("Visible!!!");
        isVisible=true;        
        $('.dropthebeat ul').addClass('active');
    };  


    function checkVisible( elm, eval ) {
        eval = eval || "object visible";
        var viewportHeight = $(window).height(), // Viewport Height
            scrolltop = $(window).scrollTop(), // Scroll Top
            y = $(elm).offset().top,
            elementHeight = $(elm).height();   
        
        if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
        if (eval == "above") return ((y < (viewportHeight + scrolltop)));
    }
});




