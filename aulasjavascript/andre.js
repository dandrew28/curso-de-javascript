// a pagina da internet vai exibir a (foto do psicólogo) e vai introduzir (informações relevantes sobre a psicologia)
// o usuário poderá preencher os dados como Nome, email, telefone, mensagem e essas informações serão armazenadas.

/* input de entrada do nome (escreva aqui seu nome)
input de entrada de telefone(escreva aqui seu telefone)
envie sua mensagem
input de mensagem
botao (ENVIAR)
mensagem de (mensagem enviada)*/


/*Um novo modelo de carro, super econômico foi lançado.
Ele faz 20 km com 1 litro de combustível.
Cada litro de combustível custa R$ 5,00.

Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida diga quantos litros de combustível ele pode comprar e quantos kilometros o carro consegue andar com este tanto de combustível.*/

/*let dinheiro = 100


    let litrosComprar = dinheiro / 5;
    let quilometros = litrosComprar * 20


console.log(dinheiro)
console.log(litrosComprar)
console.log(quilometros)

console.log(`com ${dinheiro} reais o usuário pode comprar ${litrosComprar} litros para andar ${quilometros}km`);  */


function soma(valor1, valor2) {
    return valor1 + valor2
}
document.getElementById("texto").innerHTML = soma(100, 200)

var total = soma(100, 200)
//alert(total)

function botao() {
    alert("clicado")
}

function vermelho() {
    let mudanca = document.getElementById("cor");
    mudanca.style.backgroundColor = "red"   // .style.backgroundColor é padrao
}

function aqua() {
    let mudanca = document.getElementById("cor");
    mudanca.style.backgroundColor = "aqua"
}
function amarelo() {
    let boaoAmarelo = document.getElementById("nome");
    boaoAmarelo.style.backgroundColor = "yellow"
}

function verde() {
    let botaoVerde = document.getElementById("nome");
    botaoVerde.style.backgroundColor = "green"
}

function andre() {
    let meuNome = document.getElementById("email");
    meuNome.style.backgroundColor = "green"
}

function mudou() {
    document.getElementById('mudou')
}