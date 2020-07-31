"use strict";
//criar uma classe simples
class Data {
    //constrctor(e vc vai receber como param aquilo que vc wuer usar para contruir o obj)
    constructor(dia = 1, mes = 1, ano = 1970) {
        //e dentro do constructo vou inicicializar essas variaveis que pertece a instancia
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        //ou seja o constructor recebe os param e inicializando os atributos de instancia 
    }
}
//uma vez defido o construtor, vamos criar o obj
const aniversario = new Data(3, 11, 1991);
console.log(aniversario.dia);
aniversario.dia = 4;
console.log(aniversario.dia);
console.log(aniversario);
//tem como passar somente dia em new data? tem
//mas vamos usar o recurso do param padrão
//por exemplo dia: number recebe 1
const casamento = new Data; // posso imitir os "()"
casamento.ano = 2017;
console.log(casamento);
class DataEsperta {
    constructor(dia = 1, mes = 1, ano = 1970) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
}
const aniversario2 = new DataEsperta(3, 11, 1991);
console.log(aniversario2.dia);
aniversario2.dia = 4;
console.log(aniversario2.dia);
console.log(aniversario2);
const casamento2 = new DataEsperta; // posso imitir os "()"
casamento2.ano = 2017;
console.log(casamento2);
//desafio Classe produto
//Aributos: nome, preco e desconto
//criar o constructor
//obs1: Desconto é opcional (valor padrão)
//obs2: criar dois produtos passando dois e três params
class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    //desafio
    //criar método precoComDesconto
    //quais são os param e o retorno?
    //alterar método resumo p/ mostrar o preço com desconto
    precoComDesconto() {
        return this.preco * (1 - this.desconto);
    }
    resumo() {
        return `
        ${this.nome} custa R$${this.precoComDesconto()} (${this.desconto * 100}% off)
        `;
    }
}
const telefone = new Produto('Xiaomi', 1200);
console.log(telefone.resumo());
const computador = new Produto('Dell', 2500, 0.9);
console.log(computador.resumo());
//modificadores de acesso
class Carro {
    constructor(marca, modelo, velocidadeMaxima = 200) {
        this.marca = marca;
        this.modelo = modelo;
        this.velocidadeMaxima = velocidadeMaxima;
        this.velocidadeAtual = 0;
    }
    alterarVelocidade(delta) {
        const novavelocidade = this.velocidadeAtual + delta;
        const velocidadeValida = novavelocidade >=
            0 && novavelocidade <= this.velocidadeMaxima;
        if (velocidadeValida) {
            this.velocidadeAtual = novavelocidade;
        }
        else {
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
        }
        return this.velocidadeAtual;
    }
    acelerar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
//console.log(carro1.acelar())
Array(10).fill(0).forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
Array(5).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
//Herança
//capacidade de reusar código
//composição é mais frquente que herança
//composição = carro tem 01 motor/ um carro tem algumas portas
//composiçao = xxx tem um yyy
//herança = xxx é um yyy
//herança = Ferrari é um carro
//class vai herdar os comportamentos da class carro
//extends
class Ferrari extends Carro {
    acelarar() {
        return this.alterarVelocidade(20);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const f40 = new Ferrari('Ferrari', 'F40', 424);
//no momento que eu instancie a Ferrari, posso usar começar a usar tanto os comportamentos como os atributos
console.log(`${f40.marca} ${f40.modelo}`);
//chamar o metodo acelera e frear
console.log(f40.acelerar());
console.log(f40.frear());
console.log(f40.acelerar());
console.log(f40.acelerar());
//mas a ferrari não acelera ou freia com carro normal
//nesse caso podemos sobrescrever a acelerar e frear
//e acelerar colocamos 20 e frear -15
//mas nesse caso deu um problema return this.alterarVelocidade(5)
//pq por padrão tantos os métodos e atributos privados não são transmitidos por herença
//podemos ter acesso a esses métodos, mas não altera-los
//pqo alterarVelocidade é private
//nesse caso é preciso trocar o private por protected em alterarVelocidade
//com protected será transmitido por herança 
//resumindo
//public = visivel para todo mundo
//private = fica visivel apenas dentro da class
//proteced = além de visivel dentro da class tbm é transmitido por herança
//criando nova herança 
//acrescentando um constructor já que a marca sempre será BMW
//no constructor eu vou passar o modelo e a velocidademaxima
//dentro do constructor eu preciso chamar o const. da classe pai
//a chamada do super faz a invocação do constr. da class pai
//e o const. da classe pai recebe 3 param.
//e na chamada do super eu vou passar o que eu for usar do const, da class pai
//vou passar a marca, que sempre será bmw e o modelo e velocidademaxima
//
class Bmw extends Carro {
    constructor(modelo, velocidadeMaxima) {
        super('BMW', modelo, velocidadeMaxima);
    }
    acelarar() {
        return this.alterarVelocidade(25);
    }
    frear() {
        return this.alterarVelocidade(-15);
    }
}
const serie = new Bmw('s18', 324);
console.log(`${serie.marca} ${serie.modelo}`);
//Getters e Setters
class Pessoa {
    constructor() {
        this._idade = 0;
    }
    get idade() {
        return this._idade;
    }
    set idade(valor) {
        if (valor >= 0 && valor <= 120) {
            this._idade = valor;
        }
    }
}
const pessoa1 = new Pessoa;
pessoa1.idade = 10; //set
console.log(pessoa1.idade); //get
pessoa1.idade = -3;
console.log(pessoa1);
//# sourceMappingURL=classes.js.map