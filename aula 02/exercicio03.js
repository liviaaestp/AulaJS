function calcularPrestacao() {
   
    let valorOriginal = Number(prompt("Digite o valor da prestação em atraso:"));
    let taxa = Number(prompt("Digite a taxa de juros (em porcentagem):"));
    let tempo = Number(prompt("Digite o tempo (em dias) de atraso:"));

    
    let juros = valorOriginal * (Math.pow(taxa, 2) / 100) * tempo;
    let valorParcela = valorOriginal + juros;

    
    document.getElementById("resultado").innerHTML = 
        "<h3>Resumo do Cálculo:</h3>" +
        "Valor Original: R$ " + valorOriginal.toFixed(2) + "<br>" +
        "Dias de Atraso: " + tempo + "<br>" +
        "<strong>Valor Total da Parcela: R$ " + valorParcela.toFixed(2) + "</strong>";
}