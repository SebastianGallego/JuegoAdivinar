

let nroAleatorio, nroIntentos;
let intentos = [];



// limpio variables y mensajes 
function fncNuevoJuego() {
    nroAleatorio = fncNroAleatorio(); 
    nroIntentos = 0;
    intentos = [];
    fncMensaje("");
    fncListaIntentos("");
    document.getElementById('nroIngresado').value = null;

}

// Genero un número aleatorio entre 1 y 100
function fncNroAleatorio() { 
    const numero = Math.floor(Math.random() * 100) + 1;
     
    return numero; 
} 



// Actualiza el mensaje en la pagina 
function fncMensaje(msg) {
    document.getElementById('mensaje').textContent = msg;
}


function fncListaIntentos(intentos) {
    document.getElementById('listadoIntentos').textContent = intentos;
}



function fncResultado() {
    const nroApostado = parseInt(document.getElementById('nroIngresado').value);
    nroIntentos++;

    if (isNaN(nroApostado)) {
        fncMensaje('Por favor, ingresa un número válido.');
        return;
    }

    intentos.push(nroApostado);

    if (nroApostado === nroAleatorio) {
        gameOver(true);
    } else if (nroApostado < nroAleatorio) {
        fncMensaje('Intenta con un número más grande.');
    } else {
        fncMensaje('Intenta con un número más pequeño.');
    }

    document.getElementById('nroIntento').value = nroIntentos;

    if (nroIntentos > 10) {
        gameOver(false);
    }

    fncListaIntentos(intentos.join(", "));
}

function gameOver(hasWon) {
    if (hasWon) {
        fncMensaje(`¡Felicitaciones! Adivinaste el número ${nroAleatorio} en ${nroIntentos} intento(s).`);
    } else {
        fncMensaje(`Lo siento, has agotado tus intentos. El número era ${nroAleatorio}.`);
    }
    
}

 // Comenzar un nuevo juego cuando se cargue la página
 window.onload = fncNuevoJuego();



