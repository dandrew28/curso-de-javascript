function verificarEntrada () {
    nomeDoConvidado = document.getElementById('nome').value;
    convidadosDoCristian = ["Carina", "Aline", "Olívia", "Pedro", "Américo"]
    if (convidadosDoCristian.includes(nomeDoConvidado)) {
        document.getElementById ('permissaoDeEntrada').innerText = "Pode entrar"

     } else {
            document.getElementById ('permissaoDeEntrada').innerText = "Não pode entrar"
        }

    }
