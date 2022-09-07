// vamos criar uma array e remover os ítens do início, meio e fim

// início= .shift, meio= .splice, fim= .pop

// primeiro passo: criar um array de jogos

const jogos = ['super mario', 'sonic', 'zelda', 'metroid', 'last of us', 'god of war']

//início

// criar uma variável

const jogos1 = jogos.shift ();
console.log(jogos1)
console.log(jogos)
//     0         1       2           3              4
// ['sonic', 'zelda', 'metroid', 'last of us', 'god of war']
//meio (vou tirar metroid - indice 2)

const jogos2 = jogos.splice (2,1);
console.log(jogos2)
console.log(jogos)

// ['sonic', 'zelda', 'last of us', 'god of war']

// final

const jogos3 = jogos.pop ();
console.log(jogos3)
console.log(jogos)

// como extra podemos tirar todos os elementos do array

jogos.length = 0
