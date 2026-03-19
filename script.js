//cálculo do totoal
function alterarqtd(botao, valor){
    const span = botao.parentElement.querySelector("span");
    let quantidade = parseInt(span.innerText);
    quantidade += valor;
    if (quantidade < 0) quantidade = 0;
    span.innerText = quantidade;
    atualizarTotal();
}

//Mostrar total
function atualizarTotal() {
    let produtos = document.querySelectorAll(".produto");
    let total = 0;
    produtos.forEach(p => {
        let preco = parseFloat(p.dataset.preco);
        let qtd = parseInt(p.querySelector("span").innerText);
        total += preco * qtd;
    });
    document.getElementById("total").innerText = total.toFixed(2);
    localStorage.setItem("total", total);
}