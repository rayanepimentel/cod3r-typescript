//criar uma classe simples
class Data {
    //público por padrão (os três estão public, mesmo sem a palavra reservada)
    dia: number
    public mes: number
    ano: number

    //constrctor(e vc vai receber como param aquilo que vc wuer usar para contruir o obj)
    constructor(dia: number = 1, mes: number = 1, ano:number = 1970) {
        //e dentro do constructo vou inicicializar essas variaveis que pertece a instancia
        this.dia = dia
        this.mes = mes
        this.ano = ano
        //ou seja o constructor recebe os param e inicializando os atributos de instancia 
    }
}

//uma vez defido o construtor, vamos criar o obj

const aniversario = new Data(3, 11, 1991)
console.log(aniversario.dia)
aniversario.dia = 4
console.log(aniversario.dia)
console.log(aniversario)

//tem como passar somente dia em new data? tem
//mas vamos usar o recurso do param padrão
//por exemplo dia: number recebe 1

const casamento = new Data// posso imitir os "()"
casamento.ano = 2017
console.log(casamento)






class DataEsperta {
    constructor(public dia: number = 1, public mes: number = 1, 
        public ano: number = 1970) {
    
    }
}



const aniversario2 = new DataEsperta(3, 11, 1991)
console.log(aniversario2.dia)
aniversario2.dia = 4
console.log(aniversario2.dia)
console.log(aniversario2)



const casamento2 = new DataEsperta// posso imitir os "()"
casamento2.ano = 2017
console.log(casamento2)

//desafio Classe produto
//Aributos: nome, preco e desconto
//criar o constructor
//obs1: Desconto é opcional (valor padrão)
//obs2: criar dois produtos passando dois e três params


class Produto {
    constructor(public nome: string, public preco: number, 
        public desconto: number = 0) {

    }

    public resumo(): string {
        return `
        ${this.nome} custa R$${this.preco} 
        (${this.desconto *100}% off)
        `
    }
}

const telefone = new Produto('Xiaomi', 1200)
console.log(telefone.resumo())

const computador = new Produto('Dell', 2500, 0.1)
console.log(computador.resumo())

//desafio

