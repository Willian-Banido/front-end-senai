

function carregarCatalogo(){

    var livros = [
        ['images/livros/leviata.jpg', 'Leviatã'],
        ['images/livros/Harry Potter calice de fogo1.jpg', 'Harry Potter calice de fogo'],
        ['images/livros/O manifesto1.jpg', 'O manifesto'],
        ['images/livros/Desventuras em série1.jpg', 'Desventuras em série'],
        ['images/livros/Os codigos do milhão1.jpg', 'Os codigos do milhão']
    ]

    livros.forEach(cadaLivro => {

        document.getElementById('catalogo').innerHTML += `
        <div class="livro">
                <img src="${cadaLivro[0]}" alt="">
                <h4>${cadaLivro[1]}</h4>
                <button>
                    Adicionar
                    <img src="images/icons/plus.svg" alt="Plus">
                </button>
            </div>`

    });
}

carregarCatalogo()