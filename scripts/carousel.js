$(document).ready(function () {
  $(".owl-carousel.sellingCarousel").owlCarousel({
    items: 4,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        margin: 16
      },
      600: {
        items: 2,
        margin: 20
      },
      992: {
        items: 3,
        margin: 30
      },
      1200: {
        items: 4,
        margin: 40
      }
    },
    navText: [`<div class="sign l"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6958 14.4355H5.48568M5.48568 14.4355C5.48568 14.4355 10.364 11.2272 11.3552 8.56592M5.48568 14.4355C5.48568 14.4355 9.79826 17.45 11.3552 20.305" stroke="#1E1E1E" style="stroke:#1E1E1E;stroke:color(display-p3 0.1176 0.1176 0.1176);stroke-opacity:1;" stroke-width="2.17391" stroke-linecap="square"/>
</svg>
</div>`,`<div class="sign r"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.30417 14.4355H22.5143M22.5143 14.4355C22.5143 14.4355 17.636 11.2272 16.6447 8.56592M22.5143 14.4355C22.5143 14.4355 18.2017 17.45 16.6447 20.305" stroke="#1E1E1E" style="stroke:#1E1E1E;stroke:color(display-p3 0.1176 0.1176 0.1176);stroke-opacity:1;" stroke-width="2.17391" stroke-linecap="square"/>
</svg>
</div>`,
    ],
  });
  $(".owl-carousel.TestimonialCarousrl").owlCarousel({
    items: 3,
    loop: true,
    margin: 40,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
        margin: 16
      },
      768: {
        items: 2,
        margin: 24
      },
      1100: {
        items: 3,
        margin: 40
      }
    },
    navText: [`<div class="sign l"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22.6958 14.4355H5.48568M5.48568 14.4355C5.48568 14.4355 10.364 11.2272 11.3552 8.56592M5.48568 14.4355C5.48568 14.4355 9.79826 17.45 11.3552 20.305" stroke="#1E1E1E" style="stroke:#1E1E1E;stroke:color(display-p3 0.1176 0.1176 0.1176);stroke-opacity:1;" stroke-width="2.17391" stroke-linecap="square"/>
</svg>
</div>`,`<div class="sign r"><svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.30417 14.4355H22.5143M22.5143 14.4355C22.5143 14.4355 17.636 11.2272 16.6447 8.56592M22.5143 14.4355C22.5143 14.4355 18.2017 17.45 16.6447 20.305" stroke="#1E1E1E" style="stroke:#1E1E1E;stroke:color(display-p3 0.1176 0.1176 0.1176);stroke-opacity:1;" stroke-width="2.17391" stroke-linecap="square"/>
</svg>
</div>`,
    ],
  });
});

