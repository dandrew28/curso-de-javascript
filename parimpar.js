// fazer um projeto que determina se o valor que está passando no visor é par ou ímpar.

// fazer a função:

definirValor(659)

function definirValor(valor) {
    if (valor % 2 === 0)
        console.log(`O valor ${valor} é Par`)
    else {
        //if (valor % 2 !== 0 )
        console.log(`O valor ${valor} é Ímpar`)

    }
}


// agora números de 0 até 10

valores(20)

function valores(numero) {
    for ( let i = 0; i <= numero; i++) {
        if (i % 2 === 0)
        console.log (`o número ${i} é par`)
        else { 
            console.log (`o número ${i} é ímpar`)
        }
    } 


}
