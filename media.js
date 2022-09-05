// descobrir qual é a média da nota escolar
// obter média a partir de um array

/* 0 - 59 = F
60 - 69 = D
70 - 79 = C
80 - 89 = B
90 - 100 = A */

const array = [70,70,80]

console.log (mediaDoAluno(array))

function mediaDoAluno(notas) {
    const soma = 0;
    for (let nota of notas) {
        soma += nota
    }
const media = soma / (notas.length);
if (media >= 0 && media <= 59)
return "F"
if (media >= 60 && media <= 69)
return "D"
if (media >= 70 && media <= 79)
return "C"
if (media >= 80 && media <= 89)
return "B"
if (media >= 90 && media <= 100)
return "A"

}
