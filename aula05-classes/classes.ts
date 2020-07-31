//criar uma classe simples
class Data {
    dia: number
    mes: number
    ano: number

    //constrctor(e vc vai receber como param aquilo que vc wuer usar para contruir o obj)
    constructor(dia: number, mes: number, ano:number) {
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