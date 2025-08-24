// Ejercicio For 10: Validador de Palíndromos
// Implementa un programa que use un ciclo for para verificar si una palabra o frase es un palíndromo. 
// Debe ignorar espacios, mayúsculas y signos de puntuación.
let frase = "A mamá Roma le aviva el amor a mamá";
let fraseLimpia = frase.toLowerCase().replace(/[^a-z0-9]/g, '');
console.log(fraseLimpia);
let esPalindromo = true;        
for (let i = 0; i < fraseLimpia.length / 2; i++) {
  if (fraseLimpia[i] !== fraseLimpia[fraseLimpia.length - 1 - i]) {
    esPalindromo = false;
    break;
  }
}
if (esPalindromo) {
  console.log(`La frase es un palíndromo.`);
} else {
  console.log(`La frase no es un palíndromo.`);
}