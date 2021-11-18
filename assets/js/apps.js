var countDownDate = new Date("1 1, 2022 13:54:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("Days").innerHTML = days + "d ";
  document.getElementById("Hours").innerHTML = hours + "h ";
  document.getElementById("Minutes").innerHTML = minutes + "m ";
  document.getElementById("Seconds").innerHTML = seconds + "s ";
  
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Days").innerHTML = "- -";
    document.getElementById("Hours").innerHTML = "- -";
    document.getElementById("Minutes").innerHTML = "- -";
    document.getElementById("Seconds").innerHTML = "- -";
  }
}, 1000);