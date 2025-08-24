// Ejercicio While 10: Procesador de Calificaciones
// Usa while para ingresar calificaciones de estudiantes (termina con -1). 
// Calcula el promedio, la nota más alta y más baja.
let calificacion;
let suma = 0;
let contador = 0;
let notaMasAlta = -Infinity;
let notaMasBaja = Infinity;

console.log("Ingresa las calificaciones de los estudiantes (termina con -1):");

while (calificacion !== -1) {
   
    calificacion = Math.floor(Math.random() * 11) - 1;
    
    if (calificacion !== -1) {
        suma += calificacion;
        contador++;


        if (calificacion > notaMasAlta) {
            notaMasAlta = calificacion;
        }
        if (calificacion < notaMasBaja) {
            notaMasBaja = calificacion;
        }
    }
}

if (contador > 0) {
    let promedio = suma / contador;
    console.log(`\nResultados:`);
    console.log(`Promedio de calificaciones: ${promedio.toFixed(2)}`);
    console.log(`Notas más alta: ${notaMasAlta}`);
    console.log(`Notas más baja: ${notaMasBaja}`);
} else {
    console.log("No se ingresaron calificaciones.");
}