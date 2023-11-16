// Music sound
function toggleMusic() {
  var mysong = document.getElementById("mysong");
  var icon = document.getElementById("icon");

  if (mysong.paused) {
    mysong.play();
    icon.src = "assets/img/pause.png";
  } else {
    mysong.pause();
    icon.src = "assets/img/play.png";
  }
}

// music togle
var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    icon.src = "assets/img/pause.png";
  } else {
    mysong.pause();
    icon.src = "assets/img/play.png";
  }
};


// count-down
var countDownDate = new Date("12 17, 2023 13:54:00").getTime();

var x = setInterval(function () {

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

// Maps direction
function redirectToLocation() {
  var url = "https://maps.google.com/maps/dir//Jl.+Bojong+Galing+Kabupaten+Sukabumi+Jawa+Barat/@-6.8245753,106.7171828,19z/data=!4m5!4m4!1m0!1m2!1m1!1s0x2e682d649a9649ed:0x413b88c059d5677a";
  window.open(url, "_blank");
}
