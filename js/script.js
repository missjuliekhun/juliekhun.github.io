// ===== Scroll to Top ====
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});

// ===== Scroll to the Bottom ====

$(window).scroll(function() {
  if ($(this).scrollDown() == true) {
    $('#scroll-down').fadeOut(200);
  }
});

$('#scroll-down').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollDown : 0                       // Scroll to top of body
    }, 500);
});
