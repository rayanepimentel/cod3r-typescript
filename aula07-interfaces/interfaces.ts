
interface Humano {
    nome: string
    idade?: number //com ? eu estou dizendo que ele é opcional
    [prop: string]: any //eu não sei o nome e nem o tipo
}

function saudarComOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}`)
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Maria'
}

const pessoa = {
    nome: 'João',
    idade: 27
}

saudarComOla(pessoa)
mudarNome(pessoa)
saudarComOla(pessoa)
//nesse caso fica claro que temos uma duplicação  { nome: string }
//alem de termos pssibilidade de usarmos type alias, podemos usar interfaces


saudarComOla({nome: 'Jonas', idade: 27, xyz: true })
//nesse contexto não é possivel, ele vai ficar reclamando que esse obj
//não é derente a interface Humano, pq tem o atributo idade que não tá dentro de Humano
//posso passar o atributo idade e dizer que ele é opcional
//imagine que eu queira add um outro atributo que eu não sei o nome
//saudarComOla({nome: 'Jonas', idade: 27, xyz: true }) xyz: true
//nesse caso eu tbm tenhoa uma sintaxe para dizer que o nome é dinamico, o nome da propriedade, atributo do obj é dinamico
//para isso usamos um par de [] -> [prop: string]: any
//