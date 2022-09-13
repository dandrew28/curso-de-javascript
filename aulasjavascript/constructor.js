
// CONSTRUIR UM CARRO ATRAVES DO CONSTRUCTOR ATRIBUINDO UMA CLASSE A ESSE CARRO

// RESPOSTA:

//FAZEMOS UMA CONST PARA CARRO

const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2022,
}

// também podemos criar uma classe CARRO que construirá esse veículo (AQUI VÃO PASSAR AS MATÉRIAS PRIMAS QUE VÃO FAZER A CONSTRUÇÃO DESSE VEÍCULO)

// ESTA É A FÁBRICA: INÍCIO...
     // letra maiúscula
class Carro {
    constructor(valor1, valor2, valor3){
        this.marca = valor1;
        this.modelo = valor2;               // foi criada uma fábrica de carro
        this.ano = valor3;
    }  
        buzina() {
              return "Biiiiiii"
          }                                 // vou retornar uma função buzina
          buzina() {
            return this.modelo + "  Biiiiiii" // agora estou pegando o modelo do carro que quero que buzine
        }                    
}
// FIM DA FÁBRICA......

// logo podemos fazer assim:

const uno = new Carro ("Fiat","Uno",2022);        // criamos um carro

// então...

console.log(uno)

// se quisessemos fazer com outras marcas poderíamos pois a class carro já foi feita:
const gol = new Carro ("Volkswagen","Chevette",2001)

console.log(gol)

// SE QUISER PEGAR UM ÍTEM

console.log(uno.ano)

// utilizando a buzina
console.log(gol.buzina())
// para trocar um valor de uma propriedade Ex: o ano go gol
gol.ano = 2014
console.log(gol) // mostra o valor antigo e o novo, já com o ano modificado
