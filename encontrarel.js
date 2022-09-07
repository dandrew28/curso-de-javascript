// exercício
// Encontrar elementos do tipo referência em um array
// dentro de id e nome

// primeiramente vamos declarar um valor

const marca = [
    {id:"Apple", nome: "Iphone 12"},
    {id: "Samsung", nome: "Galaxy note"},

]
const marcaPreferida = marca.find(function (marcaPreferida) {
    return marcaPreferida.id === "Apple"
})
console.log(marcaPreferida)