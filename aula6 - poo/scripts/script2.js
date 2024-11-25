// Definição da classe Usuario
class Usuario {
    constructor(id, nickName, nome, email, bio, genero, fotoPerfil) {
        this.id = id;
        this.nickName = nickName;
        this.nome = nome;
        this.email = email;
        this.bio = bio;
        this.genero = genero;
        this.fotoPerfil = fotoPerfil;  // Adicionando foto de perfil
    }

    postar(pensamento) {
        // Cria um novo elemento de postagem
        var postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Cria o cabeçalho (com foto de perfil, nome e @)
        var postHeader = document.createElement('div');
        postHeader.classList.add('header');

        // Adiciona a foto de perfil
        var img = document.createElement('img');
        img.src = this.fotoPerfil;  // Aqui usamos o caminho relativo
        img.alt = `${this.nickName} foto de perfil`;

        // Adiciona o nome de usuário
        var username = document.createElement('span');
        username.classList.add('username');
        username.textContent = this.nome;

        // Cria o elemento para o @, agora com uma nova linha
        var atSymbol = document.createElement('span');
        atSymbol.classList.add('at');
        atSymbol.textContent = `@${this.nickName}`;

        // Organiza o nome de usuário e o @ em linhas separadas
        var usernameWrapper = document.createElement('div');
        usernameWrapper.classList.add('username-wrapper');
        usernameWrapper.appendChild(username);
        usernameWrapper.appendChild(atSymbol);

        // Adiciona foto e nome de usuário
        postHeader.appendChild(img);
        postHeader.appendChild(usernameWrapper);

        postDiv.appendChild(postHeader);

        // Cria o conteúdo do post
        var postContent = document.createElement('div');
        postContent.classList.add('content');
        postContent.textContent = pensamento;

        // Adiciona o conteúdo ao post
        postDiv.appendChild(postContent);

        // Cria e adiciona a data do post
        var postDate = document.createElement('div');
        postDate.classList.add('date');
        postDate.textContent = new Date().toLocaleString();

        postDiv.appendChild(postDate);

        // Adiciona o novo post ao container de resposta
        document.getElementById('resposta').prepend(postDiv);
    }
}

// Definindo dois usuários
var user1 = new Usuario(1, 'Willian022', 'Willian', 'eu@gmail.com', 'bio aqui', 'Masculino', 'images/perfil.jpg');
var user2 = new Usuario(2, 'WillianFAKE', 'Willian Fake', 'eu@gmail.com', 'bio aqui', 'Masculino', 'images/bluezao.jfif');

// Função para postar
function postarFeed() {
    // Obtém o valor do campo de entrada de texto
    var pensamento = document.querySelector('#pensamento').value;

    // Pega o usuário selecionado
    var selectedUserId = document.querySelector('#userSelect').value;

    // Definindo o usuário ativo com base na seleção
    var userAtivo = selectedUserId == '1' ? user1 : user2;

    // Verifica se o campo não está vazio
    if (pensamento.trim() !== "") {
        // Chama o método de postagem do usuário ativo
        userAtivo.postar(pensamento);

        // Limpa o campo de entrada
        document.querySelector('#pensamento').value = '';

    } else {
        // Alerta caso o campo de texto esteja vazio
        alert('Por favor, escreva algo antes de postar.');
    }
}
