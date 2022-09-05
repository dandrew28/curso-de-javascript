// criar um objeto e cloná-lo

// criamos uma constante

const filme = {
    nome: "super man",
    ator: "Henry Cavil",
    idade: 43,
    genero: "masculino",
    movie () {
        console.log ("Homen de aço")
    }
}
const clone = Object.assign ({}, filme)
console.log (clone)