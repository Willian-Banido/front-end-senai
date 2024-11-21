

function carregarCatalogo(){
    for(let i = 0; i <= 10; i++){
        document.getElementById('catalogo').innerHTML += `
        
            <div class="livro">
                <img src="images/livros/leviata.jpg" alt="">
                <h4>LEVIATÃ - THOMAS HOBBES</h4>
                <button>
                    Adicionar
                    <img src="images/icons/plus.svg" alt="Plus">
                </button>
            </div>
        
        `
    }
}

carregarCatalogo()