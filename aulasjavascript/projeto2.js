
let contador = 0;
let input = document.getElementById("tarefa");
let btn = document.getElementById("adicionar");
let main = document.getElementById("areaLista");

function adicionaTarefa() {
    //pegar o valor digitado no input
    let valor = input.value;
    
    // se não for vazio nem nulo e nem indefinido
    if ((valor !== "") && (valor !== null) && (valor !== undefined)) {
        ++contador
        let novoItem = `<div id = "${contador}"class="item">
<div class="item-icone">
    <i class="mdi mdi-circle-outline"></i>
</div>
<div class="item-nome">
    ${valor} 
</div>
<div class="item-botao">
    <button onclick = "deletar(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
</div>

</div>`
main.innerHTML += novoItem; 

input.value = " ";
input.focus();

    }
}
// a partir do momento que coloquei o ${valor}, já posso apagar no html o que está dentro do (main)

// depois adicionamos novos itens no main
// e zeramos os campos de busca (input.value = " ")


// para fazer com que a tecla ENTER também funcione para o campo input:
input.addEventListener ("keyup", function(event) {
    //se teclou ENTER (tecla 13)
    if (event.keyCode === 13) {
        event.preventDefault(); //coloco por precaução 
        btn.click();    // pedimos para que o enter dê um clique
    }
})

// **** perto do fim (function deletar())
// ir no html acima e digitar onclick = "deletar"
function deletar(id) {
    var tarefa = document.getElementById(id)
    tarefa.remove(); // para remover a tarefa

}




// agora vamos fazer para que o item seja marcado e desmarcado