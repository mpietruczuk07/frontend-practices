$(".overview-feature-wrapper").slick({
  autoplay: true,
  arrows: false,
  draggable: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

$(".card-wrapper").slick({
  autoplay: true,
  arrows: false,
  draggable: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
});

$(".product-family-card-wrapper").slick({
  autoplay: true,
  arrows: false,
  draggable: true,
  mobileFirst: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
});
