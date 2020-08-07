"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Decorators
//class inicalmente nada
//e sabemos que a class é na verdade uma function typeof Eletrodomestico
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo....');
    }
};
Eletrodomestico = __decorate([
    logarClasse
], Eletrodomestico);
//console.log(typeof Eletrodomestico)//é uma função
//o decoration na verdade é uma função
//criar um function, o nome do decoration logarClasse
//e o logarClasse será referenciado acima da class com @nomedele
//e cmo param. logarClasse recebe uma função, que pode ser qualquer nome
function logarClasse(xuxu) {
    console.log(xuxu); //aqui sera exatamente a class Eletrodomestico
}
//recapitulando:
//criamos uma função
//essa função será chamada com decoration, com param. a função(class Eletro...) que vc decorou
//# sourceMappingURL=decorators.js.map