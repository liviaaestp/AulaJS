document.write("<h1>Exercício 3</h1>");

var valor = Number(prompt("Digite o valor da prestação em atraso: "));

var taxa = Number (prompt("Digite o valor a taxa: "));

var tempo = Number(prompt("Digite o tempo: "));


var resultado = valor + (valor (taxa  * taxa /100)* tempo);

document.write("<p> O valor da parcela será " + resultado + "</p>");