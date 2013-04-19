$(function(){
  $('#content .post-meta').animate({
    height: '0',
    marginTop: '0'
  }, 500, function() {
    $('#content .post-meta span').show();
    $('#content .post-meta').animate({
      height: '35'
    }, 500, function() {
      $('#content .post-content').slideDown(500);
    });
  });
});