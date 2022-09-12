//const pessoa = ["Dimitri", "Teixeira", 30, "professor" ]
// comando join
                        //mostrar no navegador (na parte do texto), o que tem na constante
                        // pessoa    
//document.getElementById("texto").innerHTML = pessoa;


/*function botao() {                            // vamos pegar o valor  
    let porra = document.getElementById('nome').value;
    if (porra === " " || porra === null) {
        document.getElementById('texto').innerHTML = "o campo não pode ser vazio";
    } 
    
    else {
        document.getElementById('texto').innerHTML = "o campo pode ser vazio";
    }

}*/

// para verificar uma cor no corpo da página diante de uma gama de cores
// quando digitamos uma cor se ela estiver nesse switch de cores a página ficará com essa cor. quando a cor digitada não estiver no switch de cores o navegador retornará através de texto que essa cor não está disponível.
// NÃO ESQUECER QUE PARA CHAMAR A COR SE ESCREVE:
// DOCUMENT.BODY.STYLE.BACKGROUNDCOLOR = "NOME DE COR"

function verificaCor() {
    let cor = document.getElementById("cor").value; // para aparecer o valor da cor digitada
    cor = cor.toLowerCase();// USADO PARA SE VC ESCREVER COM LETRAS MAIÚSCULAS OU MINUSCULAS NO INPUT (ELE VAI RECONHECER TRANSFORMANDO TUDO EM LETRAS MINÚSCULAS)

    switch (cor) {
        case "azul":
        document.body.style.backgroundColor = "blue" // regrinha (lembrar)
    break;
        case "verde":
            document.body.style.backgroundColor = "green";
            break;
            case "amarelo":
            document.body.style.backgroundColor = "yellow";
            break;
            default:
                document.getElementById("texto").innerHTML = "essa cor está disponível para" +  cor; // pois vou exibir um texto
    }
}