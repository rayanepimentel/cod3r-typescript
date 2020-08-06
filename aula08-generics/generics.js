"use strict";
//Generics
//uso de tipos mais genéricos, por exemplo any
//quando vc usa any, acaba perdendo algumas verificações
//ex:
function echo(objeto) {
    return objeto;
}
console.log(echo('João').length); //4
console.log(echo(27).length); //não gera erro, mas retorna undefined
console.log(echo({ nome: 'João', idade: 27 }).length); //undefined
//# sourceMappingURL=generics.js.map