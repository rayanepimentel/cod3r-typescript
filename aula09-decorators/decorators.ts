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





// }

//console.log(typeof Eletrodomestico)//é uma função

//o decorator na verdade é uma função
//criar um function, o nome do decorator logarClasse
//e o logarClasse será referenciado acima da class com @nomedele
//e cmo param. logarClasse recebe uma função, que pode ser qualquer nome
// function logarClasse(constructor: Function) {
//     console.log(constructor)//aqui sera exatamente a class Eletrodomestico
// }

//recapitulando:

//criamos uma função
//essa função será chamada com decorator, com param. a função(class Eletro...) que vc decorou
//esse decorator só será chamado quando a classe for carregada


//Decorator Factory
//uma função que retorna um decorator


// function logarClasseSe(valor: boolean) {
//     return valor ? logarClasse : null
// }

//ou

// function decorator(a: string, b: number) {
//     return function(_: Function): void {
//         console.log(a + ' ' + b)
//     }
// }


//Alterando Construtor com Decorator de Class

//@logarClasse
//@logarClasseSe(true)
//@decorator('Teste', 123)
// @logarObjeto
// class Eletrodomestico {
//     constructor() {
//         console.log('novo - constructor class Eletrodomestico')
//     }

// }

type Construtor = {new(...args: any[]): {}} 

function logarObjeto(gatinho: Construtor) {
    console.log('carregado o decorator  uma única vez')
    //vai retornar uma class anonima, que não tem nome. Mas que herda o gatinho, com constructor que foi definido
    return class extends gatinho {
        constructor(...args: any[]) {
            //obrigatoriamente preciso chamar o super
            //chamando o super ele vai no constructor da class eletrodomestico
            //claro se a classe estiver decorada com logarObjeto
            console.log('Antes de chamar o constructor super')
            super(...args)
            console.log('Depois de chamar o constructor super')
        }
    }
}

//no momento que function logarObjeto() é carregado ele substitui a class de Eletrodomestico
//pela class anonima class extends gatinho {....}

// new Eletrodomestico()
// new Eletrodomestico()




//Adicionando Método com Decorator de Class

interface Eletrodomestico {
    imprimir?(): void
}

@logarObjeto
@imprimivel
class Eletrodomestico {
    constructor() {
        console.log('novo - constructor class Eletrodomestico')
    }

}

function imprimivel(Construtor: Function) {
    Construtor.prototype.imprimir = function() {
        console.log(this)
    }
}

//new Eletrodomestico().imprimir()//imprime mas mostra eeeo
//outra maneira de fazer para evitar esse erro:
//(<any>new Eletrodomestico()).imprimir()//não exibiu o erro
//ou criar uma interface
new Eletrodomestico().imprimir()//com opcional
//ou com validações
const eletro = new Eletrodomestico()
eletro.imprimir && eletro.imprimir()


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
}


@perfilAdmin
class MudancaAdministrativa {
    critico() {
        //se o usuario não estiver logado, ou não for administrador
        //usuarioLogado  = null ou admin: false
        console.log('Algo crítico foi alterado!')
    }
}
 
new MudancaAdministrativa().critico()

function perfilAdmin<T extends Construtor>(constructor: T) {
   return class extends constructor {
       constructor(...args: any[]) {
           super(...args)
           if(!usuarioLogado || !usuarioLogado.admin) {
               throw new Error(`O usuário ${usuarioLogado.email} não tem permissão`)
           }
       }
   }
}






//Decorator método

class contaCorrente {
    @naoNegativo //nunca será negativo
    private saldo: number

    constructor(saldo: number) {
        this.saldo = saldo
    }
    
    @congelar
    sacar(valor: number) {
        // if(valor <= this.saldo) {
            this.saldo -= valor
        //     return true
        // } else {
        //     return false
        // }
    }

    @congelar
    getSaldo() {
        return ` Seu saldo é R$${this.saldo}`
    }
}

const cc = new contaCorrente(100)
cc.sacar(90)
console.log(cc.getSaldo())

// cc.getSaldo = function() {
//     return this['saldo'] + 7000
// }

console.log(cc.getSaldo())



//object.freeze()
function congelar(alvo: any, nomeMetodo: string,
    descritor: PropertyDescriptor) {
        console.log(alvo)//nome da class
        console.log(`Nome do metodo: ${nomeMetodo}`)
        console.log(descritor)
        descritor.writable = false
}


//atributo
//sera acima de saldo

function naoNegativo(alvo: any, nomePropriedade: string) {
    //excluir a propriedade e colocar outra
    delete alvo[nomePropriedade]
    Object.defineProperty(alvo, nomePropriedade, {
        get: function(): any {
            return alvo['_' + nomePropriedade]
        },
        set: function(valor: any): void {
            if(valor < 0 ) {
                throw new Error('Saldo Inválido')
            } else {
                alvo['_' + nomePropriedade] = valor
            }
        }
    })
}

cc.sacar(12)
console.log(cc.getSaldo())