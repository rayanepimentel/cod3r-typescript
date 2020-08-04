import { areaR } from './retangulo'
import { areaC } from './circunferencia'

console.log(areaC(10))
console.log(areaR(5, 2))

//o browser não cconsegue interpretar 
//se tivesse interpretando do ponto de vista no node.js
//iria funcionar
//para funcionar no browser tbm é preciso baixar uma dependencia
//SystemJS 0.X
//no cenário real não é preciso instalar systemJs
//npm i -s systemjs@0.21.6

