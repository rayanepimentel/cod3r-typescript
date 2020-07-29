//mesmo quando existe um erro no ts, o js é gerado
//como evitar isso?
//dento do arquivo de configuração conseguimos barrar a compilação quando tiver um erro

let canal: string = 'Gaveta'
let inscritos: number = 610234

//para gerar erro
//canal = inscritos 
console.log(canal)
//mesmo com erro ele consegue exibir a quantidade de inscritos
//msg de erro:
// error TS2322: Type 'number' is not assignable to type 'string'.
//9 canal = inscritos

//no arquivo de configuração
//crie uma propriedade:
//"noEmitOnError": true,
//para ele não emitir quando tiver um erro
//se você apagar o compilador.js ele vai mostrar o erro na pagina

console.log(`Canal = ${canal}`)
//ele exibi o erro e não deixa compilar
//ao comentar a linha 9 irá aparecer Canal = Gaveta

//produzindo outro erro, apague o compilador.js

//let nome = 'Pedro'

//pq ele não atribuiu nome a uma string?
// mesmo colocando let nome: string, ainda assim fica com erro

//pq ela foi declada na no aquivo tipos.ts
//e agora estou declarando novamente em compilador.ts
//pq? 
//pq isso tudo tá dentro do mesmo escopo index.html
//no mesmo contexto

//a possilibidade de usar nome, é não declarar como variável
nome = 'Pedro'
console.log(`Nome = ${nome}`)

//Alterando o target
//target informa a versão do js. quando copilado.
//por padrão ele vem es5
//"target": "es5", 
//vamos atualizar para es6
//diferença:
//por exemplo lá no tipo.ts let nome
// no tipo.js tá var nome
//tá var pq na versão es5 não tinha let
//alterando para  "target": "es6", 
//podemos ver o que era var, passar a ser let

//mas pode deixar na versão padrão


//alterar sourceMap
//objetivo: habilitado o console, vc terá acesso ao código original que gerou o js, que tá cendo interpretado pela página
//quando vc gera um javascript de produção, ele é todo modificado para ficar o menor possível
//para que vc tenha uma transferencia de arq rápido para web
//e é muito dificil vc olhar, como ele foi mimificado, vai ficar muito dificil para interpretar e saber exatamente que codigo é aquele
//o arquivo .map ele vai fazer o mapeamento entre o arq qye estar sendo excutado no browser e o arq que foi usado para fazer aquele codigo
//ou seja com souceMap temos acesso ao arquivo .ts

//com souceMap gerado, no console entre em Sources e terá as pastas do projeto
//entre no compilador.ts 
//vc terá todo o código do .ts


//Any implicito 

//vai gerar problema
function soma(a: any, b: any){
    return a + b
}

//no config ts, descomente "noImplicitAny": true,

//não vai gerar problema
let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'abc'



//checagem de null e parametros

function saudar(isManha: boolean): string {
    let saudacao: string
    if(isManha) {
        saudacao = 'Bom dia!'
    } else {
        saudacao =  'Boa ....'
    }
    return saudacao
    //erro saudação estar sendo usada antes de ser atribuida
}

//para corrigir descomente "strictNullChecks": false,   
