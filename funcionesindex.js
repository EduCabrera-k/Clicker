const boton = document.querySelector('#Dark');
const entrar = document.querySelector('#btniniciar');
const usuario = document.querySelector('#usu');
const contra = document.querySelector('#contra');
const Cuerpo = document.body;

boton.addEventListener('click', () =>{
    Cuerpo.classList.toggle('modooscuro');

    if(Cuerpo.classList.contains('modooscuro')){
        boton.innerText = '☀️';
    } else {
        boton.innerText = '🌙'
    }

})

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
