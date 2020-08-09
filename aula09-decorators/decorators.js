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
function logarObjeto(gatinho) {
    console.log('carregado o decorator  uma única vez');
    //vai retornar uma class anonima, que não tem nome. Mas que herda o gatinho, com constructor que foi definido
    return class extends gatinho {
        constructor(...args) {
            //obrigatoriamente preciso chamar o super
            //chamando o super ele vai no constructor da class eletrodomestico
            //claro se a classe estiver decorada com logarObjeto
            console.log('Antes de chamar o constructor super');
            super(...args);
            console.log('Depois de chamar o constructor super');
        }
    };
}
let Eletrodomestico = class Eletrodomestico {
    constructor() {
        console.log('novo - constructor class Eletrodomestico');
    }
};
Eletrodomestico = __decorate([
    logarObjeto,
    imprimivel
], Eletrodomestico);
function imprimivel(Construtor) {
    Construtor.prototype.imprimir = function () {
        console.log(this);
    };
}
//new Eletrodomestico().imprimir()//imprime mas mostra eeeo
//outra maneira de fazer para evitar esse erro:
//(<any>new Eletrodomestico()).imprimir()//não exibiu o erro
//ou criar uma interface
new Eletrodomestico().imprimir(); //com opcional
//ou com validações
const eletro = new Eletrodomestico();
eletro.imprimir && eletro.imprimir();
//Múltiplos Decorators
//é possível passar mais de um decorators
//ex
/*
@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo - constructor class Eletrodomestico')
    }

}
*/
//Desafio 
// Desafio Decorator perfilAdmin
const usuarioLogado = {
    nome: 'Guilherme Filho',
    email: 'guigui@gmail.com',
    admin: true
};
let MudancaAdministrativa = class MudancaAdministrativa {
    critico() {
        //se o usuario não estiver logado, ou não for administrador
        //usuarioLogado  = null ou admin: false
        console.log('Algo crítico foi alterado!');
    }
};
MudancaAdministrativa = __decorate([
    perfilAdmin
], MudancaAdministrativa);
new MudancaAdministrativa().critico();
function perfilAdmin(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            if (!usuarioLogado || !usuarioLogado.admin) {
                throw new Error(`O usuário ${usuarioLogado.email} não tem permissão`);
            }
        }
    };
}
//Decorator método
class contaCorrente {
    constructor(saldo) {
        this.saldo = saldo;
    }
    sacar(valor) {
        if (valor <= this.saldo) {
            this.saldo = valor;
            return true;
        }
        else {
            return false;
        }
    }
    getSaldo() {
        return ` Seu saldo é R$${this.saldo}`;
    }
}
__decorate([
    congelar
], contaCorrente.prototype, "sacar", null);
__decorate([
    congelar
], contaCorrente.prototype, "getSaldo", null);
const cc = new contaCorrente(100);
cc.sacar(50);
console.log(cc.getSaldo());
// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }
console.log(cc.getSaldo());
//object.freeze()
function congelar(alvo, nomeMetodo, descritor) {
    console.log(alvo); //nome da class
    console.log(`Nome do metodo: ${nomeMetodo}`);
    console.log(descritor);
    descritor.writable = false;
}
//# sourceMappingURL=decorators.js.map