(function iamStrict() {
  "use strict";

  jQuery(document).ready(function () {

    // Slick Nav For Mobile Responsive
    $("#main_nav").slicknav({
      prependTo: '.mobile_menu_wrap',
      allowParentLinks: false,
    });


    // Header Slider with Slick Carousel
    $('.homepage_slides').slick({
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      pauseOnHover: false,
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-long-arrow-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="fa fa-long-arrow-right"></i></button>',
      autoplaySpeed: 2000,
      responsive: [{
          breakpoint: 600,
          settings: {
            arrows: false,
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false
          }
        }
      ]
    });


    // Bootstrap Modal PopUp Video
    // https://codepen.io/vinceumo/pen/jYrroN
    autoPlayYouTubeModal();

    function autoPlayYouTubeModal() {
      var trigger = $('.videoModalTriger');
      trigger.click(function () {
        var theModal = $(this).data("target");
        var videoSRC = $(this).attr("data-videoModal");
        var videoSRCauto = videoSRC + "?autoplay=1";
        $(theModal + ' iframe').attr('src', videoSRCauto);
        $(theModal).on('hidden.bs.modal', function (e) {
          $(theModal + ' iframe').attr('src', '');
        });
      });
    };


    // Slick Carousel for Team Section
    $('.theme_2').slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      pauseOnHover: false,
      arrows: false,
      autoplaySpeed: 2000,
      responsive: [{
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });


    // Slick Carousel for our testimonial
    $(".testimonial_list").slick({
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      arrows: false,
      pauseOnHover: false,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });


    // Slick Carousel for our brand logo
    $(".brand_logo_carousel").slick({
      dots: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      infinite: true,
      pauseOnHover: false,
      autoplay: true,
      arrows: false,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      }, {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    });


    // for circle progress bar
    $('#webdesign_skillbar').circleProgress({
      value: 0.90,
      size: 270,
      fill: '#0bbbc1',
      thickness: 4,
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('.skill_count_find').html(Math.round(90 * progress) + '<i>%</i>');
    });
    $('#graphicdesign_skillbar').circleProgress({
      value: 0.95,
      size: 270,
      fill: '#0bbbc1',
      thickness: 4,
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('.skill_count_find').html(Math.round(95 * progress) + '<i>%</i>');
    });
    $('#digitalmarketing_skillbar').circleProgress({
      value: 0.84,
      size: 270,
      fill: '#0bbbc1',
      thickness: 4,
    }).on('circle-animation-progress', function (event, progress) {
      $(this).find('.skill_count_find').html(Math.round(84 * progress) + '<i>%</i>');
    });


    // For Portfolio isotope
    $('.portfolio_list').isotope({
      layoutMode: 'masonry',
      masonry: {
        columnWidth: '.col-md-3',
        horizontalOrder: true
      }
    });

    $('.portfolio_filter li').on('click', function () {
      $('.portfolio_filter li').removeClass("portfolio_active");
      $(this).addClass('portfolio_active');

      var filterValue = $(this).attr('data-filter');

      $('.portfolio_list').isotope({
        filter: filterValue,
        layoutMode: 'masonry',
        masonry: {
          columnWidth: '.col-md-3',
          horizontalOrder: true
        }
      });
    });


  });
})();