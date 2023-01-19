$(document).ready(function() {
    // run function on initial page load
    clickableDiv();
    nav();
    smoothScroll();
    form();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function form() {
  var sliders = ["#gd-skills", "#gd-understanding", "#public-speaking", "#critique"];
  console.log(sliders);
  var i;
  var j;
  for (i = 0; i < sliders.length; i++) {
    $(sliders[i]).click( function (){
      $(this).attr("data-clicked", "true");
      $(this).removeClass("slide-invalid");
      $(this).addClass("slide-clicked");
      if ( $(sliders[0]).attr('data-clicked') == 'true' && $(sliders[1]).attr('data-clicked') == 'true' && $(sliders[2]).attr('data-clicked') == 'true' && $(sliders[3]).attr('data-clicked') == 'true' ) {
        $("#warning").addClass("w-hidden");
      }
    });
  };
  $('#sub-but').click( function(){
    $('#sp-form').addClass('submitted');
    for (j = 0; j < sliders.length; j++) {
      if ($(sliders[j]).attr('data-clicked') == 'false' ) {
        $("#sp-form").submit(function(e){
          e.preventDefault();
        });
        $(sliders[j]).addClass("slide-invalid");
        $("#warning").removeClass("w-hidden");
      } else if ( $(sliders[0]).attr('data-clicked') == 'true' && $(sliders[1]).attr('data-clicked') == 'true' && $(sliders[2]).attr('data-clicked') == 'true' && $(sliders[3]).attr('data-clicked') == 'true' ) {
        $("#sp-form")[0].submit();
        console.log('submit the form!')
      }
    }
  });
}
function clickableDiv() {
  $('.tutorial').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}
function nav() {
  $('.mobile-nav').click(function(){
    $('#menu').removeClass('mobile-hide');
    $('body').addClass('scroll-lock');
    $('#menu').click(function(){
      $('#menu').addClass('mobile-hide');
      $('body').removeClass('scroll-lock');
    });
  });
}
function smoothScroll() {
  $(window).on("load", function(){
    $('[href*="#poster"], [href*="#kinetic"], [href*="#title"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('body, html').animate({
            scrollTop: target.offset().top - 50
          }, 1000);
          return false;
        }
      }
    });
  });
}
