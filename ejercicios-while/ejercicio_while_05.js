// Ejercicio While 5: Calculadora de Factorial
// Implementa una función que use while para calcular el factorial de un número ingresado por el usuario.
function calcularFactorial(n) {
    let factorial = 1;
    let i = 1;

    while( i <= n);{
        factorial *= i;
        i++;
    }

    return factorial;
}

console.log(`El factorial de 5 es: ${calcularFactorial(5)}`);