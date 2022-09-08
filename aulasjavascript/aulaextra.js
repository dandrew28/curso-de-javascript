//function digaOnome(nome) {
//  return "olá " + nome // chamo a função
//}
//digaOnome("André")
//console.log(digaOnome("André"))
//let mensagem = digaOnome("André")
//console.log(mensagem)


// uma função só é mostrada se for chamada
// nome da função: calculaDesconto
//parametros: valorDoProduto, desconto
// retorno: valor do produto com o desconto aplicado

function calculoDoDesconto(valorDoProduto, desconto) {
    //valorDoProduto*desconto/100
    let desconto1 = valorDoProduto * desconto / 100
    let valorfinal = valorDoProduto - desconto1

    return valorfinal
}
console.log(calculoDoDesconto(100, 10))