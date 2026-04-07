function calcularVenda() {
    
    let quantidade = Number(prompt("Digite a quantidade do produto:"));
    let preco = Number(prompt("Digite o preço unitário do produto:"));
    let subtotal = quantidade * preco;
    let desconto = subtotal * 0.10;
    let valorFinal = subtotal - desconto;

    document.getElementById("resultado").innerHTML = `
        <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
        <p>Desconto (10%): R$ ${desconto.toFixed(2)}</p>
        <hr>
        <p><b>Total a pagar: R$ ${valorFinal.toFixed(2)}</b></p> `;
   
}