
interface Humano {
    nome: string
    idade?: number //com ? eu estou dizendo que ele é opcional
    [prop: string]: any // atributo dinamico. Eu não sei o nome e nem o tipo
    saudar(sobrenome: string): void
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Maria'
}

const pessoa: Humano = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//nesse caso fica claro que temos uma duplicação  { nome: string }
//alem de termos pssibilidade de usarmos type alias, podemos usar interfaces


//saudarComOla({nome: 'Jonas', idade: 27, xyz: true })
//nesse contexto não é possivel, ele vai ficar reclamando que esse obj
//não é derente a interface Humano, pq tem o atributo idade que não tá dentro de Humano
//posso passar o atributo idade e dizer que ele é opcional
//imagine que eu queira add um outro atributo que eu não sei o nome
//saudarComOla({nome: 'Jonas', idade: 27, xyz: true }) xyz: true
//nesse caso eu tbm tenhoa uma sintaxe para dizer que o nome é dinamico, o nome da propriedade, atributo do obj é dinamico
//para isso usamos um par de [] -> [prop: string]: any
//

//Interfaces e Módulos
pessoa.saudar('Teste')

//interfaces  e class
//quando vc diz que a class inplements a interface
//essa class precisa respeitar o que vc definido na interface 

class Cliente implements Humano {
    nome: string 
    ultimaCompra: Date = new Date
    numeroPedido: number
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

const meuCliente = new Cliente()
meuCliente.nome = 'Rama'
saudarComOla(meuCliente)
meuCliente.saudar('Narayana')
console.log(meuCliente.ultimaCompra)
meuCliente.numeroPedido = 12
console.log(meuCliente.numeroPedido)


//interfaces e tipo função

interface FuncaoCalculo {
    (a: number, b: number): number
}

let potencia: FuncaoCalculo

potencia = function(base: number, exp: number): number {
    //Math.pow)3,10
    //3 ** 10
    return Array(exp).fill(base).reduce((t, a) => t * a)
    //a quantidade de elemento de array(baseado no número de exp.)
    //ou seja o exp é 10, vou ter um array com 10 elem
    //eu vou preencher esse array com o valo da base
    //ou seja a base é 3, vou tem 10 vez o número 3 (3,3,3,3,3,3,3,3,3,3)
    //com reduce, eu consigo multiplicar cada um dos elems. do array
    
}

console.log(potencia(3, 10))
console.log(Math.pow(3, 10))
console.log(3 ** 10)

//função que verificar se o email é valido

interface VerificaIdade {
    (idade: number): void
}

let Habilitacao: VerificaIdade

Habilitacao = function(idade:number) {
    if(idade >= 18) {
        return 'Pode dirigir'
    }else {
        return `Daqui há ${18 - idade} você pode dirigir`
    }
}

console.log(Habilitacao(18))

let votar = function(i:number) {
    if(i >= 18) {
        return 'É obrigado por lei a votar'
    }if(i < 16) {
        return `Não pode votar. Daqui ${16 - i} anos você pode votar, mas não é obrigado.
        Mas daqui há ${18 - i} anos você é obrigado a votar`
    }else(i == 16 || 17) ;{
        return `Pode votar mais não é obrigado. 
        Será obrigado daqui há ${18 - i} anos`
    }
}

console.log(votar(18))


//Herença

interface A {
    a(): void 
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class RealA implements A {
    a(): void {}
}

class RealB implements A, B {
    a(): void {}
    b(): void {}
}

class RealABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}


function teste(b: B) {}

teste(new RealABC)

console.log(teste)

abstract class AbstrataABD implements A, B {
    //vc é obrigado declarar a e b
    a(): void {}
    b(): void {}

    abstract d(): void
}

//interface para estender obj


const x1 = 2
const y1 = 3
const z1 = 4

// console.log(x1)
// console.log(y1)
// console.log(z1)

interface  Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

x1.log()
y1.log()
z1.log()

const cli = { 
    nome: 'XXX', toString() { 
        return this.nome 
    }
}
cli.log()