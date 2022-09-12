// <p id="texto">1,2,3,4,5,6,7,8</p> ao invés de repetir os números dentro do parágrafo usamos laços de repetição (vamos contar de 1 até 10000)

/*for (let i = 0; i < 101; i++) {                 // += para acrescentar sem preder o que eu tinha antes na minha variável
     document.getElementById('texto').innerHTML += i + ", ";
}*/






// ESCOLHER ENTRE O ANO QUE ESTAMOS E O ANO DE 1900:
          // 2022    i > 1900            i--
//for (let i = 1900; i >= 1900 && i<= 2022; i++) {
 //   document.getElementById('ano').innerHTML += "<option value= '"+ i +"'>" + i + "</option>"
//}
// maneira de resolver sem tem que ficar colocando o intervalo de anos

let ano = new Date().getFullYear()  // para sempre atualizar o ano

for (let i = ano; i >= 1900; i--) {
    document.getElementById('ano').innerHTML += "<option value= '"+ i +"'>" + i + "</option>"
}