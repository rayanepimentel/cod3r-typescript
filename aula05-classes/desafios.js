"use strict";
//ex 1
//substituir a forma padrão de obj por class
//ex 2 herança 
//crie uma class e depois crie outra
//ex 3
//getters e setters
// Exercício 1 - Classe
// function Moto(nome) {
//     this.nome = nome
//     this.velocidade = 0
//     this.buzinar = function() {
//         console.log('Toooooooooot!')
//     }
//     this.acelerar= function(delta) {
//         this.velocidade = this.velocidade + delta
//     }
// }
// var moto = new Moto('Ducati')
// moto.buzinar()
// console.log(moto.velocidade)
// moto.acelerar(30)
// console.log(moto.velocidade)
class Moto {
    constructor(nome, velocidade = 0) {
        this.nome = nome;
        this.velocidade = velocidade;
    }
    buzinar() {
        return `tooooooot!`;
    }
    acelerar(delta) {
        return this.velocidade = this.velocidade + delta;
    }
}
const moto = new Moto('Ducati');
console.log(moto.buzinar());
console.log(`v1 ${moto.velocidade}`);
console.log(moto.acelerar(20));
console.log(`v2 ${moto.velocidade}`);
// Exercício 2 - Herança
// var objeto2D = {
//     base: 0,
//     altura: 0
// }
// var retangulo = Object.create(objeto2D)
// retangulo.base = 5
// retangulo.altura = 7
// retangulo.area = function() {
//     return this.base * this.altura
// }
// console.log(retangulo.area())
class Objeto2D {
    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;
    }
}
class ObjetoN extends Objeto2D {
    area() {
        return this.base * this.altura;
    }
}
const Obj1 = new ObjetoN(5, 2);
console.log(Obj1.area());
// Exercício 3 - Getters & Setters
// var estagiario = {
//     _primeiroNome: ''
// }
// Object.defineProperty(estagiario, 'primeiroNome', {
//     get: function () {
//         return this._primeiroNome
//     },
//     set: function (valor) {
//         if (valor.length >= 3) {
//             this._primeiroNome = valor
//         } else {
//             this._primeiroNome = ''
//         }
//     },
//     enumerable: true,
//     configurable: true
// })
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Le'
// console.log(estagiario.primeiroNome)
// estagiario.primeiroNome = 'Leonardo'
// console.log(estagiario.primeiroNome)
class Estagiario {
    constructor() {
        this._primeiroNome = ' ';
    }
    get primeiroNome() {
        return this._primeiroNome;
    }
    set primeiroNome(valor) {
        if (valor.length >= 3) {
            this._primeiroNome = valor;
        }
        else {
            this._primeiroNome = '';
        }
    }
}
const estagiario1 = new Estagiario;
console.log(estagiario1.primeiroNome); // ''
estagiario1.primeiroNome = 'Le';
console.log(estagiario1.primeiroNome); //''
estagiario1.primeiroNome = 'Maria';
console.log(estagiario1.primeiroNome); // Maria
//# sourceMappingURL=desafios.js.map