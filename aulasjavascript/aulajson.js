const carro = {
    marca: "Nissan",
    modelo: "March",
    ano: 2015,
}
//pegar o valor do campo input
//Site viacep

function buscarCep() {
let valorCampo = document.getElementById("cep").value;

const ajax = new XMLHttpRequest();
ajax.open(GET,'procurar o link do site' + input + '/json' ) // procurar o link do site
ajax.send ();
ajax.onload = function() {
    document.getElementById("texto").innerHTML = this.responseText;
}


}