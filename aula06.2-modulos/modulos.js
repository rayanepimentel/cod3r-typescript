"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const retangulo_1 = require("./retangulo");
const circunferencia_1 = require("./circunferencia");
console.log(circunferencia_1.areaCircunferencia(10));
console.log(retangulo_1.areaRetangulo(5, 2));
console.log('Modulo carregado...');
//o browser não cconsegue interpretar 
//se tivesse interpretando do ponto de vista no node.js
//iria funcionar
//para funcionar no browser tbm é preciso baixar uma dependencia
//SystemJS 0.X
//no cenário real não é preciso instalar systemJs
//npm i -s systemjs@0.21.6
//carregando módulos
//importando no index.js
//importando padrão node.js
const { digaOla } = require('./novo');
console.log(digaOla('Ray'));
//Resumo
//Namespaces vs Módulos
//Namespaces:
//1 - Organização é feita com objetos, é muito mais lógica do que uma org. física
//independe se o arquivo namespace estará em 1 unico arquivo ou em múltiplos.
//2 - Pode ser separado em vários arquivos.
//3 - Não há necessidade de nenhum tipo de loaders. A própria compilação do ty vai gerar internamente objs
//vc consegue gerar namespace tanto no ambiente do node.js como no browser
//4 - Gerenciamento de dependências torna-se complicado em aplicações grandes
//pq o namespace é muito bom para fugir do ambiente global e evitar o conflito de nomes, nesse sentido ele é muito bom
//Mas como tudo tá disponivel e vc não precisa ser explicito na hora de depender, fica muito mais complicado de gerenciar.
//ex: A depende de B, que depende de D que depende de C.... sem ter uma forma implicita de dependecia, import...
//Nódulos
//1 - Organização feita em módulos reais
//são arquivos independente que tem o seu próprio escopo interno
//2 - Uma aplicação pode ter múltiplos módulos
//3 - Precisa de um loader
//4 - Declaração explícita de dependências. 
//# sourceMappingURL=modulos.js.map