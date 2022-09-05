/* criar uma função de soma que retorne todos os múltiplos de 3 e 5*/



// primeiro armazenar os múltiplos de 3
// depois armazenar os míltiplos de 5
// por último somar os dois
soma(10);
function soma(numero) {
    let multiploDeTres = 0   // criamos uma variavel para os múltiplos de 3
    let multiploDeCinco = 0   // e criamos uma variável para os múltiplos de 5
    for (i = 0; i <= numero; i++) {
    if (i % 3 === 0)
    multiploDeTres += i;
    if (i % 5 === 0)
    multiploDeCinco += i;
}
console.log (multiploDeTres + multiploDeCinco)
}

