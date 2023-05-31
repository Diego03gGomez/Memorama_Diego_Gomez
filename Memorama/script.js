let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(() => {return Math.random()-0.5})


let tarjetas_destapadas = 0;
let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 30;
let tiempo_regresivo = null;
timerinicial = 30

/*APUNTANDO A ELEMENTOS HTML*/
let mostrar_movimientos = document.querySelector(".movimientos")
let mostrar_aciertos = document.querySelector(".aciertos")
let mostrarTiempo = document.querySelector(".tiempo");
let boton_reiniciar= document.querySelector(".btnreiniciar");
console.log(numeros)


boton_reiniciar.addEventListener("click", () => {
    location.reload();
})



/*FUNCIONES*/
function contarTiempo() {
    tiempo_regresivo = setInterval(() => {
        timer = timer - 1;
        mostrarTiempo.innerHTML = `Tiempo : ${timer} segundos`;
        if (timer === 0) {
          
            mostrarTiempo.innerHTML = `😔Perdiste`;
            clearInterval(tiempo_regresivo);
            boqueartarjetas();
        }
    }, 1000);
}



function boqueartarjetas() {
    for (let i = 0; i <= 15; i++) {
    let tarjeta_bloqueada = document.getElementById(i);
    tarjeta_bloqueada.innerHTML = `<img src="/imagenes/${numeros[i]}.png" alt="">`;;
    tarjeta_bloqueada.disabled = true;
        
    }
}



function destapar(id) {
event.preventDefault();
    if(temporizador == false){
        contarTiempo();
        temporizador = true;
    }
    
tarjetas_destapadas= tarjetas_destapadas+1;
console.log()
if (tarjetas_destapadas== 1) {
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = `<img src="/imagenes/${primerResultado}.png" alt="">`;


tarjeta1.disabled= true
} else if(tarjetas_destapadas == 2) {

  
tarjeta2 = document.getElementById(id);
segundoResultado = numeros[id];
tarjeta2.innerHTML= `<img src="/imagenes/${segundoResultado}.png" alt="">`;
tarjeta2.disabled = true;



/*INCREMENTAR MOVIEMIENTOS*/

movimientos= movimientos+1;
mostrar_movimientos.innerHTML = `Movimientos : ${movimientos}`

if(primerResultado == segundoResultado){
    /*ENCERRAR EL CONTADOR*/
    tarjetas_destapadas = 0;
  
/*AUMENTAR ACIERTOS*/
aciertos = aciertos+1;
mostrar_aciertos.innerHTML= `Aciertos: ${aciertos}`

if(aciertos == 8){
    clearInterval(tiempo_regresivo);
    mostrar_aciertos.innerHTML = `Aciertos ${aciertos}`
    mostrar_movimientos.innerHTML = `Movimientos: ${movimientos}`
mostrarTiempo.innerHTML = `🎉🎉Felicitaciones! solo demoraste ${timerinicial - timer} segundos`;
}


} else {
    /*MOSTRAR MOMENTANEAMENTE Y VOLVER A TAPAR*/    
setTimeout(() => {
    
tarjeta1.innerHTML = ' ';
tarjeta2.innerHTML = ' ';
tarjeta1.disabled = false;
tarjeta2.disabled= false;
tarjetas_destapadas = 0;
}, 500);


}


}


}




for (let i = 0; i <= 15; i++) {
  let tarjeta = document.getElementById(i);
  tarjeta.innerHTML =`<img src="/imagenes/${numeros[i]}.png" alt="">`; ;
    
}


setTimeout(() => {
    for (let i = 0; i <= 15; i++) {
        let tarjeta = document.getElementById(i);
        tarjeta.innerHTML = '';
        
    }


}, 6000);





