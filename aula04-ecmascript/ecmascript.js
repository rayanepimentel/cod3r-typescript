"use strict";
//let e const
console.log(seraQuePode);
var seraQuePode = '?'; // hoisting = elevar. As variaveis que vc definir como var elas são elevadas
//ou seja o seraQuePode será antes do console, e após o console, ela será chamada
//por isso é undefined e no compilador ainda dará problema
//e se usarmos let
//console.log(seraQuePode2)
//let seraQuePode2
//dará erro pq let não faz hoisting
//mesmo com erro, ainda será exibido undefined
//mas pq? 
//pq no js gerado let estará como var
//pq isso acontece?
//por causa do target: "target" : "es5" e não es6
//para termos os recursos do es6, mude o target para es6
//mas agora não retornou undefined e sim deu erro
//a varivavel não foi definida
//nesse caso é preciso colocar let antes do console
let seraQuePode3;
console.log(seraQuePode3);
//retornou undefined
let estaFrio = true;
if (estaFrio) {
    var acao = 'Colocar o casaco';
}
console.log(acao);
//uma variavel var ela só tem dois tipos de escopo:
//Ou ela é global ou ela é uma variavel local dentro de uma função
//e com let?
//não vai acontecer, pq o let tem tbm o escopo de bloco
//nesse caso o console.log precisa tá dentro do bloco
let temSol = true;
if (temSol) {
    let acao1 = 'Tem praia!';
    console.log(acao1);
}
//const
const cpf = '123456789';
//como é const eu não consigo alterar o valor da const
//cpf = '987456321'
console.log(cpf);
//mas se vc mudar target para es5, ele vai fazer a mudança da const
//pq es5 não tem const, e sim var
//let e const
//tanto let como const tem escopo de bloco
//global, função e bloco
//Arrow Function
//função anonima, não tem como chama-la depois
//vc pode pegar um function anonima e atribuir uma variavel ou criar uma função com nome
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
//alem disso podemos criar uma arrow function
//é sempre anonima
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(10, 2));
//tbm pode colocar que o retorno será : number => n1 - n2
//nesse caso não precisou colocar return
//sintaxe reduzida
//this
//function sem parametro
const saudacao = () => console.log('Olá');
saudacao();
//com tem 1 parametro
const falarCom = (pessoa) => console.log('Olá ' + pessoa);
falarCom('João');
//retorna Olá João, mas pessoa fica com erro.
//como é 1 paramentro não precisa colocar entre ()
//mas se vc quiser atribuir pessoa : string, não funciona, é preciso colocar entre ()
//uso do this
//ele pode variar quando vc tem uma function
//# sourceMappingURL=ecmascript.js.map