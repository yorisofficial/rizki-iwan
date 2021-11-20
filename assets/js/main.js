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