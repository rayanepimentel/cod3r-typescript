//namespace
//criar duas funções
//1 para calcular a circunferência
//1 para calcular a area do retangulo
//sera preciso criar um namespce chamado area
//que será responsavel por tem funções que irão calcular area de algumas figuras

// const PI = 3.14

// function areaCircunferencia(raio: number): number {
//     return PI * (Math.pow(raio, 2))
// }

// function areaRetangulo(base: number, altura: number): number {
//     return base * altura
// }

// console.log(areaCircunferencia(10))
// console.log(areaRetangulo(10, 20))

//essas funções estão diretamente dentro do corpo global da nossa aplicação
//tanto se você for em outro arquivo e quiser nomear uma função que já esxite
//por exemplo em tipos temos a função retornaMeuNome
//se vc tentar nomear areaCircunferencia por retornaMeuNome
//dará erro
//ou seja estamos em um contexto global
//qualquer função que eu acrescente por evetualmente subscrever uma função que já existe
//dai a necessidade de usar namespace, espaços de nomes

//mas para que serve isso?
//namespace é um espaço reservado que ali dentro vc pode colocar um nome
//tento a garantia que aquele nome não vai conflitar com o escopo global
//pq dentro desse namespace vc pode colocar um nome
//sabendo que só ali dentro vc precisa garantir 
//o nome único para que não tenha conflito
//ou seja, vc não precisa de preocupar com scopo global
//para definir o namespace
//vc coloca namespace, o nome do namespace


// namespace Areas {
//     const PI = 3.14

//     export function circunferencia(raio: number): number {
//         return PI * (Math.pow(raio, 2))
//     }

//     export function retangulo(base: number, altura: number): number {
//         return base * altura
//     }

// }

// const PI = 2.99

//agora temos um Pi associado ao namespace
//e as duas funções
//para acessar a função Areas, é preciso fazer duas coisas:
//1 - Referenciar a função a partir do namespace
//ex: console.log(Areas.Circunferencia(10))
//2 - é preciso exportar as funções
//export function ..(){}
//após isso conseguimos acessar:
// console.log(Areas.circunferencia(10))
// console.log(Areas.retangulo(10, 20))


//fora do namespace, crie uma function
//PI = 2.99
//ou seja fora do contexto Pi será 2.99
// console.log(PI)
//e PI 2.99 não causará inteferencia, influencia no calculo 
//Areas.circunferencia(10)
//pq existe um PI dentro no namespace, e ele tá protegido
//ele não vai entrar em conflito
//se o PI do nasmespace estiver fora, ai sim gerará conflito
//pq vc tem duas const dentro do mesmo escopo
//e dentro do namespace ele fica protegido.



//Namespaces aninhados
//namespace dentro de outro namespace

// namespace Geometria {
//     export namespace Area {
//         const PI = 3.14
    
//         export function circunferencia(raio: number): number {
//             return PI * (Math.pow(raio, 2))
//         }
    
//         export function retangulo(base: number, altura: number): number {
//             return base * altura
//         }
    
//     }
// }

///<reference path='geometriaCirc.ts'/> 
///<reference path='geometriaRect.ts'/> 

const PI = 2.99

console.log(Geometria.Area.circunferencia(10))
console.log(Geometria.Area.retangulo(10, 20))

console.log(PI)

//namespaces em múltiplos arquivos

//dentro da pasta namespace, crie 2 arquivos:
//gerometriaCirc.ts e geometriaRect.ts
//e vou dividir o namespace geometria nos dois arquvios
//para funcionar:
//1 - vc oode fazer os imports dos arquivos no index.js
//2 - ou pelo terminal
//pare o terminal (tsc -w)
//entre na pasta namespace
//e dentro rode 
//tsc -w --outFile + arqDeSaida + arquivosQueElePrecisa
//tsc -w --outFile namespace.js geometriaCirc.ts geometriaRect.ts namespace.ts
//ou seja os tres arquivos serão monitorados para gerar o arquivo namespace.js no final
//fazendo isso ele vai copilar e não dará nenhuma mensagem de erro no console

//por enquanto o tsc -w só monitorando da pasta namespace

//3 - Referenciar apenas o arquivo namespace.ts
//tsc -w --outFile namespace.js namespace.ts
//ele vai gerar problema pq não vai reconhecer os outros 2 arquivos
//uma formar para resolver isso:
//3.1 dentro de namespace podemos fazer uma referencia dos arquivos
//no inicio do aquivo namespace.ts 
/*

///<reference path='geometriaCirc.ts'/> 
///<reference path='geometriaRect.ts'/> 

*/

//não deu mais erro
//essa reference serviu para o compilador tsc  encontrar o arquvido
//e a partir desses arqs. que ele encontrou, ele compilou e fez a reference correta


//voltando a pasta raiz do projeto e inicando tsc -w


//resumo:

//a resolução pode ser feita:
// - pelos imports dos scripts
// - pode ser feita pela linha de comando
//   1 - passando arquivo de saída e tods necessário para compilação
//   2 - passando o arquivo de saída + 1 arquivo ts
//         2.1 - passando a reference




//limitações dos namespaces
//não tem nenhuma menção que é preciso importar ou exportar
//por isso quando a aplicação começa a crescer, a melho maneira é usar módulos

