// criar uma função que faz algo similar aos radares de rua (medir a velocidade dos veículos e dizer quantos pontos os motoristas irão receber na carteira)//

// 1)Primeiramente definimos a velocidade máxima
// velocidade máxima de 70 km/h
// a cada 5 km/h acima do limite o motorista ganha 1 ponto de infração na carteira
// teremos que usar a função math.floor (que arredonda)
// caso os pontos sejam maior que 12 -> "carteira suspensa"

//Resposta: primeiramente vamos criar uma função que verifica a velocidade e atribui pontos na carteira

// o formato da função é do tipo:
// function verificaVelocidade(velocidade) {
// aqui inserimos o código (que vai verificar a velocidade e atribuir pontos a carteira)
// } 
verificaVelocidade(291)

function verificaVelocidade(velocidade) {
    if (velocidade <= 70)
        console.log("ok, dentro do limite de velocidade");        // agora verificar a segunda condição ( a cada 5 acima do limite...)
    else {
        //const pontos = (((velocidade - 70) / 5))
       console.log(Math.floor(((velocidade - 70) / 5)))
        console.log('pontos')
                                                              // caso seja maior que 12
    }
    let pontos = Math.floor(((velocidade - 70) / 5))
    if (pontos > 12)
        console.log(`suspenso por estar com ${pontos} pontos na carteira`)
}