// MANIPULAR DATAS EM JAVASCRIPT

// comando básico para pegar a data
let data = new Date(); // primeira coisa a fazer pegar a data e colocá-la em uma variável
//console.log(data)

// para pegar o ano

let ano = data.getFullYear()
console.log (ano)

// para pegar o mês atual (lembrando que o primeiro mês está na posição 0)

let mes = data.getMonth()
console.log(mes)

// faria um array com os messes: const mesesDoAno = ["janeiro", ....] 
// const mesCerto = messesDoAno[data.getMonth()]
// console.log(mesCerto)

// pegar o dia

let dia = data.getDate

// pegar o dia da semana

let semana = data.getDay()   // número de 0 a 6

// PEGAR A DATA NO PADRÃO BRASILEIRO: DIA / MES / ANO

let dataBR = data.toLocaleDateString('pt-br')
console.log(dataBR)

// COMPARAR DATAS - MAIOR OU MENOS. EX: VENCIMENTOS (saber se já venceu ou não)

// o usuário pode fazer tal coisa até determinado dia (se passou daquele dia ele não vai poder fazer)

//criamos 2 variáveis:
let hoje = new Date() // aqui é onde vou colocar os valores da data
let vencimento = new Date(2022,8,29) // criar qual vai ser a data de vencimento nesse formato: ano, mês e dia

if (hoje > vencimento) {
    console.log("Sua conta está vencida!")
} else {
    console.log("Ainda não venceu!")
}
// diferença entre duas datas em dias
//quero saber quanto tempo falta para o final do ano
let dataInicial = new Date();
let dataFinal = new Date (2022,11,31)
                          // para transformar a data em milisegundos
let intervalo = dataFinal.getTime() - dataInicial.getTime()  // sempre fazemos a diferença em milisegundos
                                                // ceil = arredonda
//O CÁLCULO DE MILÉSIMOS DE SEGUNDOS PARA DIAS É: Math.Ceil(intervalo / (24 * 60 * 60 * 1000))

let convercaoEmDias = Math.ceil (intervalo / (24 * 60 * 60 * 1000))

console.log (convercaoEmDias)






