function criaCartao(categoria, pergunta, resposta, imagemSrc, imagemAlt) {
    let container = document.getElementById('container');
    let cartao = document.createElement('div');
    cartao.className = 'cartao';

    cartao.innerHTML = `
        <img src="${imagemSrc}" alt="${imagemAlt}" class="cartao-imagem">
        <div class="conteudo-texto">
            <div class="conteudo-cartao" onclick="mostraResposta(this)">
                <h1>${categoria}</h1>
                ${pergunta ? `<h4>${pergunta}</h4>` : ''}
                <div class="resposta-cartao">
                    <p>${resposta}</p>
                </div>
            </div>
        </div>
    `;

    container.appendChild(cartao);
}