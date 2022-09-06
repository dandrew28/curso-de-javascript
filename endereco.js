/* Criar um objeto endereço indicando a seguinte informação:
- Rua
- Número
- Cidade
- Bairro
- Estado
- CEP
- criar uma função exibirEndereco (endereco)*/

// a primeira coisa que temos que fazer é criar um objeto que contenha todas essas informações

let endereco = {
    rua: "Gavião Peixoto",
    numero: 180,
    cidade: "Niterói",
    baairro: "Icaraí",
    estado: "Rio de Janeiro",
    cep: 23000122
}
// podemos usar FOR .. IN que permite interar sob as propriedades de um objeto
function exibirEndereco (endereco) {
for (let chave in endereco)
console.log(chave, endereco[chave])
}
exibirEndereco(endereco)