// Ejercicio While 4: Generador de Números Aleatorios
// Usa un ciclo while para generar números aleatorios entre 1 y 100 hasta que salga el número 50. 
// Cuenta cuántos intentos tomó.
let numero;
let contador = 0;
let suma = 0;

console.log("Generando números aleatorios hasta obtener un 30:");

do {
    numero = Math.floor(Math.random() * 100) + 1;
    suma += numero;
    contador++;
    console.log(`Número ${contador}: ${numero}`);
} while (numero!== 30);

console.log(`Se generaron ${contador} números`);
console.log(`Suma total: ${suma}`);
console.log(`Promedio: ${(suma / contador).toFixed(2)}`);