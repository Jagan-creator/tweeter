$(document).ready( function() {

  $("textarea").keyup(function() {

    const charCount = $(this).val().length;
    
    // checking for character count being above or below 140

    if (charCount <= 140) {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .removeClass("reduced-counter")
        .text(140 - charCount);
    } else {
      $(this)
        .closest(".new-tweet")
        .find(".counter")
        .addClass("reduced-counter")
        .text(140 - charCount);
    }
  });
});