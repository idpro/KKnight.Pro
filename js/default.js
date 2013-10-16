$(function(){
  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  $('a').bind('click',function(e){

    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 1000);

    e.preventDefault();
  });
});