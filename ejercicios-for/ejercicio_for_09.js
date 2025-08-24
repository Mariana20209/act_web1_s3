// Ejercicio For 9: Simulador de Dados
// Crea un simulador que use un ciclo for para lanzar dos dados 1000 veces. 
// Calcula y muestra la frecuencia de cada suma posible (2-12) y determina cuál es la más común.
let lanzamientos = 1000;
let frecuencias = {};
for (let i = 0; i < lanzamientos; i++) {
  let dado1 = Math.floor(Math.random() * 6) + 1;
  let dado2 = Math.floor(Math.random() * 6) + 1;
  let suma = dado1 + dado2;

  if (frecuencias[suma]) {
    frecuencias[suma]++;
  } else {
    frecuencias[suma] = 1;
  }
}
console.log("Frecuencia de sumas de dos dados en " + lanzamientos + " lanzamientos:");
for (let suma in frecuencias) {
  console.log("Suma " + suma + ": " + frecuencias[suma] + " veces");
}
