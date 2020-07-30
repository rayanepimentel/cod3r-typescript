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
// function normalComThis() {
//     console.log(this)
// }
// normalComThis() //undefined
// const normalComThisEspecial = normalComThis.bind(2)
//o que eu passar como param. dentro de bind(), sera usado dentro de normalComThis, como se fosse this
//salvando com .bind(2) e chamando normalComThisEspecial
// normalComThisEspecial() // retorna 2
// console.log(this)
// const arrowComThis = () => console.log(this)
// arrowComThis() //this vai ser window
//como faz para descobrir qual this será usado dentro arrow function?
//simples, quem é o this na linha anterior no momento que a function foi definida
//quem é o this antes de const arrowComThis...
//coloque console.log(this) antes da função
//é o mesmo this da função
// const arrowComThisEspecial = arrowComThis.bind({nome: 'Ana'})
// arrowComThisEspecial()
//sera o mesmo this Window
//paramentro padrão:
function contagem(inicio = 3) {
    console.log(inicio);
    while (inicio > 0) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagem();
contagem(5);
function contagem2(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log('Fim');
}
contagem2();
contagem2(3);
//Operador Spread e Rest
//spread ... : é espalhar. Quando vc pega, por ex um array e espalha esse array com param de uma function
//Rest... : quando vc tem um conjunto de param. e que juntar esses param em um array
const numbers = [1, 10, 99, -5, 200];
console.log(Math.max(...numbers));
//ou seja ao usar ... ele vai espalhar, vai pegar cada um dos elementos e passar esses elementos como param para função Max
//nesse caso usamos o spread, pq ele vai espalhar cada elemento
const turmaA = ['João', 'Maria', 'Fernanda'];
const turmaB = ['Fernando', 'Miguel', 'Lorena', ...turmaA];
console.log(turmaB);
//nesse caso usamos rest para juntar todos os elementos de A em B
function retornaArray(arg1, arg2) {
    return [arg1, arg2];
}
const numeros = retornaArray(1, 2); // e se eu quiser passar mais números?
//no caso usaremos o rest, ele vai pegar varios para. e vai jogar tudo no array
console.log(numeros);
function retornaArray2(...args) {
    return args;
}
const numeros2 = retornaArray2(1, 2, 20, 80);
console.log(numeros2);
//esse ...args faz o agrupamento, o rest
console.log(retornaArray2(...numbers, ...retornaArray(1, 2)));
//aqui estamos usando tando o spread para espalhar os numeros e passar cada um pros param. do retonnaArray2
//como estamos usando o rest da própria função retornaArray2
//vc pode misturar mais de um paramento se o ultimo foi rest
//contexto tupla
//rest e spread (tupla)
const tupla = [5, 'abc', false];
function tuplaParam(a, b, c) {
    console.log(`1) ${a} ${b} ${c}`);
}
tuplaParam(...tupla); //usando spread
function tuplaParam2(...params) {
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`);
}
tuplaParam2(...tupla); //usando spread, já que ele espera receber param quebrados
//operador destructuring(array)
//pegar dados dentro de uma estrutura e expor de uma forma mais simples
//sem precisar pegar cada um dos dados e atribuir a eles a uma const
//ou seja vc pode fazer isso em uma única operação
const caracteristicas = ['Motor zzz', 2020];
//manualmente
// const motor = caracteristicas[0]
// const ano = caracteristicas[1]
//usando destructuring
const [motor, ano] = caracteristicas;
console.log(motor, ano);
//o objetivo pe deixar o código mais prático, faz as coisas de uma forma mais rápida
//vc pode fazer assim:
const [cor, numero] = ['azul', 5];
//operador destructuring [cor, numero]             
//array ['azul', 5]
console.log(cor, numero);
//Destructuring(objeto)
const items = {
    nome: 'SSD 4558',
    preco: 200
};
//manualmente
const nomeItem = items.nome;
const precoItem = items.preco;
//Destructuring
const { nome: n, preco } = items;
console.log(n, preco);
//você pode colocar alias, por exemplo no nome, o alias é n
//template string
//``
const usuarioID = 'Suporte';
const notificacaos = '19';
const boasVindas = 'Boas vindas ' + usuarioID +
    ' Notificações: ' + notificacaos;
console.log(boasVindas);
const boasVindas2 = `
Boas vindas ${usuarioID} 
Notificações: ${parseInt(notificacaos) > 9 ? '+9' : notificacaos}
`;
console.log(boasVindas2);
console.log(`${1 + 2}`);
//desafio
/*
 Exercicio 1
var dobro = function(valor) {
    return valor * 2
}
console.log(dobro(10))
 
Exercicio 2
var dizerOla = function (nome) {
    if (nome === undefined) { nome = "Pessoa" }
    console.log("Ola, " + nome)
}
 
dizerOla()
dizerOla("Anna")
 
Exercicio 3
var nums = [-3, 33, 38, 5]
console.log('???')
 
Exercicio 4
var array = [55, 20]
 
console.log(array)
 
Exercicio 5
var notas = [8.5, 6.3, 9.4]
var notas1 = notas[0]
var notas2 = notas[1]
var notas3 = notas[2]
console.log(nota1, nota2, nota3)
 
Exercicio 6
var cientista = {primeiroNome: "Will", experiencia: 12}
var primeiroNome = cientista.primeiroNome
var experiencia = cientista.experiencia
console.log(primeiroNome, experiencia)


*/
//# sourceMappingURL=ecmascript.js.map