/* encontrar a igualdade entre 2 objetos criando 2 endereços e depois comparar se são iguais em termos de propriedades e endereço de memória. teremos que fazer 2 funções*/

// fazer construction function

function Endereco(rua, cidade, cep) {
    this.rua = rua,
        this.cidade = cidade,
        this.cep = cep
}
// criarei 2 constantes

const endereco1 = new Endereco("Projetada", "São Gonçalo", 22378001);
console.log(endereco1);
const endereco2 = new Endereco("Marly Cunha", "Maricá", 22444099);
console.log(endereco2)

// agora fazemos as duas funções
// primeiro para comparar se as propriedades são iguais
function saoIguais(endereco1, endereco2) {
    return endereco1.rua === endereco2.rua &&
        endereco1.cidade === endereco2.cidade &&
        endereco1.cep === endereco2.cep
}
console.log(saoIguais(endereco1, endereco2))
// comparar se a referencia do objeto aponta para o mesmo local da memória

function mesmoLocal(endereco1, endereco2) {
    return endereco1 === endereco2

}
console.log(mesmoLocal(endereco1, endereco2))