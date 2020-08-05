"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Maria';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//nesse caso fica claro que temos uma duplicação  { nome: string }
//alem de termos pssibilidade de usarmos type alias, podemos usar interfaces
//saudarComOla({nome: 'Jonas', idade: 27, xyz: true })
//nesse contexto não é possivel, ele vai ficar reclamando que esse obj
//não é derente a interface Humano, pq tem o atributo idade que não tá dentro de Humano
//posso passar o atributo idade e dizer que ele é opcional
//imagine que eu queira add um outro atributo que eu não sei o nome
//saudarComOla({nome: 'Jonas', idade: 27, xyz: true }) xyz: true
//nesse caso eu tbm tenhoa uma sintaxe para dizer que o nome é dinamico, o nome da propriedade, atributo do obj é dinamico
//para isso usamos um par de [] -> [prop: string]: any
//
//Interfaces e Módulos
pessoa.saudar('Teste');
//interfaces  e class
//quando vc diz que a class inplements a interface
//essa class precisa respeitar o que vc definido na interface 
class Cliente {
    constructor() {
        this.ultimaCompra = new Date;
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Rama';
saudarComOla(meuCliente);
meuCliente.saudar('Narayana');
console.log(meuCliente.ultimaCompra);
meuCliente.numeroPedido = 12;
console.log(meuCliente.numeroPedido);
//# sourceMappingURL=interfaces.js.map