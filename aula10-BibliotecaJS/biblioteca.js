"use strict";
//opção simples usando declare
// declare const $: any
$('body').append('Usando jQuery! ');
//segunda opção salvando arq. específico
//arq. jquery.d.ts
//e passar o declare para lá.
//outra forma Usando Definição de Tipos Pública
//comente declare no arquivo .d.ts
//na pasta raiz instale as definições do jquery
//npm i --save-dev @types/jquery
$('body').append(' Encerrando módulo jQuery');
//# sourceMappingURL=biblioteca.js.map