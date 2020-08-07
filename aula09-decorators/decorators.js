"use strict";
//Decorators
//class inicalmente nada
//e sabemos que a class é na verdade uma function typeof Eletrodomestico
//@logarClasse
//@logarClasseSe(true)
// @decorator('Teste', 123)
// class Eletrodomestico {
//     constructor() {
//         console.log('novo....')
//     }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// }
//console.log(typeof Eletrodomestico)//é uma função
//o decorator na verdade é uma função
//criar um function, o nome do decorator logarClasse
//e o logarClasse será referenciado acima da class com @nomedele
//e cmo param. logarClasse recebe uma função, que pode ser qualquer nome
function logarClasse(xuxu) {
    console.log(xuxu); //aqui sera exatamente a class Eletrodomestico
}
//recapitulando:
//criamos uma função
//essa função será chamada com decorator, com param. a função(class Eletro...) que vc decorou
//esse decorator só será chamado quando a classe for carregada
//Decorator Factory
//uma função que retorna um decorator
function logarClasseSe(valor) {
    return valor ? logarClasse : null;
}
//ou
function decorator(a, b) {
    return function (_) {
        console.log(a + ' ' + b);
    };
}
// @logarClasse
// @logarClasseSe(true)
// @decorator('Teste', 123)
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo....');
    }
};
Eletrodomestico = __decorate([
    imprimivel
], Eletrodomestico);
function imprimivel(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
//new Eletrodomestico().imprimir()//imprime, mas fica reclamando
//umas das possibilidades para corrigir é usar cast
new Eletrodomestico().imprimir();
//ou criando uma interface
new Eletrodomestico().imprimir();
//ou
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
//# sourceMappingURL=decorators.js.map