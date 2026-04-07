function calcularIMC() {
    let peso = Number(prompt("Digite o seu peso (em kg):"));
    let altura = Number(prompt("Digite a sua altura (em metros, use ponto):"));
    let imc = peso / (altura * altura);

    document.getElementById("resultado").innerHTML = 
        "Seu IMC é: <b>" + imc.toFixed(2) + "</b>";
}