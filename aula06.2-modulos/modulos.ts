import { areaRetangulo as areaR} from './retangulo'
import { areaCircunferencia as areaC} from './circunferencia'

console.log(areaC(10))
console.log(areaR(5, 2))
console.log('node')

//o browser não cconsegue interpretar 
//se tivesse interpretando do ponto de vista no node.js
//iria funcionar
//para funcionar no browser tbm é preciso baixar uma dependencia
//SystemJS 0.X
//no cenário real não é preciso instalar systemJs
//npm i -s systemjs@0.21.6



//carregando módulos
//importando no index.js
