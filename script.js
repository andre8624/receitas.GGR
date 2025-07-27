function criaCartao (categoria, pergunta, resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';
    cartao.innerHTML = `
    <div class = "conteudo-cartao" onclick = "mostraReposta(this)">
    <h3 class:"tc">${categoria}</h3>
    <div class="pergunta-cartao">
        <p class:"tc">${pergunta}</p>
    </div>
    <div class="resposta-cartao">
        <p>${resposta}</p>
    </div>
s
</div>
    `

 container.appendChild(cartao);

  
}
function mostraReposta (card)   {
    const resposta = card.querySelector ('.resposta-cartao')
if(resposta.style.display === 'none'){
resposta.style.display = 'block';



}
    else{
        resposta.style.display = 'none';


    }
}
