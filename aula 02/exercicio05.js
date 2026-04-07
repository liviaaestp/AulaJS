function calcularAreaQuadrado() 
{
    
    let lado = Number(prompt("Digite o valor do lado do quadrado:"));

    
    let area = lado * lado;

    
    document.getElementById("resultado").innerHTML = 
        "A área do quadrado com lado " + lado + " é: <b>" + area + "</b>";
}