// vamos declarar uma variavel de um array e iterar os elementos desse array

const numeros = [1,2,3,4,5,6]
for(numero of numeros)
console.log(numero)

// agora vamos usar o split e depois o join para uma variável 

const frase = "O país é uma super potência mundial"

const separar = frase.split(" ")
console.log(separar)

//agora vamos juntar
console.log(separar.join ("-"))
