$(document).ready(function(){
  /* creo referenze */
  var button = $(".header-right > a");
  var hamburger = $(".hamburger-menu");
  var close = $(".close");

  /* eventi */
  /* click su button per far apparire hamburger-menu */
  button.click(function(){ 
    /* menu appare dopo click */
    hamburger.fadeIn(1500);
  })

  /* click su close per far scomparire hamburger-menu */
  close.click(function(){
    /* menu scompare dopo click sulla x */
    hamburger.fadeOut(1500);
  })

})