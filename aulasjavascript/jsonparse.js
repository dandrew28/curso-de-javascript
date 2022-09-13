// criamos uma variavel objeto carro
// objeto carro
// quero colocar esse objeto dentro do html
const carro = {
    marca: "Nissan",
    modelo: "March",
    ano: 2015,
}

// se pedirmos para colocar esse objeto acima no html (no navegador não irá ler, ficando escrito: [Object Object])
//document.getElementById("area").innerHTML = carro

// então nós precisamos transformar esse objeto carro em padrão de texto
// por isso usamos JSON para converter objeto em texto:

let texto = JSON.stringify(carro)

document.getElementById("area").innerHTML = texto

// obs: para pegar apenas 1 item (modelo):
// let texto = JSON.stringify(carro.modelo)

// para converter o texto em  ojbeto:

let objeto = JSON.parse(texto)
console.log(objeto.marca)
