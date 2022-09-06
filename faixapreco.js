// nesse exercicio vamos criar um array de FAIXA DE PRECOS (tipo do objeto)para que possa ser usado em busca de site de produtos e depois criar uma função para estanciar esses objetos.
// o array se chama faixa e terá 3 propriedades: tooltip, mínimo e máximo (valor)
// OBS tooltip é uma dica que aparece quando passamos o mouse em cima da faixa de preço mínima ou máxima

// Primeira opção: criar um array de objetos
let faixa = [
    {tooltip: "0 a 100", minimo: 0, maximo: 100},
    {tooltip: "101 a 500", minimo: 101, maximo: 500},
    {tooltip: "501 a 1000", minimo: 501, maximo: 1000},
    {tooltip: "1001 a 5000", minimo: 1001, maximo: 5000},
    {tooltip: "5001 a 10000", minimo: 5001, maximo: 10000}
   
]
console.log(faixa)

// Segunda opção: a partir de uma factory function

function faixa1 (tooltip,minimo, maximo){
return {
    tooltip,
    minimo,
    maximo,
}
}
let faixa2 = [                   // coloquei let e não const por que os valores variam
    faixa1("a",0,100),
    faixa1("b",101,500),
    faixa1("c",501,1000),
    faixa1("d",1001,5000),
    faixa1("e",5001,10000),

]

console.log(faixa2)

// terceira opção: fazendo a partir de um construction function

function Faixa3(tooltip2,minimo2,maximo2) {
    this.tooltip2 = tooltip2,
    this.minimo2 = minimo2,
    this.maximo2 = maximo2
}
let faixinha = [
    new Faixa3 ("preço",0,100),
    new Faixa3 ("preço",101,500),
    new Faixa3 ("preço",501,1000),
    new Faixa3 ("preço",1001,5000),
    new Faixa3 ("preço",5001,10000)
]
console.log(faixinha)
