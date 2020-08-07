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
function logarClasse(xuxu: Function) {
    console.log(xuxu)//aqui sera exatamente a class Eletrodomestico
}

//recapitulando:

//criamos uma função
//essa função será chamada com decorator, com param. a função(class Eletro...) que vc decorou
//esse decorator só será chamado quando a classe for carregada


//Decorator Factory
//uma função que retorna um decorator


function logarClasseSe(valor: boolean) {
    return valor ? logarClasse : null
}

//ou

function decorator(a: string, b: number) {
    return function(_: Function): void {
        console.log(a + ' ' + b)
    }
}


//Alterando Construtor com Decorator de Class
