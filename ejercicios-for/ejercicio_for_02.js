// Ejercicio For 2: Patrón de Asteriscos
// Implementa un programa que use for para crear un patrón de asteriscos en forma de pirámide de 10 niveles de altura.
let altura = 10;

for (let fila = 1; fila <= altura; fila++) {
    let espacios = "";
    let asteriscos = "";

    // Agregar espacios
    for (let e = 1; e <= altura - fila; e++) {
        espacios += " ";
    }

    // Agregar asteriscos
    for (let a = 1; a <= 2 * fila - 1; a++) {
        asteriscos += "*";
    }

    console.log(espacios + asteriscos);
}