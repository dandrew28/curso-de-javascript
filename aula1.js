//vamos fazer uma função que multiplica um valor//



function multiplicaPorDois (valor) {
return valor*2

}
console.log(multiplicaPorDois(5))


// fazemos uma função que multiplica 10 por 8 e depois divide por 4//

function multiOito (nomedovalor) {
    return nomedovalor*8
}
console.log (multiOito(10))
let resultado = multiOito(10)

console.log (resultado / 4)

// operadores//

let idade = 18

//quero incrementar a idade por 1//



console.log(++ idade)
let corDoCarro = 1000
corDoCarro += corDoCarro
console.log(corDoCarro)

console.log(1===1) //isso é uma verdade estrita, pois querem comparar se são estritamente apenas números (vai retornar TRUE//

console.log('1' === 1) // neste caso o '1' é string e o segundo 1 é um number, logo o resultado vai ser false.//

//operador lógico (e) = &&)

// uma pessoa só pode aplicar para uma vaga se for maior de 18 anos e tiver carteira de trabalho//

let carteira = false
let maioreDeIdade = true

let podeAplicar = carteira && maioreDeIdade
console.log (podeAplicar)

let carteira1 = true
let maioreDeIdade1 = false

let podeAplicar1 = carteira1 || maioreDeIdade1
console.log (podeAplicar1)



//let a = "amarelo"
//let b = "azul"

//console.log(a)
//console.log(b)
// agora vamos trocar de ordem o a pelo b//

// criamos uma nova variavel para guardar o (a) e não deixar que ele se modifique//

let a = "amarelo"
let b = "azul"
let c = a
a = b //passo o valor de b para a por que (a), já está guardado em c
b = c // passo o valor de c para b


console.log(a)
console.log(b)