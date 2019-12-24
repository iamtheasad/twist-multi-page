// for slider
jQuery(document).ready(function () {
  $('.homepage_slides').owlCarousel({
    nav: true,
    items: 1,
    loop: true,
    navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    autoplay: true,
    dots: true,
  });

  // owlCarousel for our team section
  $("#teams").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    center: true,
  });

  // owlCarousel for our testimonial
  $(".testimonial_list").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    dots: true,
    nav: false,
    center: true,
  });

  // owlCarousel for our brand logo
  $('.brand_logo_carousel').owlCarousel({
    items: 5,
    loop: true,
    autoplay: true,
    dots: false,
    nav: false
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

