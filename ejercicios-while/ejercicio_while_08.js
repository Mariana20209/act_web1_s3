// Ejercicio While 8: Secuencia de Fibonacci
// Implementa un generador de la secuencia de Fibonacci usando while que muestre los primeros 20 números de la serie.
let a = 0;
let b = 1;
let contadorFibonacci = 2; 
console.log(a);
console.log(b);

while (contadorFibonacci < 20) { 
  let siguiente = a + b;
  console.log(siguiente);
  a = b;
  b = siguiente;
  contadorFibonacci++;
}