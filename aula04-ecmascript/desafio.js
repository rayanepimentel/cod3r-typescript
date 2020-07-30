"use strict";
// Exercicio 1
const dobro2 = (valor) => valor * 2;
console.log(dobro2(15));
// Exercicio 2
const dizerOla = function (nome = 'Pessoa') {
    console.log(`Olá ${nome}`);
};
dizerOla();
dizerOla("Anna");
// Exercicio 3
const nums = [-3, 33, 38, 5];
console.log(Math.min(...nums));
// Exercicio 4
const array = [55, 20]; //posso passar aqui ...nums
array.push(...nums);
console.log(array);
// Exercicio 5
const notax = [8.5, 6.3, 9.4];
// var notas1 = notax[0]
// var notas2 = notax[1]
// var notas3 = notax[2] 
// console.log(notas1, notas2, notas3)
const [notas1, notas2, notas3] = notax;
console.log(notas1, notas2, notas3);
// Exercicio 6
const cientista = {
    primeiroNome: "Will",
    experiencia: 12
};
// var primeiroNome = cientista.primeiroNome
// var experiencia = cientista.experiencia
// console.log(primeiroNome, experiencia)
const { primeiroNome: n1, experiencia: e } = cientista;
console.log(n1, e);
//# sourceMappingURL=desafio.js.map