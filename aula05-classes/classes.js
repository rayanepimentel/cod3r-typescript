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
    acelar() {
        return this.alterarVelocidade(5);
    }
    frear() {
        return this.alterarVelocidade(-5);
    }
}
const carro1 = new Carro('Ford', 'Ka', 185);
//console.log(carro1.acelar())
Array(10).fill(0).forEach(() => carro1.acelar());
console.log(carro1.acelar());
Array(5).fill(0).forEach(() => carro1.frear());
console.log(carro1.frear());
//# sourceMappingURL=classes.js.map