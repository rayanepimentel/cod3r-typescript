// string
let nome = 'João'
console.log(nome)

//nome = 28

//vai ficar marcado que tem um erro no código

//pq tipo 28, não é uma string
//mas não colocamos nenhuma indicação que é do tipo string
//os tipos são inferidos, ou seja no momento que você inicializa a var
//dar um valor para ela, o compilador vai detectar
//o tipo de valor que foi atribuido na variavel nome é string
//significa que nome passa a ser string de forma implicita.
//por mais que vc não tenha dido que era tipo string
//o fato de ter passado o valor em forma de string, fez com que ele entendesse
//que a variavel nome é tipo string

//primeira observação
//por mais que vc tenha escrevido um código puramente em js
//sem ter falado o tipo e nada, o compilador vai inferir esse valor
//e no momento que vc informa um tipo diferente, ele vai reclamar

//numbers
let idade = 5
//idade = 'Ana'

idade = 27.5
//assim como no js, em .ts vc pode ter tanto num interios como flutuantes

console.log(idade)

//boolean

let possuiHobbies = false
//possuiHobbies = 1 
//erro
console.log(possuiHobbies)
//ao executar ele vai mostrar o valor 1
//para isso não acontecer podemos dizer ao compilador que ele não gere
//arquivo .js quando acontecer um erro

//em todos os casos declaramos a variavel e inicializamos
// let nome = 'João'
//se você não iniciar a variavel o compilador não irá fazer essa inferencia automaticamente

//tipos explícitos
let minhaIdade //declarei e não inicializei
minhaIdade = 5 //nesse caso eu não tenho um number
//nesse caso eu tenho um tipo dinâmico
console.log(typeof minhaIdade) //number
minhaIdade = 'idade é 5' //sem nenhum erro
console.log(typeof minhaIdade) //string

//poderiamos colocar tipo any
let myAge : any //ou seja pode ter number, string, boolean, objeto, array
myAge = 6
console.log(typeof myAge)
myAge = 'minha idade 5'
console.log(typeof myAge)
myAge = true
console.log(typeof myAge)


//Ou seja para passarmos o tipo, declamos a variamos e passamo qual o tipo
let myName : string = 'João'
let age : number = 5
let hobbies : boolean


//array
let myHobbies = ['Cozinhar', 'Dança'] //um array de string
console.log(myHobbies[0])
console.log(typeof myHobbies)//ele vai inferir como object

//myHobbies = [100, 200]// continua sendo array, mas não é string
//umas das coisas que podemos fazer é passar a let como array
//podemos coloca que queremos qualquer tipo de array

let myHobbies2: any [] = ['Cozinhar', 'Dança']
myHobbies2 = [100, 200]

//myHobbies2 = 100 //erro pq não é um array


//tuplas
//é um array, com a quantidade de tipos pre-definido
//ex: quero um array que tenha 1 string e 2 numbers
//obrigatoriamos é um array de 3 posições, 1 string e 2 numbers


let endereco: [string, number] = ['Av Principal', 99]
console.log(endereco)
//verifica a quantidade, o tipo e a ordem
endereco = ['Rua dos Bobos', 0]

//enums
//é uma estrutura com valores pre-definidos
//exemplo: dias da semana. meses do ano, generos dos filmes

enum Cor {
    Cinza, //0
    Lilas, //1
    Verde = 100, //2
    Azul = 10, //3
    Laranja, //4
    Amarelo, //5
    Vermelho = 100 //6
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)
console.log(Cor.Cinza, Cor.Lilas)

//o ideal é deixar ele gerar os valores, sem fica passando


//any
let carro : any = 'BMW'
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)
//não gerou nenhum erro

//funções

function retornaMeuNome() {
    return myName
    //return age
}

console.log(retornaMeuNome())

//e se eu quiser que essa função retorna uma srting

function retornaMeuNome2() : string {
    return myName
    //return age
}

console.log(retornaMeuNome2())

//quando o metodo não retorna nada
function digaOi() {
    console.log('Oi')
}

digaOi()

//como ela não retorna nada podemos usar o tipo void (vazio)

function digaOla(): void {
    console.log('Olá')
    //return age //erro pq ela não retorna nada
}

digaOla()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

//console.log(multiplicar(2, 'Bia'))//NaN não retornou numero inválido
console.log(multiplicar(4.7,9))


//tipo função

let calculo: (numeroA: number, numeroB: number) => number
//calculo = digaOi
//calculo()

calculo = multiplicar
console.log(calculo(5,6))

