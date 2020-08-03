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
//membros estáticos
//atributo ou métodos pertencem a class e não a instancia
//atributos e metodos estaticos
class Matematica {
    static areCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica.PI = 3.1416;
//const m1 = new Matematica()
//m1.PI = 4.2
console.log(Matematica.areCirc(4));
//Membros estáticos
//pertece a class e não a instância
//ex:
class Prod {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}
//objetos
const prod1 = new Prod('Caneta', 3);
console.log(prod1);
const prod2 = new Prod('Lápis', 2);
//vc pode ter vários N produtos, com determinado nome e preço
const prodN = new Prod('xxxx', 0);
//o que diferencia uma instância da outra?
//cada instancia gerada vai ter os mesmos atributos
//caso você tenha método, todos os objetos tbm terão
//o que vai diferencia são os atributos
//cada um tem seu próprio valor(nome, preco) associado ao atributo
//quando vc usa a palavra static
//vc estar trocando esse valor que pertece a instancia
//vc estar colocando isso diretamente associado a class
//ou seja quantas class prod eu preciso ter? apenas 01
//apartir dessa class, usando operador new vc pode criar quantos produtos vc quiser
//quando o atributo é static, significa que o seu valor est associado a class
//e não a cada uma das instâncias
//ex:
class Matematica1 {
    static areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
Matematica1.PI = 3.1416;
// const m1 = new Matematica1()
// m1.PI = 4.2
// console.log(m1.areaCirc(4))
//usando static eu não preciso mais instanciar
//eu simplesmente acesso nome da class.metodo
console.log(Matematica1.areaCirc(4));
//com static vc tá no nível da class e não disponivel para instancias
//Class Abstrata
//class perde a habilidade de ser isntanciada.
class mat {
    constructor() {
        this.PI = 3.1416;
    }
    areaCirc(raio) {
        return this.PI * raio * raio;
    }
}
//console.log(new x(4))
//uma class abstract não pode ser instanciada
//pq criar uma class que não pode instanciada?
//serve para herdar para outras class
//ter essa class como pai para outras classes
//e reusar código a partir de uma class abstract
//mas vc não quer instancia aquela class
//mas quer instancia os filhos 
//vc pode definir uma class inacabada
//ex:
//vc tem uma class x, tem uma function y que recebe valor a e vai retornar number
//dentro da class x eu não sei como implementar a função y
//só vou saber implementar nas classes filhas
//cada class filha vai ter uma implementação diferente
//a unica coisa que eu sei, é que a class x, terá obrigatoriamente o método y
class x {
    //e vc pode ter outros métodos concretos. ex:
    w(b) {
        console.log(b);
    }
}
//resumindo
//em um class abstract eu posso ter:
// métodos obstrata
//são métodos que eu não sei como implementar
//posso deixar a class inacabada
//e posso ter métodos concretos
//exemplo da aula:
class Calculo {
    constructor() {
        this.resultado = 0;
    }
    //ou seja, eu vou receber um conjunto de numeros
    //ele vai realizar o cal e armazenar o valor nessa variavel resultado
    getResultado() {
        return this.resultado;
    }
}
class Soma extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total + atual);
    }
}
class Multiplicar extends Calculo {
    executar(...numeros) {
        this.resultado = numeros.reduce((total, atual) => total * atual);
    }
}
let c1 = new Soma();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
c1 = new Multiplicar();
c1.executar(2, 3, 4, 5);
console.log(c1.getResultado());
let c2 = new Multiplicar();
c2.executar(2, 3, 4, 5);
console.log(c2.getResultado());
//constructor privado e singleton
//tornar o constructor privado e retornar uma instancia
class Unico {
    constructor() { }
    static getInstance() {
        return Unico.instance;
        //aqui eu estou retornando exatamente o tipo da minha class
    }
    //metods não estão associado a class e sim a instancia.
    agora() {
        return new Date;
    }
}
Unico.instance = new Unico;
// const errado = new Unico()
// errado.agora()
//não posso fazer Unico.agora, mas posso fazer:
console.log(Unico.getInstance().agora());
//atributos somente de leitura
//ou seja uma vez inicializado não pode ser alterado
class Aviao {
    constructor(modelo, prefixo) {
        this.prefixo = prefixo;
        this.modelo = modelo;
    }
}
const turboHelice = new Aviao('Tu-114', 'PT-ABC');
//turboHelice.modelo = 'CD-8'
console.log(turboHelice);
//como ele foi inicializado uma vez, ele não pode ser mais alterado
//# sourceMappingURL=classes.js.map