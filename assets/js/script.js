// Slick Nav For Mobile Responsive
jQuery(document).ready(function () {
  $("#main_nav").slicknav({
    prependTo: '.mobile_menu_wrap',
    allowParentLinks: false,
  });
});

// Header Slider with Owl Carousel
jQuery(document).ready(function () {
  $('.homepage_slides').owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    autoplay: true,
    dots: false,
    responsive: {
      0: {
        nav: false,
      },
      600: {
        nav: true,
      }
    }
  });

  // Slick Carousel for Team Section
  $('.theme_2').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
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
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
    ]
  });

  // owlCarousel for our brand logo
  $('.brand_logo_carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: false,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      }
    }
  });
});

// for circle progress bar
jQuery(document).ready(function () {
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
});

// For Portfolio isotope
jQuery(document).ready(function () {
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