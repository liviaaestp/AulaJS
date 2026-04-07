function calcularSalario() {
    let valorHora = Number(prompt("Digite o valor da sua hora de trabalho:"));
    let horasPorDia = Number(prompt("Digite a quantidade de horas trabalhadas por dia:"));
    let salarioMensal = valorHora * horasPorDia * 30;
    document.getElementById("resultado").innerHTML = 
        "O seu salário ao final do mês (30 dias) será: <b>R$ " + salarioMensal.toFixed(2) + "</b>";
}