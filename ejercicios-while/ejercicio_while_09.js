// Ejercicio While 9: Juego de Adivinanza Mejorado
// Crea un juego donde el usuario debe adivinar un número entre 1 y 100. 
// Usa while para dar pistas (mayor/menor) y limita a 7 intentos.
let secreto = Math.floor(Math.random() * 50) + 1;
let intento;
let intentosRestantes = 7;

while (intentosRestantes > 0) {
  intento = Number(prompt(`Adivina el número (1-50), intentos restantes: ${intentosRestantes}`));
  
  if (intento === secreto) {
    console.log("¡Adivinaste!");
    break;
  } else if (Math.abs(intento - secreto) <= 3) {
    console.log("Cerca...");
  } else if (intento > secreto) {
    console.log("Muy alto");
  } else {
    console.log("Muy bajo");
  }
  
  intentosRestantes--;
}

if (intentosRestantes === 0) {
  console.log("Perdiste. El número era:", secreto);
}