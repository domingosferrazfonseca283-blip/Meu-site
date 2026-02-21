let totalItens = 0;

function adicionarAoCarrinho() {
    totalItens++;
    // Atualiza o texto do carrinho no menu
    document.querySelector('a[href="#carrinho"]').innerText = `Carrinho (${totalItens})`;
    alert("Produto adicionado à Milomércios!");
}

// Configura o clique em todos os botões de compra
document.querySelectorAll('button').forEach(botao => {
    botao.onclick = adicionarAoCarrinho;
});
function adicionarAoCarrinho(nome, preco) {
    // 1. Pega o carrinho atual
    let carrinho = JSON.parse(localStorage.getItem('milomercios_carrinho')) || [];
    
    // 2. Adiciona o novo produto
    carrinho.push({ nome: nome, preco: preco });
    
    // 3. Salva de volta
    localStorage.setItem('milomercios_carrinho', JSON.stringify(carrinho));
    
    if(confirm("Produto adicionado! Ir para o carrinho?")) {
        window.location.href = "checkout.html";
    }
}

