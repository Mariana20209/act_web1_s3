// Ejercicio For 8: Contador de Vocales
//Desarrolla un programa que use un ciclo for para contar cuántas vocales (a, e, i, o, u) hay en una frase dada. Debe mostrar el conteo de cada vocal por separado.//
let cadena = "No se trata de tener tiempo, sino de hacer tiempo"
let contadorVocales = {
    a:0,
    e:0,
    i:0,
    o:0,
    u:0
};
const s = cadena.toLowerCase();

for (let i = 0; i < s.length; i++) {
  const c = s[i];
  if (c === 'a') contadorVocales.a++;
  else if (c === 'e') contadorVocales.e++;
  else if (c === 'i') contadorVocales.i++;
  else if (c === 'o') contadorVocales.o++;
  else if (c === 'u') contadorVocales.u++;
}

console.log("Contedor vocales:");
console.log("a: " + contadorVocales.a);   
console.log("e: " + contadorVocales.e);
console.log("i: " + contadorVocales.i);
console.log("o: " + contadorVocales.o);
console.log("u: " + contadorVocales.u);
