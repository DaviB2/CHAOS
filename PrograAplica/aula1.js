const prompt = require(`prompt-sync`)();

// Modelo de atributos e funções para criação de um objeto
class Cliente{
    nome; // Atributo
    idade;
    cpf;
    agencia;
}

// Objeto que possui as informações de classe de forma individual
let cliente = new Cliente();

cliente.nome = prompt("DIgite o nome do cliente: ");
cliente.idade = 17;
cliente.cpf = "999.999.999.-01";
cliente.agencia = 101010;

console.log(cliente);