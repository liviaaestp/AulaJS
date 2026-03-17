document.write ("<h1> Exercicio 6 </h2>");

var quantidade = Number (prompt("Digite a quqntidade do prouto: "));
var preco = Number (prompt("Digite o preço unitário do produto: "));

var subtotal = quantidade * preco;
var desconto = subtotal * 0.10;
var valorfinal = subtotal - desconto;

document.write ("<p> Subtotal: r$ " + subtotal + "</p>");
document.write ("<p> Desconto (10%): r$ " + desconto + "</p>");
document.write ("<h2> Valor final a pagar : r$ " + valorfinal + "</h2>");