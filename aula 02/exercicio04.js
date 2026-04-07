function calcularArea() {
    
    let base = Number(prompt("Digite o valor da base do triângulo:"));
    let altura = Number(prompt("Digite o valor da altura do triângulo:"));


    let area = (base * altura) / 2;

    document.getElementById("resultado").innerHTML = 
        "A área do triângulo com base " + base + " e altura " + altura + " é: <b>" + area + "</b>";
}