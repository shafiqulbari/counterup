//jq
$(document).ready(function(){

//counterUp plugin starts  
  $('.counter').counterUp({
    delay: 10,
    time: 4000
  });
  
$(function() {
  
  $('.count-num').rCounter({
    duration: 70
  });
});

window.onload = () => {
  // $(selector).countMe(delay,speed)
  $("#num1").countMe(40, 28);
  $("#num2").countMe(30, 20);
  $("#num3").countMe(35, 30);
}
  
})