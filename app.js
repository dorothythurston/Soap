$(document).ready(function() {
  $('.soap').mouseleave(function() {
    var removePx = function(a) {
      return parseInt(a.replace( "px", "" ));
    },
      top = removePx($('.soap').css("top")),
      left = removePx($('.soap').css("left"));

    if (top <= 50) {
      $(this).animate({ top: '+=80px'}, 800);
    }
    else if (top >= 200) {
      $(this).animate({ top: '-=80px'}, 800);
    }
    else if (left <= 50 ) {
      $(this).animate({ left: '+=80px'}, 800);
    }
    else if (left >= 200) {
      $(this).animate({ left: '-=80px'}, 800);
    }
  });

  $('.soap').mouseenter(function() {
   var ranNum = Math.floor(Math.random() * 4);
    	switch(ranNum) {
      case 0:
          $(this).animate({ top: '+=50px'}, 800);
          break;
      case 1:
          $(this).animate({ top: '-=50px'}, 800);
          break;
      case 2:
          $(this).animate({ left: '+=50px'}, 800);
          break;
      case 3:
          $(this).animate({ left: '-=50px'}, 800);
          break;
      }
    });
});
