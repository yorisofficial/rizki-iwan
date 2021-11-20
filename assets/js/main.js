// music togle
var mysong = document.getElementById("mysong");
var icon = document.getElementById("icon");

icon.onclick = function(){
    if (mysong.paused){
        mysong.play();
        icon.src = "assets/img/pause.png";
    }else{
        mysong.pause();
        icon.src = "assets/img/play.png"; 
    } 
};

// count-down
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

// buku tamu
const scriptURL = 'https://script.google.com/macros/s/AKfycbxSmcwgAdOpNi9amAbQMQDmHZAZkVtsNC4f2P7e82HutU5x6fS6DeNmZJ5R-_YvXzh9xA/exec'
const form = document.forms['wpp-template']
const btnKirim = document.querySelector('.btn-kirim')
const btnLoading = document.querySelector('.btn-loading')
const myAlert = document.querySelector('.my-alert')

form.addEventListener('submit', e => {
    e.preventDefault()

    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        console.log('Success!', response)
        btnLoading.classList.toggle('d-none');
        btnKirim.classList.toggle('d-none');
        myAlert.classList.toggle('d-none');
        
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})