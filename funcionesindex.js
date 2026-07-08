const boton = document.querySelector('#Dark');
const entrar = document.querySelector('#btniniciar');
const usuario = document.querySelector('#usu');
const contra = document.querySelector('#contra');
const Cuerpo = document.body;

if(entrar){


entrar.addEventListener('click', (e) => {
    e.preventDefault();

    if(usuario.value.trim() === ''){
        alert('Por favor, ingresa un nombre de usuario.');
    }if(contra.value.trim() === ''){
        alert('Por favor, ingresa una contraseña.');
    }else{
        window.location.href = 'clicker.html';
    }
});
    }

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker Registrado con éxito'))
        .catch(err => console.log('Error al registrar Service Worker', err));
}    
