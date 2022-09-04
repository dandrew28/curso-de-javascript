// Divisível por 5 => fizz
// Divisível por 3 => Buzz
// Divisível por 5 e 3 => fizzBuzz
// Não é divisível por 5 e 3 => entrada
// Não é um número => Não é um número

const resultado = fizzBuzz(20)
console.log(resultado)
function fizzBuzz(entrada) {
    if (typeof entrada !== "number")
        return "não é number"
    if (entrada % 3 === 0)
        return "é divisível por 3"
    if (entrada % 5 === 0)
        return "é divisível por 5"
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return "é divisível por 3 e 5"
   // if (entrada % 3 !== 0 && entrada % 5 !== 0) ESSA COMPARAÇÃO TEM QUE SER FEITA ANTES DE SE COMPARAR SE É DIVISÍVEL
   //     return "não é divisível por 3 e 5"     // POR 3 E POR 5
    return entrada
}