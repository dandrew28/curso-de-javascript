// criar um programa que dá bom dia, boa tarde ou boa noite//
// Se a hora estiver entre 06:00 e 12:00 : Bom dia!
// Se a hora estiver entre 12:00 e 18:00 : Boa Tarde!
// caso contrário : Boa noite!


let hora = "20:50"

if (hora > "06:00" && hora < "12:00" ) {
    console.log(`São ${hora} hs! Bom dia!`)
}
else if (hora > "12:00" && hora < "18:00" ) {
    console.log(`São ${hora} hs! Boa Tarde!`)
}

else {
    console.log(`São ${hora} hs! Boa noite`)
}


// vamos imaginar um cenário onde temos permissões diferentes: //
// comum, gerente, diretor//
// temos que fazer comparações para saber qual mensagem chegará a cada um dos membros//

// criamos uma variável (depois atribuimos um valor a ela (comum, gerente, diretor)) //

let usuario = "senior"
switch (usuario) {
    case "comum":
        console.log("comum")
        break;
        case "gerente":
            console.log("gerente")
            break;
            case "diretor":
                console.log("diretor")
                break;

    default:
        console.log("usuario desconhecido")
        break;
}

// utilizando o (for)//
// vamos contar do número 1 até o 5 (excluindo o 5)//

// criamos uma variável dentro do comando for//

//for (let conta = 0; conta < 5; conta++) {
//console.log(conta)
//console.log("o numero é", conta)

// fazer o mesmo exercício acima utilizando o comando while//

//let conta = 1
//while (conta < 5) {
//        console.log(conta)
//    conta++
//}

// comando while.. iff//
//descobrir os impares até 10//

let conta = 1
while (conta < 10) {
       if (conta % 2 !== 0){
        console.log(conta)
        
       }    
       conta++ //conta++ tem que ficar fora do if mas dentro do while//
    
}







