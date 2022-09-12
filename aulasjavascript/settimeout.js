
// construindo um contador no navegador que vai de 1 até 5 (5000 ms)

// usamos o settimeout


function ativar()  {
    // setTimeOut (function,tempo em milisegundos)
    document.getElementById("titulo").innerHTML = "começou a contagem"
     // ativa a função apenas 1 vez quando der o tempo especificado
     tempo = setTimeout(function() {
        document.getElementById("titulo").innerHTML = "executou o set time out";

    },5000);
}

// agora quero utilizar o botao para PARAR a contagem transformar a setTimeout em uma variável (acrescento: tempo)

function desativar() {
      
    // comando clearTimeout para limpar a variável escolhida
    clearTimeout(tempo);
    document.getElementById("titulo").innerHTML = "pára a contagem";
}