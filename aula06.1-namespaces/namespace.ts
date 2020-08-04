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


namespace Areas {
    const PI = 3.14

    export function circunferencia(raio: number): number {
        return PI * (Math.pow(raio, 2))
    }

    export function retangulo(base: number, altura: number): number {
        return base * altura
    }

}

const PI = 2.99

//agora temos um Pi associado ao namespace
//e as duas funções
//para acessar a função Areas, é preciso fazer duas coisas:
//1 - Referenciar a função a partir do namespace
//ex: console.log(Areas.Circunferencia(10))
//2 - é preciso exportar as funções
//export function ..(){}
//após isso conseguimos acessar:
console.log(Areas.circunferencia(10))
console.log(Areas.retangulo(10, 20))


//fora do namespace, crie uma function
//PI = 2.99
//ou seja fora do contexto Pi será 2.99
console.log(PI)
//e PI 2.99 não causará inteferencia, influencia no calculo 
//Areas.circunferencia(10)
//pq existe um PI dentro no namespace, e ele tá protegido
//ele não vai entrar em conflito
//se o PI do nasmespace estiver fora, ai sim gerará conflito
//pq vc tem duas const dentro do mesmo escopo
//e dentro do namespace ele fica protegido.



//Namespaces aninhados
//namespace dentro de outro namespace

namespace Geometria {
    export namespace Area {
        const PI = 3.14
    
        export function circunferencia(raio: number): number {
            return PI * (Math.pow(raio, 2))
        }
    
        export function retangulo(base: number, altura: number): number {
            return base * altura
        }
    
    }
}


console.log(Geometria.Area.circunferencia(10))
console.log(Geometria.Area.retangulo(10, 20))