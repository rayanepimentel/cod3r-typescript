//Decorators
//class inicalmente nada
//e sabemos que a class é na verdade uma function typeof Eletrodomestico
@logarClasse
class Eletrodomestico {
    constructor() {
        console.log('novo....')
    }

}

//console.log(typeof Eletrodomestico)//é uma função

//o decoration na verdade é uma função
//criar um function, o nome do decoration logarClasse
//e o logarClasse será referenciado acima da class com @nomedele
//e cmo param. logarClasse recebe uma função, que pode ser qualquer nome
function logarClasse(xuxu: Function) {
    console.log(xuxu)//aqui sera exatamente a class Eletrodomestico
}

//recapitulando:

//criamos uma função
//essa função será chamada com decoration, com param. a função(class Eletro...) que vc decorou
