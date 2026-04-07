function calcularMontante() {
   
    let principal = Number(prompt("Digite o valor inicial (Principal):"));
    let taxaPorcentagem = Number(prompt("Digite a taxa de juros (em % ao ano):"));
    let tempo = Number(prompt("Digite o tempo (em anos):"));
    let taxa = taxaPorcentagem / 100;
    let montante = principal * (1 + (taxa * tempo));

    document.getElementById("resultado").innerHTML = 
        "O valor do montante final será: <b>R$ " + montante.toFixed(2) + "</b>";
}