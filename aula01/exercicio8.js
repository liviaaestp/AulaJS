document.write ("<h1> Exercicio 8 - Cálculo de IMC</h1>");

var peso = Number (prompt("Digite o seu peso (em kg): "));
var altura = Number (prompt ( "Digite a sua altura (em metros, ex: 1,75): "));

var imc = peso / (altura * altura );

document.write ("<p> Peso informado: " + peso + "kg</p>");
document.write ("<p> Altura informada: " + altura + "m</p>");
document.write ("<h2> O seu imc é: " + imc.Tofixed(2) + "</h2>");

