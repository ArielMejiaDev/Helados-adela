
// Set the date we're counting down to
var countDownDate = new Date("Aug 6, 2019 08:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("countdown").innerHTML = "Abrimos en: " + days + " días <br>" + hours + " horas "
  + minutes + " minutos " + seconds + " segundos";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

//Show the popup
/*$(document).ready(function(){
    setTimeout(function() {
        $('.popup').addClass('opened');
    }, 1000);
    $('.close').click(function(){
        $('.popup').removeClass('opened');
    });
});
*/