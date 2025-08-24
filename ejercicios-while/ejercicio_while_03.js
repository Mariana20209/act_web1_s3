//Implementa un sistema que use un ciclo while para solicitar una contraseña al usuario hasta que ingrese "admin123". Debe mostrar cuántos intentos fallidos hubo antes del acceso correcto.//
let password = "";
let intentos = 0;
let maxIntentos = 3;

while (password !== "secreto123" && intentos < maxIntentos) {
    // En un entorno real, usarías prompt() o input del usuario
    password = prompt("Ingresa la contraseña:");
    intentos++;

    if (password !== "secreto123") {
        console.log(`Contraseña incorrecta. Intentos restantes: ${maxIntentos - intentos}`);
    }
}

if (password === "secreto123") {
    console.log("¡Acceso concedido!");
} else {
    console.log("Acceso denegado. Máximo de intentos alcanzado.");
}