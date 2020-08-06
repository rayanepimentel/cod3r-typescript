//Generics
//uso de tipos mais genéricos, por exemplo any
//quando vc usa any, acaba perdendo algumas verificações


//ex:
function echo(objeto: any) {
    return objeto
}

console.log(echo('João').length) //4
console.log(echo(27).length)//não gera erro, mas retorna undefined
console.log(echo({ nome: 'João', idade: 27 }).length)//undefined


//no momento que começarmos a usar generics, o compilador irá informar que
//vc está tentando acessar alguma coisa que não pertece ao number, no exemplo echo(27)


//criando funções com generics
//primeiro precisa definir que a função tem o tipo generics
//usando < > 
//entre < > vc pode colocar o tipo T, y, o que quiser
//por enquanto é um tipo generico e depois vamos especificar esse tipo7
//e o objeto é do tipo T
function echoMelhorado<T>(objeto: T): T {
    return objeto
}

console.log(echoMelhorado('João').length)

//console.log(echoMelhorado(27).length)//aqui ele dectou que vc passou o tipo t
//que é do tipo number(27) e automaticamente ele assumiu que aqui esse T é um number
//e ele sabe que o number não tem o .length

console.log(echoMelhorado('27').length)//como '27' é um tipo string, ele retorna sem erro
//mas se você indicar que T é do tipo number, assim>
//console.log(echoMelhorado<number>('27').length)//nesse cenário ele subs. o T por number, pq foi especificado que T é number
//tanto o param, quão o retorno passa a ser tipo number

console.log(echoMelhorado({ nome: 'João', idade: 27 }).idade)
console.log(echoMelhorado('Maria').toLocaleLowerCase())
console.log(echoMelhorado('Maria').toLocaleUpperCase())




//usando generics com array
//Generics disponiveis na API
const avaliacoes: Array<number> = [10, 9.3, 7.7]
avaliacoes.push(8.4)
//avaliacoes.push('5.5')
//console.log(avaliacoes)//veio o number 8.4 + a string '5.5'
//(5) [10, 9.3, 7.7, 8.4, "5.5"]

//a partir do momento que eu indico que o tipo generics do array é number
//ele indica o erro
//avaliacoes.push('6.6')//O argumento do tipo '"6.6"' não é atribuível ao parâmetro do tipo 'number'
console.log(avaliacoes)

//outro exemplo

function imprimir<R>(args: R[]) {
    args.forEach(elemento => console.log(elemento))
}

imprimir([1, 2, 4, 5])
imprimir(['a', 'b', 'c'])
imprimir([true, false, 'ab', 10])
imprimir<string>(['Maria', 'José', '1', '2'])//aqui eu estou garantindo que será um array de tipo string
//tbm tomos ter tipo mais complexos
//como por exemplos tipos objetos
imprimir<{ nome: string, idade: number }>([
    { nome: 'Ana', idade: 5 },
    { nome: 'Fulano', idade: 4 }
])

//especificando o tipo e usando esse tipo dentro da notação generics

type Aluno = { nome: string, idade: number }

imprimir<Aluno>([
    { nome: 'Ana', idade: 10 },
    { nome: 'Fulano', idade: 11 }
])





//Função com Generics
//tipos genricos
const chamarEcho: <T>(aaa: T) => T = echoMelhorado
console.log(chamarEcho<string>('aquii'))

type Echo = <T>(bbb: T) => T
const chamarEcho2: Echo = echoMelhorado
console.log(chamarEcho2<string>('aquii2'))




//Class com Generics

//ex. class sem generics
class OperacaoBinaria {
    constructor(public operando1: any,
        public operando2: any) { }

    executar() {
        return this.operando1 + this.operando2
    }
}

console.log(new OperacaoBinaria(10, 2).executar()) //12
console.log(new OperacaoBinaria('Bom ', 'dia').executar()) // Bom dia
console.log(new OperacaoBinaria('Oi', 10).executar()) //oi10
console.log(new OperacaoBinaria('Oi', {}).executar()) //Oi[object Object]

//dessa forma ele não gera nenhum tipo de validação
//ele simplesmente acha que é normal somar duas coisas
//e muitas vezes, na prática isso não pode fazer menor sentido

//com generics ele faz essa validação

abstract class OperacaoBinaria2<Y, R> {
    constructor(public operando1: Y,
        public operando2: Y) { }

    //o resultado da função pode ser do tipo R
    //ou seja, pode ser qualquer coisa não obrigatorio ser do tipo Y
    //ex: pode ser que Y sem number e o retorno seja uma string(frase)

    abstract executar(): R
}

class SomaBinaria extends OperacaoBinaria2<number, number> {
    executar(): number {
        return this.operando1 + this.operando2
    }
}


console.log(new SomaBinaria(10, 7).executar())

console.log(Data)
//Data é uma class que já definimos na aula 05 classes.ts

/*
class Data {
    dia: number
    public mes: number
    ano: number

    constructor(dia: number = 1, mes: number = 1, ano:number = 1970) {
 
        this.dia = dia
        this.mes = mes
        this.ano = ano
       
    }
}
*/

class DiferencaEntredadas
    extends OperacaoBinaria2<Data, string> {

    getTime(data: Data): number {
        let { dia, mes, ano } = data
        return new Date(`${mes}/${dia}/${ano}`).getTime()
    }

    executar(): string {
        const y1 = this.getTime(this.operando1)
        const y2 = this.getTime(this.operando2)
        const diferenca = Math.abs(y1 - y2)//pega o valor absoluto e não tem perigo de sair negativo
        const dia = 1000 * 60 * 60 * 24
        return `${Math.ceil(diferenca / dia)} dia(s)`
    }
}

const d1 = new Data(1, 2, 2020)
const d2 = new Data(10, 5, 2020)

const d12 = new DiferencaEntredadas(d1, d2).executar()
console.log(d12)


//Desafio Class Fila generics
//Atributo: fila (Array)
//Métodos: entrar(push), proximo(splice) e imprimir

//crie uma fila com string nomes de pessoas
//add os elementos da fila


class Fila<T> {
    private fila: Array<T>

    constructor(...nomes: T[]) {
        this.fila = nomes
    }

    entrar(elemento: T) {
        this.fila.push(elemento)
    }

    proximo(): T | null{
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
            this.fila.splice(0, 1)
            return primeiro
        } else {
            return null
        }
    }

    imprimir() {
        console.log(this.fila)
    }

}

const nomes = new Fila<string>('Mia', 'Bia', 'Ana')
nomes.imprimir()
nomes.entrar('Mel')
nomes.imprimir()
nomes.proximo()
nomes.imprimir()


