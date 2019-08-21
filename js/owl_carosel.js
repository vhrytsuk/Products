
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      items: 4,
      loop: true,
      nav: true,
      margin: 10,
      dots: false,
      responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:true
            },
            1000:{
                items:4,
                nav:true,
                loop:true
            }
    }
    });

    
  });
  