"use strict";
//namespace
//criar duas funções
//1 para calcular a circunferência
//1 para calcular a area do retangulo
//sera preciso criar um namespce chamado area
//que será responsavel por tem funções que irão calcular area de algumas figuras
const PI = 3.14;
function areaCircunferencia(raio) {
    return PI * (Math.pow(raio, 2));
}
function areaRetangulo(base, altura) {
    return base * altura;
}
console.log(areaCircunferencia(10));
console.log(areaRetangulo(10, 20));
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
//# sourceMappingURL=namespace.js.map