"use strict";
//Generics
//uso de tipos mais genéricos, por exemplo any
//quando vc usa any, acaba perdendo algumas verificações
//ex:
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length); //4
console.log(echo(27).length); //não gera erro, mas retorna undefined
console.log(echo({ nome: 'João', idade: 27 }).length); //undefined
//no momento que começarmos a usar generics, o compilador irá informar que
//vc está tentando acessar alguma coisa que não pertece ao number, no exemplo echo(27)
//criando funções com generics
//primeiro precisa definir que a função tem o tipo generics
//usando < > 
//entre < > vc pode colocar o tipo T, y, o que quiser
//por enquanto é um tipo generico e depois vamos especificar esse tipo7
//e o objeto é do tipo T
function echoMelhorado(objeto) {
    return objeto;
}
console.log(echoMelhorado('João').length);
//console.log(echoMelhorado(27).length)//aqui ele dectou que vc passou o tipo t
//que é do tipo number(27) e automaticamente ele assumiu que aqui esse T é um number
//e ele sabe que o number não tem o .length
console.log(echoMelhorado('27').length); //como '27' é um tipo string, ele retorna sem erro
//mas se você indicar que T é do tipo number, assim>
//console.log(echoMelhorado<number>('27').length)//nesse cenário ele subs. o T por number, pq foi especificado que T é number
//tanto o param, quão o retorno passa a ser tipo number
console.log(echoMelhorado({ nome: 'João', idade: 27 }).idade);
console.log(echoMelhorado('Maria').toLocaleLowerCase());
console.log(echoMelhorado('Maria').toLocaleUpperCase());
//usando generics com array
//Generics disponiveis na API
const avaliacoes = [10, 9.3, 7.7];
avaliacoes.push(8.4);
//avaliacoes.push('5.5')
//console.log(avaliacoes)//veio o number 8.4 + a string '5.5'
//(5) [10, 9.3, 7.7, 8.4, "5.5"]
//a partir do momento que eu indico que o tipo generics do array é number
//ele indica o erro
//avaliacoes.push('6.6')//O argumento do tipo '"6.6"' não é atribuível ao parâmetro do tipo 'number'
console.log(avaliacoes);
//outro exemplo
function imprimir(args) {
    args.forEach(elemento => console.log(elemento));
}
imprimir([1, 2, 4, 5]);
imprimir(['a', 'b', 'c']);
imprimir([true, false, 'ab', 10]);
imprimir(['Maria', 'José', '1', '2']); //aqui eu estou garantindo que será um array de tipo string
//tbm tomos ter tipo mais complexos
//como por exemplos tipos objetos
imprimir([
    { nome: 'Ana', idade: 5 },
    { nome: 'Fulano', idade: 4 }
]);
imprimir([
    { nome: 'Ana', idade: 10 },
    { nome: 'Fulano', idade: 11 }
]);
//# sourceMappingURL=generics.js.map