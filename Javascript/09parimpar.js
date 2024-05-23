/*9 - Faça um algoritmo que leia um nº inteiro e mostre uma mensagem indicando se este número é par ou ímpar. 
Ex: se (x%2=0) “x é par”, se (x%2=1) “x é impar”.*/
function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return numero + " é par";
    } else {
        return numero + " é ímpar";
    }
}

var numero = Math.floor(Math.random() * 100);
console.log(parOuImpar(numero)); 
