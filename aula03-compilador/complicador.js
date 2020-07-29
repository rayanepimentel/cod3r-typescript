"use strict";
//mesmo quando existe um erro no ts, o js é gerado
//como evitar isso?
//dento do arquivo de configuração conseguimos barrar a compilação quando tiver um erro
var canal = 'Gaveta';
var inscritos = 610234;
//para gerar erro
//canal = inscritos 
console.log(canal);
//mesmo com erro ele consegue exibir a quantidade de inscritos
//msg de erro:
// error TS2322: Type 'number' is not assignable to type 'string'.
//9 canal = inscritos
//no arquivo de configuração
//crie uma propriedade:
//"noEmitOnError": true,
//para ele não emitir quando tiver um erro
//se você apagar o compilador.js ele vai mostrar o erro na pagina
console.log("Canal = " + canal);
//ele exibi o erro e não deixa compilar
//ao comentar a linha 9 irá aparecer Canal = Gaveta
//produzindo outro erro, apague o compilador.js
//let nome = 'Pedro'
//pq ele não atribuiu nome a uma string?
// mesmo colocando let nome: string, ainda assim fica com erro
//pq ela foi declada na no aquivo tipos.ts
//e agora estou declarando novamente em compilador.ts
//pq? 
//pq isso tudo tá dentro do mesmo escopo index.html
//no mesmo contexto
//a possilibidade de usar nome, é não declarar como variável
nome = 'Pedro';
console.log("Nome = " + nome);
//Alterando o target
//target informa a versão do js. quando copilado.
//por padrão ele vem es5
//"target": "es5", 
//vamos atualizar para es6
//diferença:
//por exemplo lá no tipo.ts let nome
// no tipo.js tá var nome
//tá var pq na versão es5 não tinha let
//alterando para  "target": "es6", 
//podemos ver o que era var, passar a ser let
//mas pode deixar na versão padrão
