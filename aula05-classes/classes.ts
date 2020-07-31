//criar uma classe simples
class Data {
    dia: number
    mes: number
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