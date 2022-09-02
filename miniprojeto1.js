// Divisível por 5 => fizz
// Divisível por 3 => Buzz
// Divisível por 5 e 3 => fizzBuzz
// Não é divisível por 5 e 3 => entrada
// Não é um número => Não é um número

const resultado = fizzBuzz(5)
console.log(resultado)
function fizzBuzz(entrada) {
if (typeof entrada !== "number")
return ("não é number")
}