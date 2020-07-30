//let e const

console.log(seraQuePode)
var seraQuePode = '?' // hoisting = elevar. As variaveis que vc definir como var elas são elevadas
//ou seja o seraQuePode será antes do console, e após o console, ela será chamada
//por isso é undefined e no compilador ainda dará problema

//e se usarmos let
//console.log(seraQuePode2)
//let seraQuePode2
//dará erro pq let não faz hoisting
//mesmo com erro, ainda será exibido undefined
//mas pq? 
//pq no js gerado let estará como var
//pq isso acontece?
//por causa do target: "target" : "es5" e não es6
//para termos os recursos do es6, mude o target para es6

//mas agora não retornou undefined e sim deu erro
//a varivavel não foi definida

//nesse caso é preciso colocar let antes do console
let seraQuePode3
console.log(seraQuePode3)
//retornou undefined

let estaFrio = true
if(estaFrio) {
    var acao = 'Colocar o casaco'
}

console.log(acao)
//uma variavel var ela só tem dois tipos de escopo:
//Ou ela é global ou ela é uma variavel local dentro de uma função

//e com let?
//não vai acontecer, pq o let tem tbm o escopo de bloco
//nesse caso o console.log precisa tá dentro do bloco

let temSol = true
if(temSol) {
    let acao1 = 'Tem praia!'
    console.log(acao1)
}

//const

const cpf: string = '123456789'
//como é const eu não consigo alterar o valor da const
//cpf = '987456321'
console.log(cpf)
//mas se vc mudar target para es5, ele vai fazer a mudança da const
//pq es5 não tem const, e sim var

//let e const
//tanto let como const tem escopo de bloco
//global, função e bloco


