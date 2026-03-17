document.write ("<h1> Exercicio 7 </h1>");

var nota1= number (prompt ("Digite a primeira nota: "));
var nota2= number (prompt ("Digite a segunda nota: "));
var nota3= number (prompt ("Digite a terceira nota: "));

var media = (nota1 + nota2 + nota3 ) / 3;

document.write ("<p> Nota 1: " + nota1 + "</p>");
document.write ("<p> Nota 2: " + nota2 + "</p>");
document.write ("<p> Nota 3: " + nota3 + "</p>");
document.write ("<h2> A media arimétrica é: " + media.toFixed(2) +"</h2>" );
