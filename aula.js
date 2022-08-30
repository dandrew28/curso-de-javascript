// console.log('André')
// console.log('primeiro trabalho com javascript')

// 1) variáveis//

// let nome = "André";
// console.log(nome);

// let idade = 10, altura = 1.80;
// console.log(idade);

// console.log(altura);

// const valorIngressoAdulto = 200
// console.log(valorIngressoAdulto)

//2 tipagem dinâmica//

//let nome1 = "André";
//let idade1 = 44;
//let estaAprovado = true;
//let sobrenome = undefined;
//let corSelecionado = null;//


//typeof nome1
//typeof idade1
//typeof estaAprovado
//typeof sobrenome
//typeof corSelecionado
//console.log(typeof nome1)
//console.log(typeof idade1)
//console.log(typeof estaAprovado)
//console.log(typeof sobrenome)
//console.log(typeof corSelecionado)

//estaAprovado = 20 //agora atribui que estaAprovado seja igual a um número, logo:
//console.log(typeof estaAprovado)

// transformar essas informações em objetos//
let nome1 = "André";
let idade1 = 44;
let estaAprovado = true;
let sobrenome = undefined;

let pessoa = {
    nome1: "André",
    idade1: 44,
    estaAprovado: true,
    sobrenome: "de souza"
}
console.log (typeof pessoa)
console.log (typeof pessoa.nome1)
console.log (typeof pessoa.idade1)
console.log (typeof estaAprovado)
console.log (typeof sobrenome)

console.log (pessoa.nome1)
console.log (pessoa.idade1)
console.log ( pessoa.estaAprovado)
console.log ( pessoa.sobrenome)