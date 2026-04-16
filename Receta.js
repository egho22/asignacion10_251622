//Ejercicio: Preparación de una Receta
//Define tres funciones: cortarIngredientes, cocinar y servirPlato.
//En la función cortarIngredientes, simula el corte de ingredientes. 
//Utiliza setTimeout para simular el tiempo que tomaría cortar los ingredientes. Luego, llama al callback que se pasa como argumento.

function cortarIngredientes(ingredientes, callback) {
    setTimeout(() => {
        console.log(`Cortando: ${ingredientes}`);
        callback();
    }, 2000);
}

function cocinar(accion, callback) {
    setTimeout(() => {
        console.log(`Cocinando: ${accion}`);
        callback();
    }, 3000);
}

function servirPlato(plato) {
    setTimeout(() => {
        console.log(`Plato servido: ${plato}`);
    }, 3000);
}

function prepararReceta(plato, callback) {
    console.log(`Comenzando a preparar ${plato}`);
    cortarIngredientes("Vegetales", () => {
        cocinar("saltear", () => {
            cortarIngredientes("Pollo", () => {
                cocinar("freir", () => {
                    cocinar("mezclar todo", () => {
                        servirPlato(plato)
                        callback();
                    })
                })
            })
        })
    })
}

prepararReceta("Pollo a la wok", ()=>{console.log("Receta completa")})