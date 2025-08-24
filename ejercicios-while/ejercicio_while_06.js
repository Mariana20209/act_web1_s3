// Ejercicio While 6: Búsqueda en Array
// Crea un programa que use while para buscar un elemento específico en un array de 15 números aleatorios. 
// Muestra en qué posición se encontró.
let numeros = [];
for (let i = 0; i < 15; i++) {
    numeros.push(Math.floor(Math.random() * 100) + 1);
}
    let indice = 0;
    let encontrado = false;
while (indice < numeros.length && !encontrado) {
    if (numeros[indice] === buscar) {
        encontrado = true;
        console.log(`Número ${buscar} encontrado en la posición ${indice}`);
    } else {
        console.log(`Posición ${indice}: ${numeros[indice]} (no es el que buscamos)`);
    }
    indice++;
}

if (!encontrado) {
    console.log(`El número ${buscar} no se encontró en el array`);
}