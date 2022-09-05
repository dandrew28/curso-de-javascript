// criar uma função que exibe a quantidade de asterísticos que aquela linha possui

exibirAsteristicos(5)

function exibirAsteristicos(linhas) {
let asteristico = " " // declaramos uma variável vazia
for (let i = 1; i <= linhas; i++)
         // i não pode ser igual a zero pois começamos com 1 linha
asteristico += "*"
console.log (asteristico)

}
