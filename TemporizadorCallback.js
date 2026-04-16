//Temporizador con Callback:
//Crea una función que muestre un mensaje después de esperar 3 segundos utilizando setTimeout y un callback.

function esperarYSaludar(callback) {
    console.log("3 segundos...");
    
    setTimeout(() => {
        callback();
    }, 3000);
}

esperarYSaludar(() => {
    console.log("Han pasado 3 segundos. Hola.");
});