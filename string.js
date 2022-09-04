// criar uma função para ler propriedades de um objeto e exibir SOMENTE as propriedades do tipo string que estão nesse objeto//

// criamos uma constante
// usamos a propriedade FOR .. IN

const objeto = {
    filme: ": Vingadores Ultimato",
    ano: 2019,
    diretor: ": Irmãos Russos",
    personagem: ": Capitão américa"

}

propriedades(objeto)
function propriedades (valor) {

for (let item in valor) 
   if (typeof valor[item] === "string") // vai exibir tudo. para exibir apenas os strings colocar: typeof valor[item]
    console.log (item, valor[item])
    else{
        console.log ("")
    }
}

