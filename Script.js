// Variável para armazenar a quantidade de itens
let totalItens = 0;

// Função para adicionar ao carrinho
function adicionarAoCarrinho(nomeProduto) {
    totalItens++;
    
    // Atualiza o texto do carrinho no menu (HTML)
    const carrinhoLink = document.querySelector('nav ul li:last-child a');
    carrinhoLink.innerText = `Carrinho (${totalItens})`;

    // Feedback visual para o usuário
    alert(`Sucesso! ${nomeProduto} foi adicionado ao carrinho do Milomércios.`);
}

// Selecionar todos os botões de compra e adicionar o evento de clique
document.querySelectorAll('.produto-card button').forEach((botao, index) => {
    botao.addEventListener('click', () => {
        // Pega o nome do produto baseado no H3 do card
        const nome = document.querySelectorAll('.produto-card h3')[index].innerText;
        adicionarAoCarrinho(nome);
    });
});