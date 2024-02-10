let numeroSecreto = 0;
let intentos = 0;
let maximosIntentos = 3;
let numerosDelSorteo = 3;
let listaNumerosSorteados = [];

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function verificarIntento() {
   let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
   if(numeroSecreto === numeroDeUsuario){
    asignarTextoElemento("p", `acertaste el numero, en ${intentos} ${(intentos===1 ? "vez": "veces")} `);
    document.getElementById("reiniciar").removeAttribute("disabled");

   } else{
    if(numeroSecreto > numeroDeUsuario) {
        asignarTextoElemento("p", "el numero es mayor");
    } else{
        asignarTextoElemento("p", "el numero es menor");
    }

    if(intentos == maximosIntentos) {
        asignarTextoElemento("p", `perdiste el numero de intento max. es ${maximosIntentos}, y el secreto era ${numeroSecreto} `)
        document.getElementById("reiniciar").removeAttribute("disabled");

    }
    intentos++;
    limpiaCaja();
    
   }
   return;

}

function limpiaCaja() {
    document.getElementById("valorUsuario").value ="";
}


function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()* numerosDelSorteo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if(listaNumerosSorteados.length == numerosDelSorteo) {
        asignarTextoElemento("p", `Todos los numeros fueron sorteados`);
        
        //recarga la pagina en un tiempo de 5 seg.
        setTimeout(function() {
            location.reload();
        }, 10000);

    }else{
        //si el numero generado esta en a lista sortea otro
        if(listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{
            
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    
    }
   
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "juego del numero secreto");
    asignarTextoElemento("p", `indica un numero del 1 al ${numerosDelSorteo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    
}



function reiniciarJuego() {
    //limpia caja//
    limpiaCaja();
    //indicar mensaje de inicio//
    condicionesIniciales();
    //desabilitar boton reinicio//
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    
}


condicionesIniciales();

