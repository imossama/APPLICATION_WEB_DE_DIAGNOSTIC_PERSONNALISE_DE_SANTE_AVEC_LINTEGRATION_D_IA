function customScript() {
  (function ($) {
    "use strict";

    // Header Type = Fixed
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      var box = $(".header-text").height();
      var header = $("header").height();

      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    });

    $(".loop").owlCarousel({
      center: true,
      items: 2,
      loop: true,
      autoplay: true,
      nav: true,
      margin: 0,
      responsive: {
        1200: {
          items: 4,
        },
        992: {
          items: 3,
        },
        760: {
          items: 2,
        },
      },
    });

    // Acc
    $(document).on("click", ".naccs .menu div", function () {
      var numberIndex = $(this).index();

      if (!$(this).is("active")) {
        $(".naccs .menu div").removeClass("active");
        $(".naccs ul li").removeClass("active");

        $(this).addClass("active");
        $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .addClass("active");

        var listItemHeight = $(".naccs ul")
          .find("li:eq(" + numberIndex + ")")
          .innerHeight();
        $(".naccs ul").height(listItemHeight + "px");
      }
    });
  })(window.jQuery);
}

export default customScript;
