const boton = document.querySelector('#Dark');
const Cuerpo = document.body;
const audio = document.querySelector('#audio');
const btnmusica = document.querySelector('#btnmusica');
const regresar = document.querySelector('#regresar');
const logro1 = document.querySelector('#logro-1');
const logro2 = document.querySelector('#logro-2');
const logro3 = document.querySelector('#logro-3');
const logro4 = document.querySelector('#logro-4');
const logro5 = document.querySelector('#logro-5');
const logro6 = document.querySelector('#logro-6');
const logro7 = document.querySelector('#logro-7');
const logro8 = document.querySelector('#logro-8');
const logro9 = document.querySelector('#logro-9');
const logro10 = document.querySelector('#logro-10');
const logro11 = document.querySelector('#logro-11');
const logro12 = document.querySelector('#logro-12');
const logro13 = document.querySelector('#logro-13');
const logro14 = document.querySelector('#logro-14');
const logro15 = document.querySelector('#logro-15');
let audioReproducido = false;

    if(btnmusica){
        btnmusica.addEventListener('click' , () => {
    if(audio && audio.paused){
        audio.play();
        btnmusica.innerText = '🔇';
    }else if(audio){
        audio.pause();
        btnmusica.innerText = '🔊';
    }
})



boton.addEventListener('click', () =>{
    Cuerpo.classList.toggle('modooscuro');

    if(Cuerpo.classList.contains('modooscuro')){
        localStorage.setItem('modo', 'oscuro');
        boton.innerText = '☀️';
    } else {
        localStorage.setItem('modo', 'claro');
        boton.innerText = '🌙'
    }

})

const temaGuardado = localStorage.getItem('modo');
if(temaGuardado === 'oscuro'){
    Cuerpo.classList.add('modooscuro');
    if(boton){
        boton.innerText = '☀️';
    }
}else{
    Cuerpo.classList.remove('modooscuro');
    if(boton){
        boton.innerText = '🌙';
    }
}

regresar.addEventListener('click', (e) =>{
    e.preventDefault();
    window.location.href= 'clicker.html';
})

const guardarLogro1 = localStorage.getItem('logro-1');
const guardarLogro2 = localStorage.getItem('logro-2');
const guardarLogro3 = localStorage.getItem('logro-3');
const guardarLogro4 = localStorage.getItem('logro-4');
const guardarLogro5 = localStorage.getItem('logro-5');
const guardarLogro6 = localStorage.getItem('logro-6');
const guardarLogro7 = localStorage.getItem('logro-7');
const guardarLogro8 = localStorage.getItem('logro-8');
const guardarLogro9 = localStorage.getItem('logro-9');
const guardarLogro10 = localStorage.getItem('logro-10');
const guardarLogro11 = localStorage.getItem('logro-11');
const guardarLogro12 = localStorage.getItem('logro-12');
const guardarLogro13 = localStorage.getItem('logro-13');
const guardarLogro14 = localStorage.getItem('logro-14');
const guardarLogro15 = localStorage.getItem('logro-15');

if(guardarLogro1){
    logro1.innerText = guardarLogro1;
}if(guardarLogro2){
    logro2.innerText = guardarLogro2;
}if(guardarLogro3){
    logro3.innerText = guardarLogro3;
}if(guardarLogro4){
    logro4.innerText = guardarLogro4;
}if(guardarLogro5){
    logro5.innerText = guardarLogro5;
}if(guardarLogro6){
    logro6.innerText = guardarLogro6;
}if(guardarLogro7){
    logro7.innerText = guardarLogro7;
}if(guardarLogro8){
    logro8.innerText = guardarLogro8;
}if(guardarLogro9){
    logro9.innerText = guardarLogro9;
}if(guardarLogro10){
    logro10.innerText = guardarLogro10;
}if(guardarLogro11){
    logro11.innerText = guardarLogro11;
}if(guardarLogro12){
    logro12.innerText = guardarLogro12;
}if(guardarLogro13){    
    logro13.innerText = guardarLogro13;
}if(guardarLogro14){
    logro14.innerText = guardarLogro14;
}if(guardarLogro15){
    logro15.innerText = guardarLogro15; 
    }
}    