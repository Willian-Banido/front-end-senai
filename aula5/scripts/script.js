// PUSH 'EMPURRAR' = ADICIONAR NA LISTA

//UNSHIT - ADICIONAR NO COMEÇO DA LISTA

//POP - REMOVER O ULTIMO

//SHIFT - REMOVER O PRIMEIRO

//SPLICE - REMOVE, ADICIONA E ATUALIZA

let fruta = ['melancia', 'Tomate', 'Melão', 'Maracuja', 'Mexirica'];

fruta.forEach(cadaFruta =>{
    document.getElementById('resposta').innerHTML += `
    ${cadaFruta} <br>
    `
});