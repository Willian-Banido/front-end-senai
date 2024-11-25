class Cliente{
    nome;
    dataNascimento;
    cpf;
    email;
    telefone;
    tipoDeConta;
    saldo;
    depositar(valor){
        if(valor <= 0){

        }
        this.saldo += valor
    }
    pix(valor){
        if (this.saldo < valor){
            
        }else{
            this.saldo -= valor
        }
    }
} 

//argumento - é valor passado
//parametro - é a palavra que vai salvar o argumento

var cliente1 = new Cliente
cliente1.nome = 'Leo'
cliente1.dataNascimento = '11/03/1998'
cliente1.cpf = 888888888-88
cliente1.email = 'leozingodgamer@gmail.com'
cliente1.saldo = 0
cliente1.pix()
