function verificarEntrada () {
    nomePessoa = document.getElementById('nome').value
    convidados = ["Rogério", "André", "Eduardo", "Daniel", "Aline", "Carolina"]
    if (convidados.includes(nomePessoa)) {
        document.getElementById('permissao'). innerText = "Pode entrar"
    } else {
        document.getElementById('permissao'). innerText = "Não pode entrar"
    }
}