function Exemplo2()

{
    let numero= Number ( document.getElementById ("numero").value);

    let quadrado, cubo;
    quadrado = numero * numero;
    cubo = numero * numero * numero;

    document.getElementById("resultado").innerHTML=
    "<p> O quadrado do número é " + quadrado + "e o cubo é " + cubo + "</p>";
}