// Array com os filmes
const filmes = [
    {
        titulo: "O Poderoso Chefão",
        descricao: "Uma história de poder, vingança e redenção no mundo da máfia.",
        imagem: "images/opoderosochefao1.png"
    },
    {
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        descricao: "A jornada épica de Frodo para destruir o Um Anel e salvar a Terra-média.",
        imagem: "images/aneis1.jpg"
    },
    {
        titulo: "Pulp Fiction",
        descricao: "Três histórias interconectadas de crime e violência no estilo de Tarantino.",
        imagem: "images/Pulp_Fiction1.jpg"
    },
    {
        titulo: "Matrix",
        descricao: "Um programador descobre que a realidade ao seu redor é uma simulação digital.",
        imagem: "images/matrix1.jpg"
    },
    {
        titulo: "Gladiador",
        descricao: "A história de um general romano que busca vingança contra o imperador que matou sua família.",
        imagem: "images/gladiador1.jpg"
    },
    {
        titulo: "Interestelar",
        descricao: "Uma missão espacial para salvar a humanidade através de um buraco de minhoca.",
        imagem: "images/interestelar.jpg"
    }
];

// Função para exibir os filmes no HTML
function exibirFilmes() {
    const listaFilmes = document.getElementById('movie-list');
    filmes.forEach(filme => {
        const itemFilme = document.createElement('div');
        itemFilme.classList.add('movie-item');
        
        itemFilme.innerHTML = `
            <img src="${filme.imagem}" alt="${filme.titulo}">
            <h3>${filme.titulo}</h3>
            <p>${filme.descricao}</p>
        `;
        
        listaFilmes.appendChild(itemFilme);
    });
}

// Chamando a função para exibir os filmes
exibirFilmes();
