

  // Or with jQuery

  $(document).ready(function(){

  	$('.hide-on-med-and-down  a').click(function(){

                $('.hide-on-med-and-down  a').removeClass('active');

                $(this).addClass('active');
    });

  	$('.collapsible').collapsible();
    
     $(".button-collapse").sideNav({closeOnClick: true});

     $('.dest-capa').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:false,
	    autoplay:false,
	    items:1
	});


    $('.listagem-servicos').owlCarousel({
	    loop:false,
	    margin:0,
	    nav:true,
	    responsive:{
	        0:{
	            items:2
	        },
	        600:{
	            items:4
	        },
	        1000:{
	            items:6
	        }
	    }
	});

	$('.listagem-eventos').owlCarousel({
	    loop:false,
	    margin:15,
	    nav:false,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{ 
	            items:3
	        },
	        1000:{
	            items:3
	        }
	    }
	});


	var nav = $('.nav-total');
    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

  });

$(function() {
                $('.link').bind('click',function(event){
                    var $anchor = $(this);
        
                  $('html, body').stop().animate({scrollTop: $($anchor.attr('href')).offset().top}, 1000,'swing');
                    
                

                });
            });




















