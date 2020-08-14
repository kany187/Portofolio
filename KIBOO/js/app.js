$(document).ready(function() {
  $('.wrap').hide();
  var counter = 50;
  var c = 50;
  var i = setInterval(function(){
      $(".loading-page .counter h1").html(c + "%");
      $(".loading-page .counter hr").css("width", c + "%");

    counter++;
    c++;

    if(counter == 101) {
        clearInterval(i);
       $('.loading-page').delay(100).fadeOut();
       $('.wrap').delay(500).fadeIn();
    }
  }, 50);

});
