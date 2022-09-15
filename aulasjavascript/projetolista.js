// após ter feito toda a parte visual do html e css temos que adicionar lógica a essa página, para isso vamos pegar primeiramente a entrada dos dados (o input e o botão)
//
let input = document.getElementById('tarefa'); // pegamos o primeiro item
// pegamos o segundo item
let btn = document.getElementById ('botaozinho');
// transformo em variavel para não ter que ficar pegando document. get......
// chamo também o main
let main = document.getElementById ("areaLista");
// apenas pego o input e o btn
// vamos agora fazer uma função responsável por adicionar uma tarefa
let contador = 0;

function adicionarTarefa() {
      //pegar o valor digitado no input
      let valor = input.value;
      // se não for vazio nem nulo e nem indefinido
      if ((valor !== "") && (valor !== null) && (valor !== undefined)) {
       ++contador
       // vou copiar i div item do html para cá (entre crases)
        let item = `<div id = "${contador}" class="item">
        <div class="item-icone">
          <i class="mdi mdi-circle-outline"></i>

        </div>
        <div class="item-nome">
        ${valor}     

        </div>
        <div class="item-botao">

        <button onclick ="deletado(${contador})" class="delete"><i class="mdi mdi-delete"></i>Deletar</button>
        </div>                 
         
    </div>`
    //obs: temos que tirar (Teste de Tarefa) e colocar (valor) com $
    // para que o nome que colocarmos no input saia em baixo
    // o main vai receber o conteúdo que já tem mais o do (item)
    main.innerHTML += item
    // após essa etapa já podemos apagar a div item

    //para zerar o campo de preenchimento para poder escrever denovo

    input.value = " ";
    input.focus(); // para o campo voltar a ser preenchido
      }
}

// **** perto do fim (function deletar())
function deletar (id) {
    var tarefa = document.getElementById(id)
    tarefa.remove(); // para remover a tarefa

}

// para fazer com que a tecla ENTER também funcione para o campo input:
input.addEventListener ("keyup", function(event) {
    //se teclou ENTER (tecla 13)
    if (event.keyCode === 13) {
        event.preventDefault(); //coloco por precaução 
        btn.click();    // pedimos para que o enter dê um clique
    }
})

// agora vamos remover um ítem da lista que foi criada depois de digitado no campo acima

// vamos no texto onde está o botão deletar e colocamos onclick = "deletado()"
// colocamos uma variável contador
//let contador = 0;

// e colocamos (++contador) em baixo do comando IF

// e no let item colocamos esse contador como um id

// no botão(na parte onclick) colocar ${contador}

// ****criar uma function deletar() para colocar o valor: ${contador}

