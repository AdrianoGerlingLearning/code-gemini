let lista_games = [
    {
        nome: "Super Mario Bros",
        descricao: "É uma das franquias de jogos eletrônicos mais famosas e amadas de todos os tempos criada pela Nintendo. A série gira em torno das aventuras de Mario, um encanador italiano, e seu irmão Luigi, que são transportados para o Reino do Cogumelo, um mundo mágico habitado por cogumelos falantes, plantas carnívoras e um vilão barbudo chamado Bowser.",
        link_game: "https://pt.wikipedia.org/wiki/Super_Mario_Bros."
    },
    {
        nome: "Sonic the Hedgehog",
        descricao: "Sonic the Hedgehog é uma franquia de jogos eletrônicos criada pela Sega, estrelada pelo ouriço azul Sonic. A série se concentra em corridas de alta velocidade e plataforma, com Sonic enfrentando o Dr. Eggman em suas tentativas de dominar o mundo.",
        link_game: "https://pt.wikipedia.org/wiki/Sonic_the_Hedgehog"
    },
    {
        nome: "Space Invaders",
        descricao: "Space Invaders é um jogo eletrônico arcade clássico lançado em 1978 pela Taito. O jogador controla uma canhão na parte inferior da tela e deve destruir alienígenas invasores que descem em formações.",
        link_game: "https://pt.wikipedia.org/wiki/Space_Invaders"
    }
];

const listaJogos = document.getElementById('lista-jogos');

lista_games.forEach(jogo => {
    const li = document.createElement('li');
    li.id = jogo.nome;
    
    li.innerHTML = `<h2><span class="math-inline">${jogo.nome}</h2>
                    <p>${jogo.descricao}</p>
                    <a href="${jogo.link_game}" target="_blank">Mais informações</a>`;
    
    listaJogos.appendChild(li);

    li.style.display = 'none';

});

const buscaInput = document.getElementById('search_game');

/*
buscaInput.addEventListener('keyup', (event) => {
    
    const termoBusca = event.target.value.trim().toLowerCase();

    montaResultado(termoBusca);

});
*/

function montaResultado(termoBusca){

    if(termoBusca !== ''){

        lista_games.forEach(jogo => {
            const li = document.getElementById(jogo.nome); // Assumindo que você adicionou um ID único a cada li
            if (jogo.nome.toLowerCase().includes(termoBusca) || "todos" == termoBusca) {
                li.style.display = 'block';
            } else {
                li.style.display = 'none';
            }
        });

    }else{
        lista_games.forEach(jogo => {
            const li = document.getElementById(jogo.nome);
            li.style.display = 'none';
        });
    }

}

function pesquisarGames() {
    
    const input = document.getElementById('search_game');
    
    const valorDoInput = input.value;

    montaResultado(valorDoInput);
}