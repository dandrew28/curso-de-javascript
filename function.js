// vamos fazer uma função que vai pegar todos os dados de um aparelho celular e colocá-los em um cadástro no sistema
// FACTORY FUNCTION (USAREI ESTA FUNÇÃO)
// modelo = samsung
// tamanho da tela = vertical = 155, horizontal = 75
// capacidade da bateria = 5000 mmah

// vamos colocar os valores dentro de uma constante

const celular = {
modelo: "Samsung",
tela: 7.7,
bateria: 5000,

}

function listaCelular(modelo, tela, bateria) {
return {
    modelo,
    tela,
    bateria,
    ligar () {
        console.log("fazendo ligação...")
    }
}
}
const primeiro = listaCelular("Samsung", 7.7 , 5000)

console.log(primeiro)

const segundo = listaCelular("Nokia", 5 , 4000)

console.log(segundo)


// agora vamos fazer uma função que pega dados de um filme
// criamos uma constante

const filmes = {
    nomeFilme: "Vingadores",
    duracao: "2 horas",
    formato: "16 x 9",
    tela1: 34,
    
}
 // faremos uma função para armazenar todos os dados

 function dadosFilme (nomeFilme, duracao, formato, tela1) {
        return {
            nomeFilme,
            duracao,
            formato,
            tela1,
            ligar () {
                console.log("informação do filme")
            }


        }

 }
// agora que a estrutura já está montada faremos a constante para cada filme
const filme1 = dadosFilme("Vingadores", "2 horas", "16 x 9", 34)
console.log (filme1)

const filme2 = dadosFilme("Fringe", "100 horas", "3 x 4", 12)
console.log (filme2)

const filme3 = dadosFilme("Jurassic World", "3 horas", "16 x 9", 90)
console.log (filme3)




