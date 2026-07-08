const boton = document.querySelector('#Dark');
const click = document.querySelector('#Clicker');
const Cuerpo = document.body;
const audio = document.querySelector('#audio');
const noti = document.querySelector('.notiOculta');
const notiaudio = document.querySelector('#audionoti');
const btnmusica = document.querySelector('#btnmusica');
const salir = document.querySelector('#exit');
const logros = document.querySelector('#Logros');
const contador = document.querySelector('#contador');
const cantidadGalletas = document.querySelector('#CantidadGalletas');
let galletas = parseInt(localStorage.getItem('galletas') || '0', 10);

let audioNoti = new Audio('noti.m4a');
let audioReproducido = false;

function actualizarGalletas() {
    if (cantidadGalletas) {
        cantidadGalletas.textContent = galletas;
    }
}

actualizarGalletas();

function leerContador() {
    const valorGuardado = parseInt(localStorage.getItem('contador') || '0', 10);

    if (Number.isNaN(valorGuardado)) {
        localStorage.setItem('contador', '0');
        return 0;
    }

    return valorGuardado;
}

function guardarContador(valor) {
    const valorValido = Number.isFinite(valor) ? valor : 0;
    localStorage.setItem('contador', String(valorValido));

    if (contador) {
        contador.textContent = valorValido;
    }
}

if (contador) {
    guardarContador(leerContador());
}

const modoGuardado = localStorage.getItem('modo');
if (modoGuardado === 'oscuro') {
    Cuerpo.classList.add('modooscuro');
    if (boton) {
        boton.innerText = '☀️';
    }
} else {
    Cuerpo.classList.remove('modooscuro');
    if (boton) {
        boton.innerText = '🌙';
    }
}

if (btnmusica) {
    btnmusica.addEventListener('click', () => {
        if (audio && audio.paused) {
            audio.play();
            btnmusica.innerText = '🔇';
        } else if (audio) {
            audio.pause();
            btnmusica.innerText = '🔊';
        }
    });
}

if (boton) {
    boton.addEventListener('click', () => {
        Cuerpo.classList.toggle('modooscuro');

        if (Cuerpo.classList.contains('modooscuro')) {
            localStorage.setItem('modo', 'oscuro');
            boton.innerText = '☀️';
        } else {
            localStorage.setItem('modo', 'claro');
            boton.innerText = '🌙';
        }
    });
}

if (salir) {
    salir.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'index.html';
    });
}

if (logros) {
    logros.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'Logros.html';
    });
}

if (click) {
    click.addEventListener('click', () => {
        if (audio && audioReproducido === false) {
            audio.play();
            audioReproducido = true;
        }

        const valorActual = leerContador() + 1;
        guardarContador(valorActual);

        if (valorActual % 150 === 0) {
            galletas += 1;
            localStorage.setItem('galletas', String(galletas));
        }

        actualizarGalletas();




        if (valorActual >= 30 && !localStorage.getItem('logro-1')) {
            localStorage.setItem('logro-1', 'Primeros Clicks: 30 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉Primeros Clicks 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        } else if (valorActual >= 200 && !localStorage.getItem('logro-2')) {
            localStorage.setItem('logro-2', 'Agarrando Vuelo: 200 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Agarrando Vuelo 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        } else if (valorActual >= 400 && !localStorage.getItem('logro-3')) {
            localStorage.setItem('logro-3', 'Clicker Principiante: 400 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Clicker Principiante 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 600 && !localStorage.getItem('logro-4')) {
            localStorage.setItem('logro-4', 'Sencillo, ¿verdad?: 600 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Sencillo, ¿verdad? 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 800 && !localStorage.getItem('logro-5')) {
            localStorage.setItem('logro-5', 'Sin nada que hacer: 800 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉Sin nada que hacer  🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 1000 && !localStorage.getItem('logro-6')) {
            localStorage.setItem('logro-6', 'Tiempo Libre: 1000 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Tiempo Libre 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 1500 && !localStorage.getItem('logro-7')) {
            localStorage.setItem('logro-7', '¿Vas por mas?: 1500 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Vas por mas? 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 2000 && !localStorage.getItem('logro-8')) {
            localStorage.setItem('logro-8', 'Descansa esos dedos: 2000 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Descansa esos dedos 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 3000 && !localStorage.getItem('logro-9')) {
            localStorage.setItem('logro-9', 'Mucho tiempo libre: 3000 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Mucho tiempo libre 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 3500 && !localStorage.getItem('logro-10')) {
            localStorage.setItem('logro-10', 'Enserio, Descansa un poco: 3500 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Enserio, Descansa un poco 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 4500 && !localStorage.getItem('logro-11')) {    
            localStorage.setItem('logro-11', '¿Sigues aqui?: 4500 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 ¿Sigues aqui? 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 6000 && !localStorage.getItem('logro-12')) {
            localStorage.setItem('logro-12', '¿No tienes trabajo?: 6000 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 ¿No tienes trabajo? 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 7000 && !localStorage.getItem('logro-13')) {
            localStorage.setItem('logro-13', '¿Why?: 7000 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 ¿Why? 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 8500 && !localStorage.getItem('logro-14')) {
            localStorage.setItem('logro-14', 'Clicker Avanzado: 8500 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Clicker Avanzado 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);
        }else if (valorActual >= 10000 && !localStorage.getItem('logro-15')) {
            localStorage.setItem('logro-15', 'Mucho Mucho tiempo libre: 10000 clicks en el juego');
            audioNoti.play();
            noti.classList.toggle('notishow');
            noti.innerText = 'Logro Desbloqueado: \n🎉 Mucho Mucho tiempo libre 🎉';
            setTimeout(() => {
                noti.classList.remove('notishow');
            }, 5000);               
        }    
    });
}