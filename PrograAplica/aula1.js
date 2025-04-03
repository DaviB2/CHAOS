const prompt = require(`prompt-sync`)();

// Modelo de atributos e funções para criação de um objeto
class Cliente{
    #nome; // Atributo
    idade;
    cpf;
    agencia;

    //Retorna uma string com os dados/atributos
    getDescricao(){
        return "Nome: " + this.#nome + ", Idade: " + this.idade;
    }

    //Obtém nome
    getNome(){
        return this.#nome;
    }

    // Preenche nome
    setNome(value){
        this.#nome = value;
    }
}

// Objeto que possui as informações de classe de forma individual
let cliente = new Cliente();

cliente.setNome(prompt("DIgite o nome do cliente: "));
cliente.idade = 17;
cliente.cpf = "999.999.999.-01";
cliente.agencia = 101010;

console.log(cliente);
console.log(cliente.getDescricao());