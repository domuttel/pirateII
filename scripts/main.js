console.log('js hooked up');
$(document).on('ready', function() {
    "use strict";

    $(".hidden-profile").hide();

    $(".artist-name").click(function() {
      var $box =  $(this).next(".hidden-profile");
        //   $("body, html").animate({
        //       scrollTop: $(".hidden-profile").offset().top - 200},
        //       1000);
      if($box.is(":visible")){
          $box.slideUp(500);
          return;
      }
      var visibleBoxes = $('.hidden-profile:visible');
      if (visibleBoxes.length > 0) {
          $('.hidden-profile:visible').slideUp(500);
      }
      $box.slideDown(500);
    });

	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $('.nav-links').toggle("slow", function() {
    // Animation complete.
        });
	});
    // $(document).click(function() {
    //     $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').toggleClass('open');
    //
    // })
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 50) {
            $('.contemporary-art').addClass("fade-out");
        }
        else if (y < 50) {
            $('.contemporary-art').removeClass("fade-out");
        }
    });
    $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
        event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 200
            }, 1000);
        }
    });
    var applyPdf = "../../images/site/pirate_application_2017.pdf";
    $("input:button[name='v-application']").click( function (e) {
        e.preventDefault();
        window.open(applyPdf,'_blank');
        return false;
    });
});
