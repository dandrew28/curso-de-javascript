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

//let conta = 1
//while (conta < 10) {
//       if (conta % 2 !== 0){
//        console.log(conta)
//        
//       }    
//       conta++ //conta++ tem que ficar fora do if mas dentro do while//
    //
//}

//vamos contar de 1 até 100 utilizando o operador (FOR)//

// vamos utilizar o for e colocar todas as condições dentro dele//
// a criação de uma variável também se dá dentro do operador for//

//for (let valor = 1; valor <= 100; valor++) {
  //  console.log(valor)
//}

// agora pegaremos apenas os valores impares//

//for(let numero = 1; numero <= 100; numero++) {
  //  if(numero % 2 !== 0) { //utilizamos a confição if
    //    console.log(numero)
    //}
//}

// agora pegaremos apenas os valores ímpares usando o comando while//

// obs: temos que atribuir uma variável FORA do comando while//

//let valor = 1
//while (valor <= 100) {
   // if (valor % 2 !== 0) {
       // console.log(valor)
        
   // }
    //valor++     //valor++ fica FORA do "if"//
//}

// agora vamos contar de 1 até 50 usando o "do.. while"
// o comando "do" abre com CHAVES//
let numero = 1

do {
     console.log("posição", numero)
     numero++
}   while (numero <= 50)

// comando 'for .. in' e 'for.. of'

// vamos criar uma const

const pessoa = {
    nome:'André', 
    idade: 44
}

for(let valor in pessoa) {
    console.log(valor)
    console.log (valor,pessoa)
}


// vamos criar um array com várias cores

//const cores = ['azul', 'verde', 'amarelo', 'roxo']
//for(let ordem in cores) {
  //  console.log(ordem,cores[ordem])
//}


// para colocar na ordem inversa usamos o for of//

const cores = ['azul', 'verde', 'amarelo', 'roxo']
for (let cor of cores) {
    console.log(cores,cor[cores])
    
}


