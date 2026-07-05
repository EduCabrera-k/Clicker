const boton = document.querySelector('#Dark');
const click = document.querySelector('#Clicker');
const Cuerpo = document.body;
const audio = document.querySelector('#audio');
const noti = document.querySelector('.notiOculta');
const notiaudio = document.querySelector('#audionoti');
const btnmusica = document.querySelector('#btnmusica');
const salir = document.querySelector('#exit');
let audioNoti = new Audio('noti.m4a');
let audioReproducido = false;


btnmusica.addEventListener('click' , () => {

    if(audio.paused){
        audio.play();
        btnmusica.innerText = '🔇';
    }else{
        audio.pause();
        btnmusica.innerText = '🔊';
    }
})

boton.addEventListener('click', () =>{
    Cuerpo.classList.toggle('modooscuro');

    if(Cuerpo.classList.contains('modooscuro')){
        boton.innerText = '☀️';
    } else {
        boton.innerText = '🌙'
    }

})

salir.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href= 'index.html';
})


click.addEventListener('click', () =>{
    // Reproducir audio en el primer click
    if(audioReproducido=== false){
        audio.play();
        audioReproducido = true;
    }
    
    let contador = document.querySelector('#contador');
    let valorActual = parseInt(contador.innerText) + 1;

    contador.innerText = valorActual;

    if(valorActual === 30){
        audioNoti.play();
        noti.classList.toggle('notishow');
        noti.innerText = 'Logro Desbloqueado: \n🎉Primeros Clicks 🎉';
        setTimeout(() => {
            noti.classList.remove('notishow');
        }, 5000);

    } if(valorActual === 200){
        audioNoti.play();
        noti.classList.toggle('notishow');
        noti.innerText = 'Logro Desbloqueado: \n🎉 Agarrando Vuelo 🎉';
        setTimeout(() => {
            noti.classList.remove('notishow');
        }, 5000);

    } if(valorActual === 400){
        audioNoti.play();
        noti.classList.toggle('notishow');
        noti.innerText = 'Logro Desbloqueado: \n🎉 Clicker Principiante 🎉';
        setTimeout(() => {
            noti.classList.remove('notishow');
        }, 5000);

    }
})


