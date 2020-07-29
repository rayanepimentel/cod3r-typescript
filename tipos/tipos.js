"use strict";
// string
var nome = 'João';
console.log(nome);
//nome = 28
//vai ficar marcado que tem um erro no código
//pq tipo 28, não é uma string
//mas não colocamos nenhuma indicação que é do tipo string
//os tipos são inferidos, ou seja no momento que você inicializa a var
//dar um valor para ela, o compilador vai detectar
//o tipo de valor que foi atribuido na variavel nome é string
//significa que nome passa a ser string de forma implicita.
//por mais que vc não tenha dido que era tipo string
//o fato de ter passado o valor em forma de string, fez com que ele entendesse
//que a variavel nome é tipo string
//primeira observação
//por mais que vc tenha escrevido um código puramente em js
//sem ter falado o tipo e nada, o compilador vai inferir esse valor
//e no momento que vc informa um tipo diferente, ele vai reclamar
//numbers
var idade = 5;
//idade = 'Ana'
idade = 27.5;
//assim como no js, em .ts vc pode ter tanto num interios como flutuantes
console.log(idade);
//boolean
var possuiHobbies = false;
//possuiHobbies = 1 
//erro
console.log(possuiHobbies);
//ao executar ele vai mostrar o valor 1
//para isso não acontecer podemos dizer ao compilador que ele não gere
//arquivo .js quando acontecer um erro
//em todos os casos declaramos a variavel e inicializamos
// let nome = 'João'
//se você não iniciar a variavel o compilador não irá fazer essa inferencia automaticamente
//tipos explícitos
var minhaIdade; //declarei e não inicializei
minhaIdade = 5; //nesse caso eu não tenho um number
//nesse caso eu tenho um tipo dinâmico
console.log(typeof minhaIdade); //number
minhaIdade = 'idade é 5'; //sem nenhum erro
console.log(typeof minhaIdade); //string
//poderiamos colocar tipo any
var myAge; //ou seja pode ter number, string, boolean, objeto, array
myAge = 6;
console.log(typeof myAge);
myAge = 'minha idade 5';
console.log(typeof myAge);
myAge = true;
console.log(typeof myAge);
//Ou seja para passarmos o tipo, declamos a variamos e passamo qual o tipo
var myName = 'João';
var age = 5;
var hobbies;
//array
var myHobbies = ['Cozinhar', 'Dança']; //um array de string
console.log(myHobbies[0]);
console.log(typeof myHobbies); //ele vai inferir como object
//myHobbies = [100, 200]// continua sendo array, mas não é string
//umas das coisas que podemos fazer é passar a let como array
//podemos coloca que queremos qualquer tipo de array
var myHobbies2 = ['Cozinhar', 'Dança'];
myHobbies2 = [100, 200];
//myHobbies2 = 100 //erro pq não é um array
//tuplas
//é um array, com a quantidade de tipos pre-definido
//ex: quero um array que tenha 1 string e 2 numbers
//obrigatoriamos é um array de 3 posições, 1 string e 2 numbers
var endereco = ['Av Principal', 99];
console.log(endereco);
//verifica a quantidade, o tipo e a ordem
endereco = ['Rua dos Bobos', 0];
//enums
//é uma estrutura com valores pre-definidos
//exemplo: dias da semana. meses do ano, generos dos filmes
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Lilas"] = 1] = "Lilas";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho"; //6
})(Cor || (Cor = {}));
var minhaCor = Cor.Verde;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Laranja, Cor.Amarelo);
console.log(Cor.Verde, Cor.Vermelho);
console.log(Cor.Cinza, Cor.Lilas);
//o ideal é deixar ele gerar os valores, sem fica passando
//any
var carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//não gerou nenhum erro
//funções
function retornaMeuNome() {
    return myName;
    //return age
}
console.log(retornaMeuNome());
//e se eu quiser que essa função retorna uma srting
function retornaMeuNome2() {
    return myName;
    //return age
}
console.log(retornaMeuNome2());
//quando o metodo não retorna nada
function digaOi() {
    console.log('Oi');
}
digaOi();
//como ela não retorna nada podemos usar o tipo void (vazio)
function digaOla() {
    console.log('Olá');
    //return age //erro pq ela não retorna nada
}
digaOla();
function multiplicar(numA, numB) {
    return numA * numB;
}
//console.log(multiplicar(2, 'Bia'))//NaN não retornou numero inválido
console.log(multiplicar(4.7, 9));
//tipo função
var calculo;
//calculo = digaOi
//calculo()
calculo = multiplicar;
console.log(calculo(5, 6));
//objetos 
//os atributos e os tipos são verificados
var usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
//usuario = {} //erro pq tá vazio
/*usuario = {
    name: 'Maria',
    age: 5
}*/
//erro pq não respeitou o atributo nome e idade
//definir explicidamente os tipos
var user = {
    nome: 'Maria',
    idade: 5
};
console.log(user);
user = {
    idade: 27,
    nome: 'João'
};
console.log(user);
//Desafio
/*
Criar um objeto funcionário com:
   -Array de strings com os nomes dos supervisores
   -Função de bater ponto que recebe a hora(número) e retorna
   uma string
    -> Ponto nomal(<= 8)
    -> Fora do horário (> 8 )
*/
var funcionario = {
    supervisores: ['Maria', 'João'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores[0], funcionario.baterPonto(10));
var funcionario2 = {
    supervisores: ['Bia', 'Chico'],
    baterPonto: function (horario) {
        if (horario <= 8) {
            return 'Ponto normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
//Union Types
//por exemplo, vc tme uma nota e vc aceita receber tanto em number e string
var nota = 10;
console.log("Minha nota \u00E9 " + nota + "!");
//nota = '11' //deu erro
//nesse caso umas das possibilidades é colocar nota:any
//mas nesse caso ele vai aceitar tudo, inclusive:
//nota = true // mas esse é um cenário não desejado para essa situação
//o que eu realmente quero é receber, ter a possibilidade de number e string
//no caso, eu posso usar Unin types nota: number | string
var notas = 12;
console.log("Minha nota \u00E9 " + notas + "!");
notas = '13';
console.log("Minha nota \u00E9 " + notas + "!");
//usando union types temos a possobilidade de termos mais de um tipo de usarmos na variavel
//sem perder a checagem dos tipos
//checando tipos manualmente no mundo JS
var valor = 30;
//por inferencia o copilador .ts já associou valor a number
if (typeof valor === 'number') {
    console.log('É number');
}
else {
    console.log("\u00C9 do tipo " + typeof valor);
}
