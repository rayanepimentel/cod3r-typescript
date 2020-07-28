"use strict";
// string
var nome = 'João';
console.log(nome);
//nome = 28
//vai ficar marcado que tem um erro no código
//pq tipo 28, não é uma string
//mas não colocamos nenhuma indicação que é do tipo string
//os tipos são inferidos, ou seja no momento que você inicializa a var
//dar um valor para ela, o compilador vai detectar
//o tipo de valor que foi atribuido na variavel nome é string
//significa que nome passa a ser string de forma implicita.
//por mais que vc não tenha dido que era tipo string
//o fato de ter passado o valor em forma de string, fez com que ele entendesse
//que a variavel nome é tipo string
//primeira observação
//por mais que vc tenha escrevido um código puramente em js
//sem ter falado o tipo e nada, o compilador vai inferir esse valor
//e no momento que vc informa um tipo diferente, ele vai reclamar
//numbers
var idade = 5;
//idade = 'Ana'
idade = 27.5;
//assim como no js, em .ts vc pode ter tanto num interios como flutuantes
console.log(idade);
//boolean
var possuiHobbies = false;
//possuiHobbies = 1 
//erro
console.log(possuiHobbies);
//ao executar ele vai mostrar o valor 1
//para isso não acontecer podemos dizer ao compilador que ele não gere
//arquivo .js quando acontecer um erro
//em todos os casos declaramos a variavel e inicializamos
// let nome = 'João'
//se você não iniciar a variavel o compilador não irá fazer essa inferencia automaticamente
//tipos explícitos
var minhaIdade; //declarei e não inicializei
minhaIdade = 5; //nesse caso eu não tenho um number
//nesse caso eu tenho um tipo dinâmico
console.log(typeof minhaIdade); //number
minhaIdade = 'idade é 5'; //sem nenhum erro
console.log(typeof minhaIdade); //string
//poderiamos colocar tipo any
var myAge; //ou seja pode ter number, string, boolean, objeto, array
myAge = 6;
console.log(typeof myAge);
myAge = 'minha idade 5';
console.log(typeof myAge);
myAge = true;
console.log(typeof myAge);
//Ou seja para passarmos o tipo, declamos a variamos e passamo qual o tipo
var myName;
var age;
var hobbies;
//array
var myHobbies = ['Cozinhar', 'Dança']; //um array de string
console.log(myHobbies[0]);
console.log(typeof myHobbies); //ele vai inferir como object
//myHobbies = [100, 200]// continua sendo array, mas não é string
//umas das coisas que podemos fazer é passar a let como array
//podemos coloca que queremos qualquer tipo de array
var myHobbies2 = ['Cozinhar', 'Dança'];
myHobbies2 = [100, 200];
//myHobbies2 = 100 //erro pq não é um array
