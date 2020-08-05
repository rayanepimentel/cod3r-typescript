"use strict";
function saudarComOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Maria';
}
const pessoa = {
    nome: 'João',
    idade: 27
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//nesse caso fica claro que temos uma duplicação  { nome: string }
//alem de termos pssibilidade de usarmos type alias, podemos usar interfaces
//# sourceMappingURL=interfaces.js.map