// URL do servidor que corre no Termux
const API_URL = 'http://localhost:3000/api';

// 1. Função para procurar produtos no servidor
async function carregarProdutos() {
    try {
        const resposta = await fetch(`${API_URL}/produtos`);
        const produtos = await resposta.json();
        
        const grid = document.querySelector('.grid-produtos');
        grid.innerHTML = ''; // Limpa a vitrine atual

        // 2. Criar o HTML para cada produto vindo do servidor
        produtos.forEach(produto => {
            grid.innerHTML += `
                <article class="produto-card">
                    <img src="https://via.placeholder.com/200" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>R$ ${produto.preco.toFixed(2)}</p>
                    <p>Stock: ${produto.stock}</p>
                    <button onclick="comprar(${produto.id})">Comprar</button>
                </article>
            `;
        });
    } catch (erro) {
        console.error("Erro ao ligar ao servidor do Milomércios:", erro);
    }
}

// 3. Função para enviar a compra para o servidor
async function comprar(idProduto) {
    const dadosPedido = { idProduto: idProduto, quantidade: 1 };

    const resposta = await fetch(`${API_URL}/comprar`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dadosPedido)
    });

    const resultado = await resposta.json();
    alert(resultado.mensagem);
}

// Iniciar a carga quando o site abre
carregarProdutos();

