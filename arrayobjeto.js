// vamos criar um objeto (postagem) que vai possuir as seguintes informações:
// titulo, mensagem, autor, visualizações, comentários (autor,mensagem)
// e dizer se está ao vivo ou não


// primeiramente vamos criar uma variável
/*
let postagem = {
    titulo: "Melancholia",
    mensagem: "Apocalipse mundial",
    autor: "Lars Von Trier",
    visualizacoes: 20000,
    comentarios: [
    {autor:"Lars Von Trier", mensagem:"Apocalipse mundial"}

],
aoVivo: true

}
console.log(postagem)

*/
// Agora vamos criar um outro objeto (postagem1) que vai possuir as seguintes informações:
// titulo1, mensagem1, autor1, visualizações1, comentários1 (autor1,mensagem1)
// e dizer se está ao vivo ou não (noAr)



function Postagem1(titulo1, mensagem1, autor1, visualizacoes1, comentarios1) {

    this.titulo1 = titulo1,
    this.mensagem1 = mensagem1,
    this.autor1 = autor1,
    this.visualizacoes1 = 0,// começa com zero
    this.comentarios1 = [] // começa com um array vazio
    this.noAr = false // inicialmente vamos colocar como FALSE
}
                     
let Postagem2 = new Postagem1 ("Metroid", "melhor jogo de 2022", "Samus", "1000000", "ótimo filme")
console.log (Postagem2)