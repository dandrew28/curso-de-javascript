let lista = [100,-20,-30,10,-7,-21,-5]
lista [2] = 89  // na posição 2 onde era -30 passa a ser 89
console.log(lista[1])
console.log(lista)

// exibindo o segundo ítem da lista

let user = {
    nome: "Tiago",
    idade: 35,
    seguidores: 0,
    posts: 10,
    exibeInformacoes: function(){
    console.log(this.nome)
    console.log(this.idade)
    console.log(this.seguidores)
    console.log(this.posts)


    }
}
user.exibeInformacoes()