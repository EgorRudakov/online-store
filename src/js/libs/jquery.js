$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    margin: 20,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 2,
      },
      700: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  })
})
