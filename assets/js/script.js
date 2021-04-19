$(document).ready(function(){
  /* creo referenze */
  var button = $(".header-right > a");
  var hamburger = $(".hamburger-menu");
  var close = $(".close");

  /* eventi */
  /* click su button per far apparire menu */
  button.click(function(){ 

    /* menu appare dopo click */
    hamburger.fadeIn(1500);

    /* menu scompare dopo click sulla x */
    close.click(function(){
      hamburger.fadeOut(1500)
    })

  })

})