// criar uma função para mostrar os numeros primos
// primos
// compostos
// ex: 10, 11

numerosPrimos(15)

function numerosPrimos(limite) {
for (let i = 2; i <= limite; i++) {
let ehPrimo = true

for (let divisor = 2; divisor < i; divisor++ ) {
    if (i % divisor === 0 ) {
    ehPrimo = false;
    break;
}
}
if (ehPrimo) 
console.log(i) 
}   
    
    
}
    
    let i = 2;
    let j = 1;
    let soma = 0;
    console.log(`Números primos de 1 até 10 é: `);
    while(i < 10){
    j = 2;
    while(j < i){
    if(i % j ==0){
    j = i + 1;
    }else{
    j = j + 1;
    }
    }
    if( j == i ){
    console.log(i)
    soma = soma + i;
    }
    i = i +1;
    }
